export interface UserPostsTypes {
  id: string;
  name: string;
  posts: string;
  createdAt: string;
}

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
  name: string;
  email?: string;
  birthDate?: string;
  address?: AddressTypes;
  phone?: string;
  website?: string;
  company?: CompanyTypes;
}

const buildUrl = (...paths: string[]) =>
  `https://jsonplaceholder.typicode.com/${paths.join('/')}`;

const sendRequest = async <T,>(url: string, init?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, init);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const getUsers = async (init?: RequestInit) => {
  return sendRequest<UserTypes[]>(buildUrl('users'), init);
};

export const getUser = (id: string, init?: RequestInit) => {
  console.log(id);
  return sendRequest<UserTypes>(buildUrl('users', id), init);
};

export const getPosts = async (init?: RequestInit) => {
  return sendRequest<UserPostsTypes[]>(buildUrl('posts'), init);
};
