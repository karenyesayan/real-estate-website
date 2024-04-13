export type Property = {
  id: string;
  type: string;
  name: string;
  href: string;
  description: string;
  short_description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  image_url: string;
};

export type Person = {
  id: string;
  name: string;
  role: string;
  profile: string;
  image_url: string;
};

export type List = {
  id: string;
  cld: string;
  name: string;
  href: string;
  domain: string;
  category: string;
  description: string;
};
