const searchSidebar = document.getElementById("searchSidebar");
const searchVal = document.getElementById("inputSearch");
searchSidebar.addEventListener("click", (event) => {
  event.preventDefault();
  const search = document.getElementById("search");
  search.classList.remove("d-none");
});
const searchUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

const search = document.getElementById("search");
search.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(searchUrl + searchVal.value, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "930759dc45msh78f3170ae6ee192p10b2d8jsn8a3475d585fa",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => {
      console.log(searchVal.value);
      console.log(response);
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error(console.log(error));
      }
    })
    .then((elem) => {});
});
