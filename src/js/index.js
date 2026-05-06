import { fetchEvents } from "./api";
import { renderEvents } from "./render";
import { countries } from "./countries";

let country = ""
let keyword = ""
let page = 0

const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const countryInput = document.getElementById('countryInput')
const dropdown = document.getElementById('countryDropdown')
const arrowBtn = document.getElementById('arrowBtn')

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
  const item = e.target.closest(".dropdown-item");
  if (!item) return;
  e.preventDefault();
  countryInput.value = item.dataset.name;
  country = item.dataset.code;
  closeDropdown();
});
searchBtn.addEventListener("click", () => {
  keyword = searchInput.value.trim();
  page = 0;
  init();
});
document.addEventListener("click", (e) => {
  if (e.target !== countryInput && e.target !== arrowBtn) {
    closeDropdown();
  }
});

async function init() {
  const data = await fetchEvents({country, keyword, page});

  if(!data._embedded){
    console.log("Немає події")
    return
  }

  const events = data._embedded.events;
  console.log(events); 

  renderEvents(events)
}
init();
