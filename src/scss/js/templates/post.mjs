// post.mjs
export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.classList.add("post-card-1");

  // Title
  const title = document.createElement("h1");
  title.innerText = postData.title;
  post.appendChild(title);
  title.classList.add("title-1");

  // Body
  const body = document.createElement("h2");
  body.innerText = postData.body;
  post.appendChild(body);
  body.classList.add("body-1");

  // Media (Image)
  if (postData.media && postData.media.url) {
    const img = document.createElement("img");
    img.src = postData.media.url;
    img.alt = postData.media.alt || `Image for this post: ${postData.title}`;
    img.classList.add("img-fluid-1");
    post.appendChild(img);
  }

  // Media (Images)
  if (
    postData.media &&
    Array.isArray(postData.media.urls) &&
    postData.media.urls.length > 0
  ) {
    const mediaContainer = document.createElement("div");
    postData.media.urls.forEach((mediaUrl) => {
      const img = document.createElement("img");
      img.src = mediaUrl;
      img.alt = postData.media.alt || `Image for this post: ${postData.title}`;
      img.classList.add("img-fluid-2");
      mediaContainer.appendChild(img);
    });
    post.appendChild(mediaContainer);
  }

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

  // Additional information
  const created = document.createElement("p");
  created.innerText = `Created: ${new Date(postData.created).toLocaleString()}`;
  created.classList.add("created-1");
  post.appendChild(created);

  const updated = document.createElement("p");
  updated.innerText = `Updated: ${new Date(postData.updated).toLocaleString()}`;
  updated.classList.add("updated-1");
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
  author.innerText = `Author: ${postData.author.name}`;
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
  

  

/* // PostRenderer.js
export function renderPostTemplate(postDataList, parent) {
  if (Array.isArray(postDataList)) {
    parent.append(...postDataList.map(postTemplate));
  } else {
    console.error("Post data is not an array:", postDataList);
  }
}
 */