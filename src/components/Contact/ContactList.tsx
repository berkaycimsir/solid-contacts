import { Grid, hope } from '@hope-ui/solid';
import { Component, createMemo, For } from 'solid-js';
import { Contact } from '../../types/Contact';
import { getContactFullName } from '../../utils/helpers';
import { contacts as contactsStore } from '../../store/contacts';
import ContactListItem from './ContactListItem';
import ContactsNotFound from './ContactsNotFound';

const StyledGrid = hope(Grid, {
  baseStyle: {
    gap: '$6',
    w: '$full',

    '@lg': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },

    '@md': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

type Props = {
  contacts: Array<Contact> | undefined;
};

const ContactList: Component<Props> = ({ contacts }) => {
  if (!contacts) return <ContactsNotFound />;

  const filteredContacts = createMemo(() => {
    const pageData = contactsStore.data.find(
      (d) => d.page === contactsStore.currentPage
    );
    if (!pageData?.search) return contacts;
    return (contacts || []).filter((contact) =>
      getContactFullName(contact)
        .toLowerCase()
        .includes(pageData.search.toLowerCase())
    );
  });

  return (
    <StyledGrid>
      <For each={filteredContacts()}>
        {(contact) => <ContactListItem contact={contact} />}
      </For>
    </StyledGrid>
  );
};

export default ContactList;
