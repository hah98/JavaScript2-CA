// profilePosts.mjs (templates folder)

export function profilePostTemplate(postData) {
    const profilePostCard = document.createElement("div");
    profilePostCard.classList.add("profilePosts-card", "mb-3");
  
    // Post Title
    const titleElement = document.createElement("h3");
    titleElement.classList.add("title");
    titleElement.textContent = postData.title;
    profilePostCard.appendChild(titleElement);
  
    // Post Image
    if (postData.media) {
      const imageElement = document.createElement("img");
      imageElement.classList.add("img-fluid");
      imageElement.src = postData.media;
      imageElement.alt = `Image for this post: ${postData.title}`;
      profilePostCard.appendChild(imageElement);
  
      // Navigate to the post page on title and image click
      titleElement.addEventListener("click", () => {
        navigateToPostPage(postData.id);
      });
      imageElement.addEventListener("click", () => {
        navigateToPostPage(postData.id);
      });
    }
  

  
    return profilePostCard;
  }
  
  // Function to navigate to the post specific page
  function navigateToPostPage(postId) {
    console.log("Post ID:", postId);
    // Redirect to the specific post page 
    window.location.href = `/profile/viewPost/index.html?id=${postId}`;
  }
  
  export function renderProfilePostTemplate(postDataList, parent) {
    if (!parent) {
      // If error
      return;
    }
  
    parent.innerHTML = '';
  
    // Append the profile posts to the container
    parent.append(...postDataList.map(profilePostTemplate));
  }
  