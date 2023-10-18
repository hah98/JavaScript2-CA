import { updateProfile, getProfile } from "../api/profiles/index.mjs";

import { load } from "../storage/index.mjs";

export async function setUpdateProfileFormListener() {
  const form = document.querySelector("#editProfile");

  /* const url = new URL(location.href);
  const id = url.searchParams.get("id"); */

  /*  profile.name; */

  if (form) {
    const { name, email } = load("profile");
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.banner.value = profile.banner;
    form.Avatar.value = profile.Avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      /* profile.tags = profile.tags.split(",").map((tag) => tag.trim()); */
      // Send it to the API
      updateProfile(profile);
    });
  }
}
