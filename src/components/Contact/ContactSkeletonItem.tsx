import {
  Box,
  hope,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@hope-ui/solid';
import { Component } from 'solid-js';

const StyledCard = hope(Box, {
  baseStyle: {
    borderWidth: 1,
    borderColor: '$neutral6',
    borderRadius: '$sm',
    padding: '$6',
  },
});

const StyledCardHeader = hope(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
  },
});

const StyledCardBottom = hope(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: '$6',
  },
});

const ContactSkeletonItem: Component = () => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <SkeletonCircle w="$12" h="$10" />

        <Box w="$full" ml="$4">
          <SkeletonText w="$28" noOfLines={1} />
          <SkeletonText w="$48" mt="$4" noOfLines={1} />
        </Box>
      </StyledCardHeader>
      <SkeletonText mt="$6" noOfLines={2} spacing="$4" />

      <StyledCardBottom>
        <Skeleton w="$24" h="$10" />

        <Skeleton w="$10" h="$10" />
      </StyledCardBottom>
    </StyledCard>
  );
};

export default ContactSkeletonItem;
