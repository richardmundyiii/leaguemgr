import sendRequest from "./send-request";
const BASE_URL = "/api/users";

export async function getAllUsers() {
  return sendRequest(`${BASE_URL}/`, "GET");
}

export async function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
