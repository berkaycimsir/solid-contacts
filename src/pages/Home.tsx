import { Box, hope } from '@hope-ui/solid';
import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  Show,
} from 'solid-js';
import ContactList from '../components/Contact/ContactList';
import ContactSkeletons from '../components/Contact/ContactSkeletons';
import Pagination from '../components/Pagination';
import { contacts } from '../store/contacts';
import { fetchContacts } from '../utils/fetchContacts';

const StyledWrapper = hope(Box, {
  baseStyle: {
    w: '$full',
    display: 'flex',
    flexDirection: 'column',
    gap: '$6',

    '@lg': {
      flexDirection: 'row',
    },
  },
});

const Home: Component = () => {
  const [loading, setLoading] = createSignal<boolean>(false);

  createEffect(async () => {
    setLoading(true);
    await fetchContacts(contacts.currentPage);
    setLoading(false);
  });

  const currentContacts = createMemo(
    () => contacts.data.find((it) => it.page === contacts.currentPage)?.result
  );

  return (
    <StyledWrapper>
      <Show when={loading()}>
        <ContactSkeletons />
      </Show>

      <Show when={currentContacts() && !loading()}>
        <ContactList contacts={currentContacts() || []} />
      </Show>

      <Pagination />
    </StyledWrapper>
  );
};

export default Home;
