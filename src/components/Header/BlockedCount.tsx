import { hope, IconButton, Box, Badge, Tooltip } from '@hope-ui/solid';
import { useNavigate } from '@solidjs/router';
import { BiRegularBlock } from 'solid-icons/bi';
import { Component, createMemo, Show } from 'solid-js';
import { addedContacts } from '../../store/addedContacts';
import { blockedContacts } from '../../store/blockedContacts';

const StyledIconButton = hope(IconButton, {
  baseStyle: {
    borderRadius: '$2xl',

    '&:focus': {
      boxShadow: 'none',
    },
  },
});

const StyledCountBadge = hope(Badge, {
  baseStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: '$full',
    transform: 'translate(-15%, -5%)',
  },
});

const StyledBlockIcon = hope(BiRegularBlock, {
  baseStyle: {
    width: 24,
    height: 24,
  },
});

const BlockedCount: Component = () => {
  const navigate = useNavigate();

  const totalCount = createMemo(() =>
    blockedContacts.reduce((contact) => (contact += 1), 0)
  );

  const showBadge = createMemo(() => totalCount() !== 0);

  return (
    <Tooltip label="Blocked Contacts">
      <Box
        onClick={() => navigate('/blocked-contacts')}
        mr="$4"
        position="relative"
      >
        <StyledIconButton
          aria-label="header-contacts-button"
          icon={<StyledBlockIcon />}
          variant="ghost"
          colorScheme="danger"
        />

        <Show when={showBadge()}>
          <StyledCountBadge variant="solid" colorScheme="danger">
            {totalCount()}
          </StyledCountBadge>
        </Show>
      </Box>
    </Tooltip>
  );
};

export default BlockedCount;
