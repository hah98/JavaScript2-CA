import { removePost } from "../api/posts/delete.mjs";
import { getPost } from "./index.mjs";

export async function setRemoveFormListener() {
  const form = document.querySelector("#removePost");

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
    button.addEventListener("click", async () => {
      await removePost(id);

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
