import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postsMethods from "./handlers/index.mjs";
import * as postMethods from "./handlers/index.mjs";


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
    const container = document.querySelector("#post");
    templates.renderPostTemplates([post], container);
  } catch (error) {
    console.error("Error Post or rendering post:", error);
  }
}

onePostTemplate();

/* All posts */

async function allPostsTemplate() {
  const posts = await postsMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

allPostsTemplate();
