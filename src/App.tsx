import { Container } from '@hope-ui/solid';
import { Component, createResource, Show } from 'solid-js';
import ContactList from './components/Contact/ContactList';
import ContactSkeletons from './components/Contact/ContactSkeletons';
import Header from './components/Header';
import { Contact } from './types/Contact';
import { fetchContacts } from './utils/fetchContacts';

const App: Component = () => {
  const [data] = createResource<Array<Contact>>(fetchContacts);

  return (
    <Container p="$6" centered maxW="$containerXl">
      <Header />

      <Show when={data.loading}>
        <ContactSkeletons />
      </Show>

      <Show when={data() && !data.loading}>
        <ContactList contacts={data()} />
      </Show>
    </Container>
  );
};

export default App;
