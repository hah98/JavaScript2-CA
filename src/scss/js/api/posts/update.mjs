import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("You need postID to update");
  }

 
  const payload = {
    title: postData.title,
    body: postData.body,
    tags: Array.isArray(postData.tags) ? postData.tags : [],
    media: postData.media,
  };

  const updatePostUrl = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await response.json();
}
