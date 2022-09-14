import { sleep } from './helpers';

export const fetchContacts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  await sleep(2000);

  return await res.json();
};
