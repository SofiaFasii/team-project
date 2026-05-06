const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json"
const API_KEY = "tG7aQ3GCK35UI1b0FVQGBmQ2kSZJ2t4e"

export async function fetchEvents({country, keyword, page}) {
  const URL = `${BASE_URL}?apikey=${API_KEY}&keyword=${keyword}&countryCode=${country}&page=${page}`

  const res = await fetch(URL);
  const data = await res.json();

  return data;
}
