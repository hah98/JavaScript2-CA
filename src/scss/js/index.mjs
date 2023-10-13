import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
/* import { createPost } from "./api/posts/create.mjs"; */
/* import { updatePost } from "./api/posts/update.mjs"; */
import { removePost } from "./api/posts/delete.mjs";
import * as post from "./api/posts/index.mjs";

/* import * as posts from "./api/posts/index.mjs"; */

const path = location.pathname;

if (path === "/profile/register/index.html") {
  setRegisterFormListener();
} else if (path === "/profile/login/index.html") {
  setLoginFormListener();
}


// Testing worked yippy!!!!//
/* removePost({
  id: 6096,
  title: "Example Post UPDATED",
  body: "Also an example UPDATED",
});
 */
/* removePost(6096); */

/* post.createPost();
post.updatePost();
post.removePost();
post.getPost(); */
/* post.getPost(6099).then(console.log); */
