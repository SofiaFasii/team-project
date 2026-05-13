const paginationContainer = document.querySelector(".pagination")

export function renderPagination(currentPage, totalPages, onChangePage) {
  const pageNumbers = getVisiblePageNumbers(currentPage, totalPages)
  renderPageButtons(pageNumbers, currentPage)
  setupClickHandler(onChangePage)
}

function getVisiblePageNumbers(currentPage, totalPages) {
  const visible = 5

  let start = currentPage - 2
  let end = currentPage + 2

  start = Math.max(start, 0)
  end = Math.min(end, totalPages - 1)

  if (currentPage < 3) {
    end = Math.min(visible - 1, totalPages - 1)
  }

  if (currentPage > totalPages - visible) {
    start = Math.max(0, totalPages - visible)
    end = totalPages - 1
  }

  const pageNumbers = []

  if (start > 0) {
    pageNumbers.push(1)
    if (start > 1) pageNumbers.push("...")
  }

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i + 1)
  }

  if (end < totalPages - 1) {
    if (end < totalPages - 2) pageNumbers.push("...")
    pageNumbers.push(totalPages)
  }

  return pageNumbers
}

function renderPageButtons(pageNumbers, currentPage) {
  paginationContainer.innerHTML = pageNumbers
    .map((pageNumber) => {
      if (pageNumber === "...") {
        return `<span class="dots">...</span>`
      }

      const isActive = pageNumber - 1 === currentPage
      return `
        <button class="page-btn ${isActive ? "active" : ""}"
                data-page="${pageNumber - 1}">
          ${pageNumber}
        </button>
      `
    })
    .join("")
}

function setupClickHandler(onChangePage) {
  paginationContainer.onclick = (event) => {
    const clickedButton = event.target.closest(".page-btn")
    if (!clickedButton) return

    const newPage = +clickedButton.dataset.page
    onChangePage(newPage)
  }
}