export interface UserPostsTypes {
  id: string;
  name: string;
  avatar: string;
  posts: string;
  createAt: string;
}

export interface UserTypes {
  id: string;
  name: string;
  title: string;
  post_desc: string;
  createAt: string;
  image: string;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

// const stringifyQueryParams = (params: Record<string, string>) =>
//   new URLSearchParams(params).toString();

const sendRequest = async <T,>(url: string, init?: RequestInit) => {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return (await response.json()) as T;
};

export const getSummaryStats = (init?: RequestInit) => {
  return sendRequest<UserTypes>(buildUrl('user'), init);
};

export const getSummarySales = (init?: RequestInit) => {
  return sendRequest<UserPostsTypes[]>(buildUrl('posts'), init);
};
