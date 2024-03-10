import { updatePost } from "../api/posts/index.mjs";
import { getPost } from "./index.mjs";

export async function setUpdateFormListener() {
    const form = document.querySelector("#updatePost");
  
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const post = await getPost(id);

        if (!post) {
          console.error("Post data not found");
          return;
        }

        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags.join(", ");
        form.media.value = post.media;

        const button = form.querySelector("button");
        button.disabled = false;

        form.addEventListener("submit", async (event) => {
          event.preventDefault();
          const form = event.target;
          const formData = new FormData(form);
          const post = Object.fromEntries(formData.entries());
          post.id = id;

          form.title.value = post.title || "";
          form.body.value = post.body || "";
          form.tags.value = Array.isArray(post.tags) ? post.tags.join(", ") : "";
          form.media.value = post.media || "";
         
          // Send it to the API
          await updatePost(post);  
 // Trigger the modal
 const customAlertModal = new bootstrap.Modal(
  document.getElementById("customAlert")
);
customAlertModal.show();


customAlertModal._element.addEventListener(
  "hidden.bs.modal",
  function () {
    // Redirect to the post page after the modal is hidden
    window.location.href = "/profile/posts/index.html";
  }
);
});
}
}