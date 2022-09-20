import { Grid, hope } from '@hope-ui/solid';
import { Component, For } from 'solid-js';
import ContactSkeletonItem from './ContactSkeletonItem';

const fakeArray = Array.from({ length: 15 }, (_, i) => i + 1);

const StyledGrid = hope(Grid, {
  baseStyle: {
    gap: '$6',

    '@lg': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },

    '@md': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

const ContactSkeletons: Component = () => {
  return (
    <StyledGrid>
      <For each={fakeArray}>{() => <ContactSkeletonItem />}</For>
    </StyledGrid>
  );
};

export default ContactSkeletons;
