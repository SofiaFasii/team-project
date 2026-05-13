import { fetchEvents, fetchById } from "./api";
import { renderEvents } from "./render";
import { countries } from "./countries";
import { renderModal } from "./modal";
import { renderPagination } from "./pagination.js";


let country = ""
let keyword = ""
let page = 0
let totalPages = 0

const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const countryInput = document.getElementById('countryInput')
const dropdown = document.getElementById('countryDropdown')
const arrowBtn = document.getElementById('arrowBtn')
const message = document.getElementById('message')
const list = document.querySelector(".events-list");

function renderDropdown(list){
  dropdown.innerHTML = list
    .map(([name, code]) => 
      `<li class="dropdown-item" data-code="${code}" data-name="${name}">${name}</li>`
    ).join("")
}

function openDropdown(){
  renderDropdown(countries)
  dropdown.classList.add('open')
}

function closeDropdown(){
  dropdown.classList.remove("open")
}

arrowBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  dropdown.classList.contains('open') ? closeDropdown() : openDropdown()
})

countryInput.addEventListener("input", () => {
  const query = countryInput.value.toLowerCase()
  const filtered = countries.filter(([name]) => name.toLowerCase().includes(query))
  renderDropdown(filtered)
  dropdown.classList.add("open")
})

dropdown.addEventListener("mousedown", (e) => {
  e.preventDefault()
  const item = e.target.closest(".dropdown-item")
  if (!item) return;
  countryInput.value = item.dataset.name
  country = item.dataset.code
  closeDropdown()
  init()
})

searchBtn.addEventListener("click", () => {
  keyword = searchInput.value.trim()
  page = 0
  init()
})

document.addEventListener("click", (e) => {
  if (e.target !== countryInput && e.target !== arrowBtn) {
    closeDropdown()
  }
});

async function init() {
  const { events, pageInfo } = await fetchEvents({ country, keyword, page })
  if (!events || events.length === 0) {
    renderEvents([])
    message.textContent = "Нічого не знайдено"
    return
  }
  message.textContent = ""
  renderEvents(events)

  totalPages = pageInfo.totalPages
  renderPagination(page, totalPages, changePage)
}
function changePage(newPage) {
  page = newPage
  init()
}
init()

list.addEventListener("click", async (e) => {
  const card = e.target.closest(".event");
  if (!card) return;
  const data = await fetchById(card.dataset.id);
  renderModal(data);
});
  