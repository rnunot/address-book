import Vue from 'vue';
import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { Contact, ContactsState } from '@/store/contacts/types';
import db from '@/db';
import contactService from '@/services/contact.service';

const actions: ActionTree<ContactsState, RootState> = {
  async saveContact({ dispatch, getters }, contact: Contact) {
    return contact.id
      ? dispatch('updateContact', contact)
      : dispatch('addContact', contact);
  },

  async addContact({ commit, dispatch, rootGetters }, contact: Contact) {
    try {
      // idb can't handle undefined as the keypath value
      delete contact.id;

      contact.id = await (await db).add('contacts', contact);
    } catch (e) {
      throw new Error('Database error');
    }

    commit('addContact', contact);

    try {
      await contactService.create(rootGetters['auth/addressBookId'], {
        ...contact,
        id: undefined,
      });
    } catch (e) {
      dispatch('rollBackCreate', contact);
      throw e;
    }
  },

  async rollBackCreate({ commit }, contact: Contact) {
    await (await db).delete('contacts', contact.id!);
    commit('deleteContact', contact);
  },

  async updateContact(
    { commit, dispatch, getters, rootGetters },
    contact: Contact,
  ) {
    const originalContact = getters.contactById(contact.id);

    await (await db).put('contacts', contact);
    commit('updateContact', contact);

    try {
      await contactService.update(
        rootGetters['auth/addressBookId'],
        originalContact.name,
        {
          ...contact,
          id: undefined,
        },
      );
    } catch (e) {
      dispatch('rollBackUpdate', originalContact);
      throw e;
    }
  },

  async rollBackUpdate({ commit }, originalContact: Contact) {
    await (await db).put('contacts', originalContact);

    commit('updateContact', {
      id: originalContact.id,
      contact: originalContact,
    });
  },

  async deleteContact({ commit, dispatch, getters, rootGetters }, contact) {
    await (await db).delete('contacts', contact.id);
    commit('deleteContact', contact);

    try {
      await contactService.delete(rootGetters['auth/addressBookId'], contact);
    } catch (e) {
      /* @todo: show error notification */
      dispatch('rollBackDelete', contact);
      throw e;
    }
  },

  async rollBackDelete({ commit }, originalContact: Contact) {
    await (await db).put('contacts', originalContact);

    commit('addContact', originalContact);
  },

  async storeContacts({ commit, dispatch }, contacts: Contact[]) {
    const tx = (await db).transaction('contacts', 'readwrite');
    tx.store.clear();
    contacts.forEach(contact => {
      tx.store.put(contact);
    });
    await tx.done;

    // we need to populate the contacts with the local db ids
    // before loading them into vuex
    await dispatch('loadContactsFromDb');
  },

  async loadContactsFromDb({ commit }) {
    commit('setLoading', true);

    const contacts: Contact[] = [];

    let cursor = await (await db).transaction('contacts').store.openCursor();

    while (cursor) {
      contacts.push(cursor.value);
      cursor = await cursor.continue();
    }

    commit('storeContacts', contacts);

    commit('setLoading', false);
  },

  init: {
    root: true,
    async handler({ dispatch }) {
      dispatch('loadContactsFromDb');
    },
  },
};

export default actions;
