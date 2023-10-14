import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/register/index.html") {
  setRegisterFormListener();
} else if (path === "/profile/login/index.html") {
  setLoginFormListener();
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts[5];
  const container = document.querySelector("#post");
  templates.renderPostTemplates(posts, container);
}

testTemplate();
