const list = document.querySelector(".events-list");

export function renderEvents(events) {
  const markup = events
    .map((event) => {

      return `
        <li class="event" data-id="${event.id}">
          <img class="event-img" src="${event.images[0].url}" alt="${event.name}">
          <h3 class="event-title">${event.name}</h3>
          <p class="event-dates">${event.dates.start.localDate}</p>
          <p class="event-venues">${event._embedded.venues[0].name}</p>
        </li>
      `;
    })
    .join("")

  list.innerHTML = markup;
}
