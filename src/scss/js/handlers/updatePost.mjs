import { updatePost } from "../api/posts/index.mjs";
import { getPost } from "./index.mjs";

export async function setUpdateFormListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const post = await getPost(id);

    const button = form.querySelector("button");
    button.disabled = true;

    form.title.value = post.title;
    form.description.value = post.description; 
    form.endsAt.value = post.endsAt; 
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      post.tags = post.tags.split(",").map((tag) => tag.trim());
      console.log(post);

      // Send it to the API
      updatePost(post);
    });
  }
}