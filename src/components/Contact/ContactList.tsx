import { Grid, hope } from '@hope-ui/solid';
import { Component, For } from 'solid-js';
import { Contact } from '../../types/Contact';
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

  return (
    <StyledGrid>
      <For each={contacts}>
        {(contact) => <ContactListItem contact={contact} />}
      </For>
    </StyledGrid>
  );
};

export default ContactList;
