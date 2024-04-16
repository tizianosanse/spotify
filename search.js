const searchSidebar = document.getElementById("searchSidebar");
searchSidebar.addEventListener("click", (event) => {
  event.preventDefault();
  const search = document.getElementById("search");
  search.classList.remove("d-none");
});
