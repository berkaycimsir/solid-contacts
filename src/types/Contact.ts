export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Contact {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  phone: string;
  picture: Picture;
}
