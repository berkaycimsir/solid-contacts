import { Alert, AlertIcon } from '@hope-ui/solid';
import { Component } from 'solid-js';

const ContactsNotFound: Component = () => {
  return (
    <Alert status="danger" variant="left-accent">
      <AlertIcon mr="$2_5" />
      Oops! Something went wrong. Please try again later.
    </Alert>
  );
};

export default ContactsNotFound;
