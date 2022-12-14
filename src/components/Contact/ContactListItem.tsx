import {
  Box,
  Button,
  ButtonProps,
  hope,
  IconButton,
  Tooltip,
  useColorModeValue,
} from '@hope-ui/solid';
import { FaSolidPhone, FaSolidLocationDot } from 'solid-icons/fa';
import { IoMail, IoAdd } from 'solid-icons/io';
import { CgClose, CgUnblock } from 'solid-icons/cg';
import { BiRegularBlock } from 'solid-icons/bi';
import { Component, createMemo } from 'solid-js';
import { Contact } from '../../types/Contact';
import { addedContacts, setAddedContacts } from '../../store/addedContacts';
import {
  blockedContacts,
  setBlockedContacts,
} from '../../store/blockedContacts';
import { getContactFullName } from '../../utils/helpers';

type Props = {
  contact: Contact;
};

const StyledContactCard = hope(Box, {
  baseStyle: {
    borderWidth: '0.5px',
    borderColor: '$neutral2',
    borderRadius: '$lg',
    shadow: '$sm',
    overflow: 'hidden',
    p: '$6',
    w: '$full',
    h: 226,

    '@dark': {
      borderColor: '$neutral6',
      borderWidth: '1px',
    },
  },
});

const StyledContactHeader = hope(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
  },
});

const StyledContactImage = hope(Box, {
  baseStyle: {
    borderRadius: '$full',
  },
});

const StyledPhoneIcon = hope(FaSolidPhone, {
  baseStyle: {
    width: 14,
    height: 14,
    color: '$neutral11',
  },
});

const StyledLocationIcon = hope(FaSolidLocationDot, {
  baseStyle: {
    color: '$neutral11',
  },
});

const StyledMailIcon = hope(IoMail, {
  baseStyle: {
    color: '$neutral11',
  },
});

const StyledInfoWrapper = hope(Box, {
  baseStyle: {
    fontWeight: '$medium',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },
});

const StyledFullName = hope(Box, {
  baseStyle: {
    mb: '$0_5',
    fontWeight: '$semibold',
    as: 'h4',
    lineHeight: '$tight',
    noOfLines: 1,
  },
});

const StyledCardBottom = hope(Box, {
  baseStyle: {
    mt: '$4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const ContactListItem: Component<Props> = ({ contact }) => {
  const image = contact.picture.thumbnail;

  const addContactButtonColor = useColorModeValue<ButtonProps['colorScheme']>(
    'info',
    'accent'
  );

  const buttonVariant = useColorModeValue<ButtonProps['variant']>(
    'subtle',
    'outline'
  );

  const isAddedContact = createMemo(() =>
    addedContacts.find(({ id }) => id === contact.id)
  );

  const isBlockedContact = createMemo(() =>
    blockedContacts.find(({ id }) => id === contact.id)
  );

  const addContact = () => setAddedContacts((prev) => [contact, ...prev]);

  const removeContact = () => {
    setAddedContacts((prev) => prev.filter(({ id }) => id !== contact.id));
  };

  const blockContact = () => {
    setBlockedContacts((prev) => [contact, ...prev]);
  };

  const unBlockContact = () => {
    setBlockedContacts((prev) => prev.filter(({ id }) => id !== contact.id));
  };

  const onSecondaryButtonClick = () => {
    if (isAddedContact()) removeContact();
    else if (isBlockedContact()) unBlockContact();
    else blockContact();
  };

  return (
    <StyledContactCard>
      <StyledContactHeader>
        <StyledContactImage
          as="img"
          src={image}
          alt={`picture-of-${contact.email}`}
        />

        <Box ml="$4">
          <StyledFullName>{getContactFullName(contact)}</StyledFullName>

          <StyledInfoWrapper>
            <StyledPhoneIcon />
            {contact.phone}
          </StyledInfoWrapper>
        </Box>
      </StyledContactHeader>

      <Box mt="$4">
        <StyledInfoWrapper mb="$1_5">
          <StyledLocationIcon />
          <Box noOfLines={1} as="span" fontWeight="$medium">
            {contact.location.country} - {contact.location.city}
          </Box>
        </StyledInfoWrapper>

        <StyledInfoWrapper>
          <StyledMailIcon />
          <Box as="span" noOfLines={1} fontWeight="$medium">
            {contact.email}
          </Box>
        </StyledInfoWrapper>
      </Box>

      <StyledCardBottom>
        {!isBlockedContact() && !isAddedContact() ? (
          <Tooltip placement="left" withArrow label="Add this contact">
            <Button
              variant={buttonVariant()}
              colorScheme={addContactButtonColor()}
              onClick={addContact}
              rightIcon={<IoAdd size={18} />}
            >
              Add
            </Button>
          </Tooltip>
        ) : (
          <div />
        )}

        <Tooltip
          placement="left"
          withArrow
          label={`${
            isAddedContact()
              ? 'Remove'
              : isBlockedContact()
              ? 'Unblock'
              : 'Block'
          } this contact`}
        >
          <IconButton
            onClick={onSecondaryButtonClick}
            icon={
              isAddedContact() ? (
                <CgClose size={16} />
              ) : isBlockedContact() ? (
                <CgUnblock />
              ) : (
                <BiRegularBlock size={14} />
              )
            }
            variant={buttonVariant()}
            aria-label="block-contact"
            colorScheme={isBlockedContact() ? 'success' : 'danger'}
          />
        </Tooltip>
      </StyledCardBottom>
    </StyledContactCard>
  );
};

export default ContactListItem;
