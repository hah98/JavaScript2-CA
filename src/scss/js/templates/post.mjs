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

  // Media (Single Image)
  /*  if (postData.media && postData.media.url) {
    const media = document.createElement("img");
    media.src = postData.media.url;
    media.alt = postData.media.alt || `Image for this post: ${postData.title}`;
    post.appendChild(media);
    img.classList.add("photo");
  } */

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

  // Comments
  if (postData.comments && postData.comments.length > 0) {
    const commentsContainer = document.createElement("div");
    postData.comments.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.innerText = `Comment by ${comment.owner}: ${comment.body}`;
      commentsContainer.appendChild(commentElement);
    });
    post.appendChild(commentsContainer);
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

  // Reactions
  if (postData.reactions && postData.reactions.length > 0) {
    const reactionsContainer = document.createElement("div");
    postData.reactions.forEach((reaction) => {
      const reactionElement = document.createElement("p");
      reactionElement.innerText = `${reaction.symbol} - Count: ${reaction.count}`;
      reactionsContainer.appendChild(reactionElement);
    });
    post.appendChild(reactionsContainer);
  }

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

  // Any other additional fields from your API can be added here

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
