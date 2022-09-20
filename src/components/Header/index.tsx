import { Box, Flex, Heading, Spacer } from '@hope-ui/solid';
import { useNavigate } from '@solidjs/router';
import { Component } from 'solid-js';
import ContactCount from './ContactCount';
import ThemeSwitchButton from './ThemeSwitchButton';

const Header: Component = () => {
  const navigate = useNavigate();

  return (
    <Box h="$24">
      <Flex h="$full" alignItems="center">
        <Heading
          onClick={() => navigate('/')}
          cursor="pointer"
          level="2"
          size="2xl"
        >
          Solid Contacts
        </Heading>

        <Spacer />

        <ContactCount />
        <ThemeSwitchButton />
      </Flex>
    </Box>
  );
};

export default Header;
