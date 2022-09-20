import { createStore } from 'solid-js/store';
import { Contact } from '../types/Contact';

export const [contacts, setContacts] = createStore<{
  data: Array<{ page: number; result: Array<Contact> }>;
}>({
  data: [],
});
