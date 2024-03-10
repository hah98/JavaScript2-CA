import { API_SOCIAL_URL } from "../api/constants.mjs";

import { authFetch } from "../api/authFetch.mjs";

const action = "/posts"; 
export async function getPosts() {
  const getPostsUrl = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getPostsUrl);

  return await response.json();
} 

