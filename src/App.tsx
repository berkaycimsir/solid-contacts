import { Container, Grid } from '@hope-ui/solid';
import { Component, createResource, Show } from 'solid-js';
import ContactList from './components/Contact/ContactList';
import ContactSkeletons from './components/Contact/ContactSkeletons';
import Header from './components/Header';
import { fetchContacts } from './utils/fetchContacts';

const App: Component = () => {
  const [data] = createResource(fetchContacts);

  return (
    <Container p="$6" centered maxW="$containerLg">
      <Header />

      <Show when={data.loading}>
        <ContactSkeletons />
      </Show>

      <Show when={data() && !data.loading}>
        <ContactList />
      </Show>
    </Container>
  );
};

export default App;
