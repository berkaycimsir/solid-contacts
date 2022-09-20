import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  CloseButton,
} from '@hope-ui/solid';
import { Component, createMemo } from 'solid-js';
import { FiSearch } from 'solid-icons/fi';
import { contacts, setContacts } from '../store/contacts';
import { produce } from 'solid-js/store';

const Search: Component = () => {
  const pageData = createMemo(() =>
    contacts.data.find((d) => d.page === contacts.currentPage)
  );

  const setSearch = (newValue: string) => {
    setContacts(
      produce((prev) => {
        prev.data = prev.data.map((d) =>
          d.page === contacts.currentPage
            ? {
                ...d,
                search: newValue,
              }
            : d
        );
      })
    );
  };

  return (
    <InputGroup mb="$8">
      <InputLeftElement pointerEvents="none">
        <FiSearch color="#606060" size={18} />
      </InputLeftElement>

      <Input
        value={pageData()?.search || ''}
        onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
        borderRadius="$xl"
        type="text"
        placeholder="Search contacts by name"
      />

      <InputRightElement>
        <CloseButton
          onClick={() => setSearch('')}
          _focus={{ boxShadow: 'none' }}
          rounded="$full"
          size="sm"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
