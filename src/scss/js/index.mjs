import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postsMethods from "./handlers/index.mjs";
import * as postMethods from "./handlers/index.mjs";
import { removePost } from "./api/posts/delete.mjs";


/* import * as templates from "./templates/index.mjs"; */

const path = location.pathname;

if (path === "/profile/register/index.html") {
  listeners.setRegisterFormListener();
} else if (path === "/profile/login/index.html") {
  listeners.setLoginFormListener();
} else if (path === "/profile/post/create/index.html") {
  listeners.setCreateFormListener();
} else if (path === "/profile/post/edit/index.html") {
  listeners.setUpdateFormListener();
} else if (path === "/profile/edit/index.html") {
  listeners.setUpdateProfileFormListener();
} else if (path === "/profile/edit/index.html") {
  listeners.setRemoveFormListener();
}else if (path === "/profile/edit/index.html") {
  listeners.setUpdateFormListener();
}

/* // testing function //
async function testTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts[5]; 
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplate(); */

/* January 2024 new try */

/* A single post */

async function onePostTemplate() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (!id) {
    console.error("Post ID is missing in the URL");
    return;
  }

  try {
    const post = await postMethods.getPost(id);

    if (!post) {
      console.error("Post data not found");
      return;
    }

    // Display post details
    const postContainer = document.querySelector("#post");
    templates.renderSinglePostTemplate([post], postContainer);

    // Populate the form fields with post data
    const form = document.querySelector("#removePost");
    form.title.value = post.title || "";
    form.body.value = post.body || "";
    form.tags.value = post.tags ? post.tags.join(", ") : "";
    form.media.value = post.media || "";

    const button = form.querySelector("button");
    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Confirmation before deleting
      const isConfirmed = confirm("Are you sure you want to delete this post?");
      if (!isConfirmed) {
        return;
      }

      // Remove the post
      await removePost(id);

      // Redirect to the main page after successful deletion
      window.location.href = "/profile/posts/index.html";
    });
  } catch (error) {
    /* console.error("Error Post or rendering post:", error); */
  }
}

onePostTemplate();

/* All posts */

async function allPostsTemplate() {
  const posts = await postsMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderAllPostsTemplate(posts, container);
}

allPostsTemplate();
