import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerUrl = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerUrl, {
    headers: {
      "content-type": "application/json",
    },
    method,
    body,
  });

 
      // Trigger the modal
      const customAlertModal = new bootstrap.Modal(
        document.getElementById("customAlert")
      );
      customAlertModal.show();

      // Handle the modal's hidden.bs.modal event
      customAlertModal._element.addEventListener(
        "hidden.bs.modal",
        function () {
          // Redirect to post page after the modal is hidden
          window.location.href = "/profile/login/index.html";
        })


}

