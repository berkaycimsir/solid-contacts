import { createPersistentStore } from '../utils/createPersistentStore';

export const [blockedContacts, setBlockedContacts] = createPersistentStore<
  Array<string>
>({
  initialState: [],
  name: 'blocked-contacts',
});
