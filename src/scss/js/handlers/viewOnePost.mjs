import { API_SOCIAL_URL } from "../api/constants.mjs";

import { authFetch } from "../api/authFetch.mjs";

const action = "/posts";


//// THIS IS THE ONE WORKING!!!!!!!

 export async function getPost(id) {
  if (!id) {
    throw new Error("You need postID to GET");
  }
  const getPostUrl = `${API_SOCIAL_URL}${action}/${id}?_author=true&_comments=true&_reactions=true`;


  const response = await authFetch(getPostUrl);

  return await response.json();
} 
