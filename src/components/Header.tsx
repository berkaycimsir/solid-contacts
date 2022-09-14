import { Box, Flex, Heading, Spacer } from '@hope-ui/solid';
import { Component } from 'solid-js';
import ThemeSwitchButton from './ThemeSwitchButton';

const Header: Component = () => {
  return (
    <Box h="$24">
      <Flex h="$full" alignItems="center">
        <Heading level="2" size="2xl">
          Solid Contacts
        </Heading>

        <Spacer />

        <ThemeSwitchButton />
      </Flex>
    </Box>
  );
};

export default Header;
