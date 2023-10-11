import { API_SOCIAL_URL } from "../constants.mjs";


import * as storage from "../../storage/index.mjs";


const action = "/auth/login";
const method = "post";


export async function login(profile) {
const loginUrl = API_SOCIAL_URL + action;
const body = JSON.stringify(profile);


const response = await fetch(loginUrl, {
headers: {
"content-type": "application/json",
},
method,
body,
});


const result = await response.json();


localStorage.setItem("token", result.accessToken);


/* const { accessToken, ...user } = await response.json();


storage.save("token", accessToken);
storage.save("profile", user); */
}


