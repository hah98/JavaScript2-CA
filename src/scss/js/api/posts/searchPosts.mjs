import { API_SOCIAL_URL, SEARCH_POSTS_ENDPOINT } from '../constants.mjs';
import { authFetch } from '../authFetch.mjs';


// Function to perform the search
export async function searchPosts(query) {
    const searchUrl = `${API_SOCIAL_URL}${SEARCH_POSTS_ENDPOINT}`;
    const response = await authFetch(searchUrl);
  /* 
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    } */
  
    return await response.json();
  }
  
  // Function to set up the search form listener
  export function setSearchFormListener() {
    console.log('Search form listener is triggered.');
    const form = document.querySelector("#searchForm");
  
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
  
        const formData = new FormData(form);
        const query = formData.get('searchInput');
  
        try {
          const posts = await searchPosts(query);
          
          console.log(posts);
        } catch (error) {
          console.error("Error searching posts:", error);
        }
      });
    }
  }

