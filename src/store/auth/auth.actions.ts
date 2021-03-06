import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthState } from '@/store/auth/types';
import router from '@/router';
import addressBookService from '@/services/addressBook.service';

const sessionKey = 'address-book-session';

const actions: ActionTree<AuthState, RootState> = {
  async register({ dispatch }, { username, password }) {
    const addressBook = await addressBookService.create(username, password);

    dispatch('saveSession', addressBook);
  },

  async login({ dispatch }, { username, password }) {
    const addressBook = await addressBookService.login(username, password);

    dispatch('saveSession', addressBook);
  },

  saveSession({ commit, dispatch }, addressBook) {
    const session = {
      id: addressBook.id,
      username: addressBook.username,
    };

    commit('setSession', session);

    localStorage.setItem(sessionKey, JSON.stringify(session));
    dispatch('contacts/storeContacts', addressBook.contacts, { root: true });
    dispatch('groups/storeGroups', addressBook.groups, { root: true });
  },

  async refreshData({ getters, dispatch }) {
    const addressBook = await addressBookService.getById(getters.addressBookId);
    await dispatch('contacts/storeContacts', addressBook.contacts, {
      root: true,
    });
    await dispatch('groups/storeGroups', addressBook.groups, { root: true });
  },

  logout({ commit }) {
    commit('setSession', undefined);
    localStorage.removeItem(sessionKey);

    router.push('/login');
  },

  async changePassword({ getters }, { oldPassword, newPassword }) {
    return await addressBookService.updatePassword(
      getters.addressBookId,
      getters.username,
      oldPassword,
      newPassword,
    );
  },

  async deleteAddressBook({ dispatch, getters }) {
    await addressBookService.delete(getters.addressBookId);
    dispatch('logout');
  },

  init: {
    root: true,
    handler({ commit, dispatch }) {
      const session = JSON.parse(localStorage.getItem(sessionKey) || 'null');

      if (session) {
        commit('setSession', session);
        dispatch('refreshData');
      }
    },
  },
};

export default actions;
