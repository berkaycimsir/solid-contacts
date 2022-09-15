import { Component } from 'solid-js';
import { Contact } from '../../types/Contact';

type Props = {
  contact: Contact;
};

const ContactListItem: Component<Props> = ({ contact }) => {
  return (
    <div>
      {contact.name.first} {contact.name.last}
    </div>
  );
};

export default ContactListItem;
