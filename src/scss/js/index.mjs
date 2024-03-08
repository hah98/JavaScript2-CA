import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postsMethods from "./handlers/index.mjs";
import * as postMethods from "./handlers/index.mjs";
import { removePost } from "./api/posts/delete.mjs";
import { updatePost } from "./api/posts/update.mjs";


/* import * as templates from "./templates/index.mjs"; */

const path = location.pathname;

if (path === "/profile/register/index.html") {
  listeners.setRegisterFormListener();
} else if (path === "/profile/login/index.html") {
  listeners.setLoginFormListener();
} else if (path === "/profile/post/create/index.html") {
  listeners.setCreateFormListener();
} else if (path === "/profile/edit/index.html") {
  listeners.setUpdateProfileFormListener();
} else if (path === "/profile/edit/index.html") {
  listeners.setRemoveFormListener();
} else if (path === "/profile/edit/editPost.html") {
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

/* Logout */

document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");
  const userDropdown = document.getElementById("userDropdown");
  // Check if the logoutButton exists in the DOM
  if (logoutButton) {
    // Check if the user is logged in (profile stored in the localStorage)
    const isLoggedIn = localStorage.getItem("profile") !== null;

    if (isLoggedIn) {
      // User is logged in, show the logout button and profile details
      logoutButton.style.display = "block";

    
      // Show the entire dropdown bar
      userDropdown.style.display = "block";
    } else {
      // User is not logged in, hide the logout button and profile details
      logoutButton.style.display = "none";
  
      // Hide the entire dropdown bar when the user is not logged in
      userDropdown.style.display = "none";
    }

    // User clicks logout button
    logoutButton.addEventListener("click", () => {
      // Assuming you have a listeners object with a logout method
      if (listeners && typeof listeners.logout === "function") {
        listeners.logout();
      }
    });
  }
});


/*  */


/* A single post */

async function populateFormWithPostData(post, formId) {
  const form = document.querySelector(formId);

  if (!form) {
    console.error(`Form with id ${formId} not found`);
    return;
  }

  // Populate the form fields with post data
  form.title.value = post.title || "";
  form.body.value = post.body || "";
  form.tags.value = post.tags ? post.tags.join(", ") : "";
  form.media.value = post.media || "";

  const button = form.querySelector("button");
  button.disabled = false;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
  });
}

// Now define the onePostTemplate function
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

    // Populate the remove post form 
    const removePostForm = document.querySelector("#removePost");
    if (removePostForm) {
      await populateFormWithPostData(post, "#removePost", async (post) => {
        // Remove the post
        await removePost(post.id);

        // Redirect to the main page after successful deletion
        window.location.href = "/profile/posts/index.html";
      });
    }

    // Populate the update post form 
    const updatePostForm = document.querySelector("#updatePost");
    if (updatePostForm) {
      await populateFormWithPostData(post, "#updatePost", async (post) => {
        // Update the post
        await updatePost(post); 

        // Redirect to main page after succesful update
         window.location.href = "/profile/posts/index.html"; 
      });
    }
  } catch (error) {
    console.error("Error fetching or rendering post:", error);
  }
}

// Add this line to ensure the form listeners are set after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  onePostTemplate();
});


/* All posts */

async function allPostsTemplate() {
  const posts = await postsMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderAllPostsTemplate(posts, container);
}

allPostsTemplate();
