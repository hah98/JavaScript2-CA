import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
/* const method = "delete"; */

export async function getProfiles() {
  const getProfilesUrl = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(getProfilesUrl);

  return await response.json();
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("You need a name to GET");
  }
  const getProfileUrl = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(getProfileUrl);

  return await response.json();
}
