import { updateProfile, getProfile } from "../api/profiles/index.mjs";
import { load } from "../storage/index.mjs";

export async function setUpdateProfileFormListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email, avatar } = load("profile");

    /*  const name = "John Doe";
    const email = "john@example.com"; */
    form.name.value = name;
    form.email.value = email;
    form.avatar.value = avatar;

    const button = form.querySelector("button");
    /* button.disabled = true; */

    const profile = await getProfile(name);

    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    const avatarPreview = document.getElementById("avatarPreview");

    // Check if the avatarPreview element exists before manipulating it
    if (avatarPreview) {
      avatarPreview.src = profile.Avatar;
    } else {
      console.error("Element with id 'avatarPreview' not found");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      // Log the profile data before sending it to the API
      console.log("Profile update:", profile);

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
