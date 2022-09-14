import { BsSun } from 'solid-icons/bs';
import { IoMoonOutline } from 'solid-icons/io';
import { IconButton, useColorMode, hope } from '@hope-ui/solid';
import { Component } from 'solid-js';

const StyledIconButton = hope(IconButton, {
  baseStyle: {
    borderRadius: '$2xl',

    '&:hover': {
      backgroundColor: '$neutral4',
    },

    '&:focus': {
      boxShadow: 'none',
    },
  },
});

const StyledSunIcon = hope(BsSun, {
  baseStyle: {
    color: '$whiteAlpha12',
    width: 20,
    height: 20,
  },
});

const StyledMoonIcon = hope(IoMoonOutline, {
  baseStyle: {
    color: '$neutral12',
    width: 20,
    height: 20,
  },
});

const ThemeSwitchButton: Component = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = () => colorMode() === 'dark';

  return (
    <StyledIconButton
      aria-label="toggle-theme"
      variant="ghost"
      icon={isDark() ? <StyledSunIcon /> : <StyledMoonIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeSwitchButton;
