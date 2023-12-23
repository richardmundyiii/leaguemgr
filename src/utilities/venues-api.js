import sendRequest from "./send-request";
const BASE_URL = "/api/venues";

export async function getAllVenues() {
  return sendRequest(`${BASE_URL}/`, "GET");
}

export async function create(venueData) {
  return sendRequest(BASE_URL, "POST", venueData);
}
