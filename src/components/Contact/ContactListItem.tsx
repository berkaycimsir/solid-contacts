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
import { BiRegularBlock } from 'solid-icons/bi';
import { Component } from 'solid-js';
import { Contact } from '../../types/Contact';
import { setAddedContacts } from '../../store/addedContacts';

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
  const fullName = `${contact.name.first} ${contact.name.last}`;

  const addContactButtonColor = useColorModeValue<ButtonProps['colorScheme']>(
    'info',
    'accent'
  );

  const addContact = () => setAddedContacts((prev) => [contact, ...prev]);

  return (
    <StyledContactCard>
      <StyledContactHeader>
        <StyledContactImage
          as="img"
          src={image}
          alt={`picture-of-${contact.email}`}
        />

        <Box ml="$4">
          <StyledFullName>{fullName}</StyledFullName>

          <StyledInfoWrapper>
            <StyledPhoneIcon />
            {contact.phone}
          </StyledInfoWrapper>
        </Box>
      </StyledContactHeader>

      <Box mt="$4">
        <StyledInfoWrapper mb="$1_5">
          <StyledLocationIcon />
          <Box as="span" fontWeight="$medium">
            {contact.location.country}
          </Box>
          - {contact.location.city}
        </StyledInfoWrapper>

        <StyledInfoWrapper>
          <StyledMailIcon />
          <Box as="span" noOfLines={1} fontWeight="$medium">
            {contact.email}
          </Box>
        </StyledInfoWrapper>
      </Box>

      <StyledCardBottom>
        <Tooltip placement="left" withArrow label="Add this contact">
          <Button
            variant="subtle"
            colorScheme={addContactButtonColor()}
            onClick={addContact}
            rightIcon={<IoAdd size={18} />}
          >
            Add
          </Button>
        </Tooltip>

        <Tooltip placement="left" withArrow label="Block this contact">
          <IconButton
            icon={<BiRegularBlock size={14} />}
            variant="subtle"
            aria-label="block-contact"
            colorScheme="danger"
          />
        </Tooltip>
      </StyledCardBottom>
    </StyledContactCard>
  );
};

export default ContactListItem;
