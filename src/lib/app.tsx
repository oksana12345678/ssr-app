import { UserPostsTypes, UserTypes } from '@/types/main-types';

const buildUrl = (...paths: string[]) =>
  `https://jsonplaceholder.org/${paths.join('/')}`;

const sendRequest = async <T,>(url: string, init?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, init);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    if (!text) {
      console.warn(`Empty response body for URL: ${url}`);
      return null as T;
    }

    const data = JSON.parse(text);

    if (!data || Object.keys(data).length === 0) {
      console.warn(`Empty response body for URL: ${url}`);
      return null as T;
    }

    return data as T;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

//users

export const getUsers = async (init?: RequestInit) => {
  return sendRequest<UserTypes[]>(buildUrl('users'), init);
};

export const getUserById = (id: string, init?: RequestInit) => {
  console.log(id);
  return sendRequest<UserTypes>(buildUrl('users', id), init);
};

// posts

export const getPosts = async (init?: RequestInit) => {
  return sendRequest<UserPostsTypes[]>(buildUrl('posts'), init);
};

export const getPostById = async (id: string, init?: RequestInit) => {
  return sendRequest<UserPostsTypes>(buildUrl('posts', id), init);
};

export const getPostsByUserId = async (userId: string, init?: RequestInit) => {
  return sendRequest<UserPostsTypes>(buildUrl('posts', userId), init);
};
