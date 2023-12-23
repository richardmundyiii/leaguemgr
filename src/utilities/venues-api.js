import sendRequest from "./send-request";
const BASE_URL = "/api/venues";

export async function getAllVenues() {
  return sendRequest(`${BASE_URL}/`, "GET");
}

export async function getTeamDetail(venueId) {
  return sendRequest(`${BASE_URL}/${venueId}`);
}

export async function create(venueData) {
  return sendRequest(BASE_URL, "POST", venueData);
}

export async function getTeamsByVenueId(venueId) {
  return sendRequest(`${BASE_URL}/${venueId}/teams`);
}
