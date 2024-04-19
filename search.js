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
    .then((elem) => {
      const banner = document.getElementById("annuncio");
      const albums = document.getElementById("row-album");
      const playlist = document.getElementById("rowPlaylist");
      const titl = document.getElementById("titl");
      const titl2 = document.getElementById("titl2");

      banner.remove();
      albums.remove();

      playlist.remove();
      titl.remove();
      titl2.remove();

      console.log(elem);
      console.log(elem.data);

      elem.data.forEach((search) => {
        console.log(search);
        const containerSearch = document.getElementById("containerSearch");
        const imgAlbum = document.createElement("img");
        imgAlbum.setAttribute("width", 60);
        imgAlbum.setAttribute("height", 60);
        imgAlbum.setAttribute("src", search.album.cover_medium);

        const rowSearchTrack = document.createElement("div");
        rowSearchTrack.classList.add("row", "hover");
        rowSearchTrack.addEventListener("click", (event) => {
          event.preventDefault();
          const titleFoot = document.getElementById("titleFoot");
          titleFoot.innerText = search.title;
          const artistFoot = document.getElementById("artistFoot");
          artistFoot.innerText = search.artist.name;
          const imgFoot = document.getElementById("imgFoot");
          imgFoot.setAttribute("src", search.album.cover_medium);
        });

        const colSearchTrack = document.createElement("div");
        colSearchTrack.classList.add("col-12", "d-flex", "mb-5", "gap-3");
        const titlTrack = document.createElement("a");
        titlTrack.innerText = search.title;
        const artTrack = document.createElement("a");
        artTrack.innerText = search.artist.name;

        colSearchTrack.appendChild(imgAlbum);
        colSearchTrack.appendChild(titlTrack);
        colSearchTrack.appendChild(artTrack);
        rowSearchTrack.appendChild(colSearchTrack);
        containerSearch.appendChild(rowSearchTrack);
      });
    });
});
