import { Component, createResource, Show } from 'solid-js';
import ContactList from '../components/Contact/ContactList';
import ContactSkeletons from '../components/Contact/ContactSkeletons';
import { Contact } from '../types/Contact';
import { fetchContacts } from '../utils/fetchContacts';

const Home: Component = () => {
  const [data] = createResource<Array<Contact>>(fetchContacts);

  return (
    <div>
      <Show when={data.loading}>
        <ContactSkeletons />
      </Show>

      <Show when={data() && !data.loading}>
        <ContactList contacts={data()} />
      </Show>
    </div>
  );
};

export default Home;
