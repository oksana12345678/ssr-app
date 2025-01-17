interface AddressTypes {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}
interface CompanyTypes {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserTypes {
  id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  birthDate?: string;
  address?: AddressTypes;
  phone?: string;
  website?: string;
  company: CompanyTypes;
}

export interface UserPostsTypes {
  id?: string;
  title: string;
  content?: string;
  image: string;
  status?: string;
  category?: string;
  userId?: string;
  publishedAt?: string;
}
