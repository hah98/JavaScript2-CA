import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginUrl = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginUrl, {
    headers: {
      "content-type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();


  storage.save("token", accessToken);


  storage.save("profile", user);

 
      // Trigger the modal
      const customAlertModal = new bootstrap.Modal(
        document.getElementById("customAlert")
      );
      customAlertModal.show();

      customAlertModal._element.addEventListener(
        "hidden.bs.modal",
        function () {
          // Redirect to post page after the modal is hidden
          window.location.href = "/profile/posts/index.html";
        })


}
