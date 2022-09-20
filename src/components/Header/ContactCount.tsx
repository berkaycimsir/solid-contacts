import {
  hope,
  IconButton,
  Box,
  Badge,
  BadgeProps,
  useColorModeValue,
  IconButtonProps,
  Tooltip,
} from '@hope-ui/solid';
import { useNavigate } from '@solidjs/router';
import { TiContacts } from 'solid-icons/ti';
import { Component, createMemo, Show } from 'solid-js';
import { addedContacts } from '../../store/addedContacts';

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
    transform: 'translate(15%, -18%)',
  },
});

const StyledContactIcon = hope(TiContacts, {
  baseStyle: {
    width: 24,
    height: 24,
  },
});

const ContactCount: Component = () => {
  const navigate = useNavigate();

  const colorScheme = useColorModeValue<
    BadgeProps['colorScheme'] | IconButtonProps['colorScheme']
  >('danger', 'accent');

  const totalContacts = createMemo(() =>
    addedContacts.reduce((contact) => (contact += 1), 0)
  );

  const showBadge = createMemo(() => totalContacts() !== 0);

  return (
    <Tooltip label="Contacts">
      <Box
        onClick={() => navigate('/added-contacts')}
        mr="$4"
        position="relative"
      >
        <StyledIconButton
          aria-label="header-contacts-button"
          icon={<StyledContactIcon />}
          variant="ghost"
          colorScheme={colorScheme()}
        />

        <Show when={showBadge()}>
          <StyledCountBadge variant="solid" colorScheme={colorScheme()}>
            {totalContacts()}
          </StyledCountBadge>
        </Show>
      </Box>
    </Tooltip>
  );
};

export default ContactCount;
