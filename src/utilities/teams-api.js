import sendRequest from "./send-request";
const BASE_URL = "/api/teams";

export async function getAllTeams() {
  return sendRequest(`${BASE_URL}/`, "GET");
}
export async function create(teamData) {
  return sendRequest(BASE_URL, "POST", teamData);
}
