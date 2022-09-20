import { nanoid } from 'nanoid';
import { produce } from 'solid-js/store';
import { contacts, setContacts } from '../store/contacts';
import { Contact } from '../types/Contact';

const BASE_URL = 'https://randomuser.me/api';

const include = [
  'gender',
  'name',
  'location',
  'email',
  'phone',
  'picture',
].join(',');

const RESULTS_PER_PAGE = '15';

export const fetchContacts = async (page: number): Promise<void> => {
  const cachedResult = contacts.data.find((it) => it.page === page);
  if (cachedResult) return;

  const fetchUrl = new URL(BASE_URL);

  fetchUrl.searchParams.append('page', String(page));
  fetchUrl.searchParams.append('results', RESULTS_PER_PAGE);
  fetchUrl.searchParams.append('inc', include);

  const res = await fetch(fetchUrl);

  const { results }: { results: Array<Contact> } = await res.json();

  setContacts(
    produce((prev) => {
      prev.data = [
        {
          page,
          result: results.map((r) => ({ ...r, id: nanoid() })),
          search: '',
        },
        ...prev.data,
      ];
    })
  );
};
