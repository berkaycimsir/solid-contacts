import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  Show,
} from 'solid-js';
import ContactList from '../components/Contact/ContactList';
import ContactSkeletons from '../components/Contact/ContactSkeletons';
import { contacts } from '../store/contacts';
import { fetchContacts } from '../utils/fetchContacts';

const Home: Component = () => {
  const [page, setPage] = createSignal<number>(1);
  const [loading, setLoading] = createSignal<boolean>(false);

  createEffect(async () => {
    setLoading(true);
    await fetchContacts(page());
    setLoading(false);
  });

  const currentContacts = createMemo(
    () => contacts.data.find((it) => it.page === page())?.result || []
  );

  return (
    <div>
      <Show when={loading()}>
        <ContactSkeletons />
      </Show>
      <Show when={currentContacts() && !loading()}>
        <ContactList contacts={currentContacts()} />
      </Show>
      <button onClick={() => setPage((prev) => prev - 1)}>
        decrement page
      </button>
      page: {page()}
      <button onClick={() => setPage((prev) => prev + 1)}>
        increment page
      </button>
    </div>
  );
};

export default Home;
