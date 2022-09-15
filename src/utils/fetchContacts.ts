import { Contact } from '../types/Contact';
import { sleep } from './helpers';

const BASE_URL = 'https://randomuser.me/api';

const include = [
  'gender',
  'name',
  'location',
  'email',
  'phone',
  'picture',
].join(',');

export const fetchContacts = async (): Promise<Contact[]> => {
  const fetchUrl = new URL(BASE_URL);
  fetchUrl.searchParams.append('results', '12');
  fetchUrl.searchParams.append('inc', include);

  const res = await fetch(fetchUrl);

  await sleep(2000);

  const contacts = await res.json();

  return contacts.results;
};
