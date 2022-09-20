import { Component } from 'solid-js';
import { setContacts, contacts } from '../store/contacts';

const Pagination: Component = () => {
  const incrementPage = () =>
    setContacts({ currentPage: contacts.currentPage + 1 });
  const decremnentPage = () =>
    setContacts({ currentPage: contacts.currentPage - 1 });

  return (
    <div>
      <button onClick={decremnentPage}>decrement page</button>
      page: {contacts.currentPage}
      <button onClick={incrementPage}>increment page</button>
    </div>
  );
};

export default Pagination;
