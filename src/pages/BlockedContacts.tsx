import { Component } from 'solid-js';
import ContactList from '../components/Contact/ContactList';
import { blockedContacts } from '../store/blockedContacts';

const BlockedContacts: Component = () => {
  return (
    <div>
      <ContactList contacts={blockedContacts} />
    </div>
  );
};

export default BlockedContacts;
