import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("You need ID to delete");
  }

  const removePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(removePostUrl, {
    method,
 /*    body: JSON.stringify(postData), */
  });

  return await response.json();
}
