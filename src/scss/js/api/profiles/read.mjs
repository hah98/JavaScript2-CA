import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

export async function getProfile(name) {
  if (!name) {
    throw new Error("You need a name to GET");
  }
  const getProfileUrl = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(getProfileUrl);

  return await response.json();
}

const action1 = "/posts"

export async function getProfiles(name) {
  const getProfilesUrl = `${API_SOCIAL_URL}${action}${name}${action1}`;

  const response = await authFetch(getProfilesUrl);

  return await response.json();
}