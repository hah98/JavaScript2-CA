import { API_SOCIAL_URL } from "../api/constants.mjs";

import { authFetch } from "../api/authFetch.mjs";

const action = "/posts"; 
export async function getPosts() {
  const getPostsUrl = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getPostsUrl);

  return await response.json();
}


/*  Moved to spereate file called viewOnePost.mjs  */
/* export async function getPost(id) {
    if (!id) {
      throw new Error("You need postID to GET");
    }
    const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;
  
    const response = await authFetch(getPostUrl);
  
    return await response.json();
  } */