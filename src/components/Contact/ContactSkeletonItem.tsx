import { Box, hope, SkeletonCircle, SkeletonText } from '@hope-ui/solid';
import { Component } from 'solid-js';

const StyledCard = hope(Box, {
  baseStyle: {
    borderWidth: 1,
    borderColor: '$neutral6',
    borderRadius: '$sm',
    padding: '$8',
  },
});

const ContactSkeletonItem: Component = () => {
  return (
    <StyledCard>
      <SkeletonCircle size="$10" />
      <SkeletonText mt="$4" noOfLines={4} spacing="$4" />
    </StyledCard>
  );
};

export default ContactSkeletonItem;
