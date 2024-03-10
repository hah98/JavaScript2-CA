import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const action1 = "/posts"

export async function getProfiles(name) {
  const getProfilesUrl = `${API_SOCIAL_URL}${action}${name}${action1}`;

  const response = await authFetch(getProfilesUrl);

  return await response.json();
}