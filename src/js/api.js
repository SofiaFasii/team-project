const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events";
const API_KEY = "tG7aQ3GCK35UI1b0FVQGBmQ2kSZJ2t4e";

export async function fetchEvents({ country, keyword, page }) {
  const URL = `${BASE_URL}.json?apikey=${API_KEY}&keyword=${keyword}&countryCode=${country}&page=${page}`;

  const res = await fetch(URL);
  const data = await res.json();
  // totalPages = data.page.totalPages
  // currentPages = data.page.number
  //викликати рендер подіїб, потім видалити return
  //викликати пагінацію
  return data;
}

export async function fetchById(id) {
  
  const res = await fetch(`${BASE_URL}/${id}.json?apikey=${API_KEY}`);
  const data = await res.json();

  return data;
}