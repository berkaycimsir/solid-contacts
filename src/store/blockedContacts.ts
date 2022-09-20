import { Contact } from '../types/Contact';
import { createPersistentStore } from '../utils/createPersistentStore';

export const [blockedContacts, setBlockedContacts] = createPersistentStore<
  Array<Contact>
>({
  initialState: [],
  name: 'blocked-contacts',
});
