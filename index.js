const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a6f563ac0mshb5920d970de9fdep1cd546jsn9694b3e51c03",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const rowAlbum = document.getElementById("row-album");
const generateAlbum = () => {
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error(console.log(error));
      }
    })
    .then((getElement) => {
      console.log(getElement);
      const albumArr = [];
      const album1 = getElement.data[0];
      const album2 = getElement.data[1];

      const album6 = getElement.data[5];
      const album12 = getElement.data[12];
      const album22 = getElement.data[22];
      albumArr.push(album6, album12, album1, album2, album22);
      albumArr.forEach((obj) => {
        const img = obj.album.cover_medium;
        const title = obj.album.title;
        const artist = obj.artist.name;
        const col = document.createElement("col");
        col.classList.add("col");
        col.innerHTML = `<div class="card ">
      <img
        src="${img}"
        class="card-img-top object-fit-cover"
        alt="album-image"
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${artist}
        </p>
      </div>
    </div>`;
        rowAlbum.appendChild(col);
      });
    })
    .catch((error) => console.log(error));
};

window.addEventListener("DOMContentLoaded", () => {
  generateAlbum();
});
