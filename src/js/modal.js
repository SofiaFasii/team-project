import { fetchById } from "./api";

const overlay = document.querySelector(".modal-container");

export function renderModal(event) {
  overlay.innerHTML = `
    <div class="modal">
      <button id="closeBtn">×</button>
      <h2 class="h2-info">Info</h2>
      <p class="p-info">${event.info}</p>
      <h2 class="h2-when">When</h2>
      <p class="p-data">${event.dates.start.localDate}</p>
      <p class="p-time">${event.dates.start.localTime}</p>
      <h2 class="h2-where">Where</h2>
      <p class="p-where">${event.locale}</p>
      <h2 class="h2-who">Who</h2>
      <p class="p-who">${event.name}</p>
    </div>
  `;

  overlay.classList.add("open");

  overlay.querySelector("#closeBtn").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

function closeModal() {
  overlay.classList.remove("open");
  overlay.innerHTML = "";
}


