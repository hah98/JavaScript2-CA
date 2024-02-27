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
    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Confirmation before deleting
      const isConfirmed = confirm(
        "Are you sure you want to delete this listing?"
      );
      if (!isConfirmed) {
        return;
      }

      await removePost(id);

      // Redirect to the main page
      window.location.href = "/index.html";
    });
  }
}
