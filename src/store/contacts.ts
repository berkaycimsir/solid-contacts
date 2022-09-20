import { createStore } from 'solid-js/store';
import { Contact } from '../types/Contact';

export const [contacts, setContacts] = createStore<{
  currentPage: number;
  data: Array<{ page: number; result: Array<Contact>; search: string }>;
}>({
  currentPage: 1,
  data: [],
});
