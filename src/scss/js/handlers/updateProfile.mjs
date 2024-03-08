import { updateProfile, getProfile } from "../api/profiles/index.mjs";
import { load } from "../storage/index.mjs";

/* hahahahhaa */
export async function setUpdateProfileFormListener() {
  const form = document.querySelector("#editProfile");
  const avatarPreview = document.getElementById("avatarPreview");

  if (form  && avatarPreview) {
    const { name, email/*  avatar */ } = load("profile");

    form.name.value = name;
    form.email.value = email;
   /*  form.avatar.value = avatar; */

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.avatar.value = profile.avatar;

    // Update the avatarPreview src
    avatarPreview.src = profile.avatar;

    button.disabled = false;

    
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      updateProfile(profile);

      /*   window.alert("Your Profile has been successfully updated!")

      // Redirect to the /profile/posts/index.html page
      window.location.href = "/profile/posts/index.html"; */

      // Trigger the modal
      const customAlertModal = new bootstrap.Modal(
        document.getElementById("customAlert")
      );
      customAlertModal.show();
    });
  }
}
