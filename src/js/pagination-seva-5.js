// import { fetchEvents } from './api.js';

// const options = {
//   country: 'UA',
//   keyword: '',
//   page: 1 
// };



// async function loadPage(page) {
//   options.page = page;

//   const data = await fetchEvents({
//     country: options.country,
//     keyword: options.keyword,
//     page: page - 1  // API рахує з 0
//   });

//   const events = data._embedded?.events || [];
//   const totalPages = Math.min(
//     data.page?.totalPages ?? 1,
//     50  
//   );

//   renderCards(events);
//   renderPagination(page, totalPages);
// }

// function renderCards(events) {
//   const container = document.getElementById('cards');
//   container.innerHTML = events.map(event => 
//     <div class="card">
//       <img src="${event.images?.[0]?.url}" alt="${event.name}">
//       <h3>${event.name}</h3>
//       <p>${event.dates?.start?.localDate || ''}</p>
//     </div>
//   ).join('');
// }



// function renderPagination(currentPage, totalPages) {
//   Pagination.Click = function () {
//     const page = +this.innerHTML;
//     loadPage(page);
//   };

//   Pagination.Init(document.getElementById('pagination'), {
//     size: totalPages,
//     page: currentPage,
//     step: 1
//   });
// }

// // --- Старт ---
// loadPage(1);

// Pagination.Add(
// Pagination.size - Pagination.step * 2 - 2,
// Pagination.size + 1
// );
// } else {
// Pagination.First();
// Pagination.Add(
// Pagination.page - Pagination.step,
// Pagination.page + Pagination.step + 1
// );
// Pagination.Last();
// }
// Pagination.Finish();
// },
// Create: function (e) {
// e.innerHTML = "<span></span>";
// Pagination.e = e.getElementsByTagName("span")[0];
// },
// Init: function (e, data) {
// Pagination.Extend(data);
// Pagination.Create(e);
// Pagination.Start();
// }
// };

// Pagination.Init(document.getElementById("pagination"), {
// size: 29,
// page: 1,
// step: 1
// });
// #pagination {
//   display: inline-flex;
//   align-items: center;
//   padding: 2px 6px;
//   gap: 2px;
//   width: 100%;
//   justify-content: center;
//   height: 30px;
// }
