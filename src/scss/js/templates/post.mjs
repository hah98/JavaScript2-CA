// post.mjs
export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.classList.add("post-post");

  // Title
  const title = document.createElement("h1");
  title.innerText = postData.title;
  post.appendChild(title);
  title.classList.add("title-post");


  // Media
  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.classList.add("img-fluid-1");
    img.alt = `Image for this post: ${postData.title}`;
    post.appendChild(img);
  }

  // Body
  const body = document.createElement("h2");
  body.innerText = postData.body;
  body.classList.add("body");
  post.appendChild(body);

  // Tags
  if (postData.tags && postData.tags.length > 0) {
    const tags = document.createElement("div");
    tags.classList.add("tags");
    postData.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.innerText = tag;
      tags.appendChild(tagElement);
    });
    post.appendChild(tags);
  }

 

  // Created and Updated
  const created = document.createElement("p");
  created.innerText = `Created: ${new Date(postData.created).toLocaleString()}`;
  created.classList.add("created");
  post.appendChild(created);

  const updated = document.createElement("p");
  updated.innerText = `Updated: ${new Date(postData.updated).toLocaleString()}`;
  updated.classList.add("updated");
  post.appendChild(updated);
// Comments
const commentsContainer = document.createElement("div");
commentsContainer.classList.add("comments-container");

if (postData.comments && postData.comments.length > 0) {
  postData.comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
      <p>Comment by ${comment.author ? comment.author.name : 'Unknown Author'}:</p>
      <p>${comment.body}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });
} else {
  // when there are no comments
  const noCommentsMessage = document.createElement("p");
  noCommentsMessage.innerText = "Comments: 0";
  commentsContainer.appendChild(noCommentsMessage);
}

post.appendChild(commentsContainer);

// Reactions
const reactionsContainer = document.createElement("div");
reactionsContainer.classList.add("reactions-container");

if (postData.reactions && postData.reactions.length > 0) {
  postData.reactions.forEach((reaction) => {
    const reactionElement = document.createElement("div");
    reactionElement.classList.add("reaction");
    reactionElement.innerHTML = `
      <p>${reaction.symbol} - Count: ${reaction.count}</p>
    `;
    reactionsContainer.appendChild(reactionElement);
  });
} else {
  // when there are no reactions
  const noReactionsMessage = document.createElement("p");
  noReactionsMessage.innerText = "Reactions: 0";
  reactionsContainer.appendChild(noReactionsMessage);
}

post.appendChild(reactionsContainer);
  // Author
  const authorContainer = document.createElement("div");
  const author = document.createElement("p");
  author.classList.add("author");
  author.innerText = `Author: ${
    postData.author ? postData.author.name : "Unknown Author"
  }`;
  authorContainer.appendChild(author);
  post.appendChild(authorContainer);

  // Additional Fields
  const postId = document.createElement("p");
  postId.innerText = `Post ID: ${postData.id}`;
  postId.classList.add("post-id");
  post.appendChild(postId);

// Return Home Button
const returnButton = document.createElement("button");
returnButton.innerText = "Home";
returnButton.classList.add("btn", "text-light");
returnButton.style.backgroundColor = "blue";


returnButton.addEventListener("click", () => {
  // Redirect to the home page
  window.location.href = "/profile/posts/index.html";
});


post.appendChild(returnButton);

  return post;
}

// PostRenderer.js
export function renderSinglePostTemplate(postDataList, parent) {
  if (Array.isArray(postDataList)) {
    parent.append(...postDataList.map(postTemplate));
  } else {
    console.error("Post data is not an array:", postDataList);
  }
}
