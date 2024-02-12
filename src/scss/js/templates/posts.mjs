// posts.mjs
export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("posts");
    post.classList.add("post-card");
  
    // Title
    const title = document.createElement("h2");
    title.innerText = postData.title;
    post.appendChild(title);
    title.classList.add("title");
  
    // Media (Image)
    if (postData.media) {
      const img = document.createElement("img");
      img.src = postData.media;
      img.classList.add("img-fluid");
      img.alt = `Image for this post: ${postData.title}`;
  
      // Navigate to the listing page on image click
      title.addEventListener("click", () => {
        navigateToPostPage(postData.id);
      });
  
      // Set cursor style for title
      title.style.cursor = "pointer";
  
      img.addEventListener("click", () => {
        navigateToPostPage(postData.id);
      });
  
      // Set cursor style for image
      img.style.cursor = "pointer";
  
      post.appendChild(img);
    }
  
    return post;
  }
  
  // Function to navigate to the post specific page
  function navigateToPostPage(postId) {
    /* Just for now */
    console.log("Post ID:", postId);
    // Redirect to the specific post page using window.location.href
    window.location.href = `/profile/viewPost/index.html?id=${postId}`;
  }
  
  export function renderPostTemplate(postData, parent) {
    parent.append(postTemplateB(postData));
  }
  
  export function renderPostTemplates(postDataList, parent) {
    if (!parent) {
      // Return without logging an error
      return;
    }
  
    // Filter so only posts with images and title appear
    const filteredPosts = postDataList.filter((post) => {
      return post.media && post.media.length > 0 && post.title;
    });
  
    parent.innerHTML = ''; // Clear the parent container before appending posts
  
    parent.append(...filteredPosts.map(postTemplateB));
  }
  