import { createPost } from "../api/posts/index.mjs";

export function setCreateFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      post.tags = post.tags.split(",").map((tag) => tag.trim());
      /* console.log(profile); */

      // Send it to the API
      createPost(post);

      // Trigger the modal
      const customAlertModal = new bootstrap.Modal(
        document.getElementById("customAlert")
      );
      customAlertModal.show();

      // Handle the modal's hidden.bs.modal event
      customAlertModal._element.addEventListener(
        "hidden.bs.modal",
        function () {
          // Redirect to the /profile/posts/index.html page after the modal is hidden
          window.location.href = "/profile/posts/index.html";
        }
      );
    });
  }
}
