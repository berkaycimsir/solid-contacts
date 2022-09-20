import { Box, Button, hope, IconButton } from '@hope-ui/solid';
import {
  FaSolidChevronDown,
  FaSolidChevronUp,
  FaSolidChevronLeft,
  FaSolidChevronRight,
} from 'solid-icons/fa';
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from 'solid-icons/hi';
import { Component, createMemo, For } from 'solid-js';
import useMediaQuery from '../hooks/useMediaQuery';
import { setContacts, contacts } from '../store/contacts';

const buttons = [
  { page: 1 },
  { page: 2 },
  { page: 3 },
  { page: 4 },
  { page: 5 },
  { page: 6 },
  { page: 7 },
  { page: 8 },
];

const StyledButton = hope(Button, {
  baseStyle: {
    width: 20,
    height: 32,

    '&:focus': {
      boxShadow: 'none',
    },
  },
});

const StyledArrowButton = hope(IconButton, {
  baseStyle: {
    width: '34px !important',
    borderRadius: '$full',
    height: 32,

    '&:focus': {
      boxShadow: 'none',
    },
  },
});

const Pagination: Component = () => {
  const lg = useMediaQuery('(min-width: 1024px)');

  const setPage = (page: number) => {
    if (page > buttons[buttons.length - 1].page || page < buttons[0].page) {
      return;
    }

    setContacts({ currentPage: page });
  };

  const mobileButtons = createMemo(() => {
    const currIndex = buttons.findIndex(
      (btn) => btn.page === contacts.currentPage
    );

    return buttons.slice(currIndex > 5 ? 5 : currIndex, currIndex + 3);
  });

  return (
    <Box
      display="flex"
      flexDirection={{ '@initial': 'row', '@lg': 'column' }}
      justifyContent={{ '@initial': 'center', '@lg': 'start' }}
      gap="$3"
    >
      <StyledArrowButton
        aria-label="pagination-up"
        variant="ghost"
        icon={
          lg() ? (
            <HiOutlineChevronDoubleUp size={16} />
          ) : (
            <HiOutlineChevronDoubleLeft size={16} />
          )
        }
        onClick={() => setPage(buttons[0].page)}
      />

      <StyledArrowButton
        aria-label="pagination-up"
        variant="ghost"
        icon={
          lg() ? (
            <FaSolidChevronUp size={14} />
          ) : (
            <FaSolidChevronLeft size={14} />
          )
        }
        onClick={() => setPage(contacts.currentPage - 1)}
      />

      <For each={lg() ? buttons : mobileButtons()}>
        {({ page }) => (
          <StyledButton
            variant={contacts.currentPage === page ? 'solid' : 'subtle'}
            onClick={() => setPage(page)}
          >
            {page}
          </StyledButton>
        )}
      </For>

      <StyledArrowButton
        aria-label="pagination-up"
        variant="ghost"
        icon={
          lg() ? (
            <FaSolidChevronDown size={14} />
          ) : (
            <FaSolidChevronRight size={14} />
          )
        }
        onClick={() => setPage(contacts.currentPage + 1)}
      />

      <StyledArrowButton
        aria-label="pagination-up"
        variant="ghost"
        icon={
          lg() ? (
            <HiOutlineChevronDoubleDown size={16} />
          ) : (
            <HiOutlineChevronDoubleRight size={16} />
          )
        }
        onClick={() => setPage(buttons[buttons.length - 1].page)}
      />
    </Box>
  );
};

export default Pagination;
