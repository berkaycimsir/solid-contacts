import { Contact } from '../types/Contact';
import { createPersistentStore } from '../utils/createPersistentStore';

export const [addedContacts, setAddedContacts] = createPersistentStore<
  Array<Contact>
>({
  initialState: [],
  name: 'contacts',
});
