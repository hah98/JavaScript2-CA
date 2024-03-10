/* import { API_SOCIAL_URL, SEARCH_POSTS_ENDPOINT } from '../api/constants.mjs';

import { authFetch } from '../api/authFetch.mjs';

export async function searchPosts(query) {
  const searchUrl = `${API_SOCIAL_URL}${SEARCH_POSTS_ENDPOINT}?query=${query}`;
  const response = await authFetch(searchUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  return await response.json();
} */


// searchPosts.mjs

/* import { API_SOCIAL_URL, SEARCH_POSTS_ENDPOINT } from '../api/constants.mjs';
import { authFetch } from '../api/authFetch.mjs';

export async function searchPosts(query) {
  const searchUrl = `${API_SOCIAL_URL}${SEARCH_POSTS_ENDPOINT}`;
  console.log('Search URL:', searchUrl);


  const response = await authFetch(searchUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  return await response.json();
} */



// handlers/searchPosts.mjs
import * as templates from "../templates/index.mjs";
/* import { searchPosts } from "../api/posts/searchPosts.mjs"; */ // Adjust the path based on your project structure
import { searchPosts } from "../api/posts/index.mjs"; 


export function setSearchFormListener() {
    const form = document.querySelector("#searchForm");
  
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
  
        const formData = new FormData(form);
        const query = formData.get('searchInput').trim(); 
  
        try {
          if (query) {
            const postsData = await searchPosts(query);
            const searchResultsContainer = document.querySelector("#searchResults");
            posts.renderSearchResultsTemplate(postsData, searchResultsContainer);
          } else {
            console.log("Query is empty");
          }
        } catch (error) {
          console.error("Error searching posts:", error);
        }
      });
    }
  }
