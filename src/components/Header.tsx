import { Box, Flex, Heading, Spacer } from '@hope-ui/solid';
import ThemeSwitchButton from './ThemeSwitchButton';

const Header = () => {
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
