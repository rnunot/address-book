import { openDB } from 'idb';
import { AppDB } from '@/db/types';

export default openDB<AppDB>('address-book-db', 1, {
  upgrade(db) {
    db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('groups', { keyPath: 'id' });
  },
});
