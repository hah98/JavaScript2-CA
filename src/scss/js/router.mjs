import * as listeners from "./handlers/index.mjs";


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

// testing function //
/* async function testTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts[5];
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplate(); */
