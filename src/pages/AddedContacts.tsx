import { Component } from 'solid-js';
import ContactList from '../components/Contact/ContactList';
import { addedContacts } from '../store/addedContacts';

const AddedContacts: Component = () => {
  return (
    <div>
      <ContactList contacts={addedContacts} />
    </div>
  );
};

export default AddedContacts;
