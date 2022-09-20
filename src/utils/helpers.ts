import { Contact } from '../types/Contact';

export const sleep = async (ms: number) => {
  return await new Promise((resolve) => setTimeout(resolve, ms));
};

export const getLocationNameFromRoute = (
  pathname: string
): string | undefined => {
  switch (pathname) {
    case '/added-contacts':
      return 'Contacts';
    case '/blocked-contacts':
      return 'Blocked Contacts';
    default:
      return undefined;
  }
};

export const getContactFullName = (contact: Contact): string => {
  return `${contact.name.first} ${contact.name.last}`;
};
