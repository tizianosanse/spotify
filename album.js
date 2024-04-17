const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a6f563ac0mshb5920d970de9fdep1cd546jsn9694b3e51c03",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const rowAlbum = document.getElementById("row-album");
const rowAlbum2 = document.getElementById("rowAlbum2");
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
      const songArr = [];
      const song1 = getElement.data[0];
      const song2 = getElement.data[1];
      console.log(getElement.data);
      const song5 = getElement.data[5];
      const song12 = getElement.data[12];
      const song22 = getElement.data[22];
      songArr.push(song5, song12, song1, song2, song22);
      songArr.forEach((obj) => {
        const img = obj.album.cover_medium;
        const title = obj.album.title;
        const artist = obj.artist.name;

        const col = document.createElement("col");
        col.classList.add("col");
        col.innerHTML = `<div class="card ">
        <a id='albumLink'
        class='link'
        
         href="/album.html?p=${obj.album.id}">
      <img
        src="${img}"
        class="card-img-top object-fit-cover"
        alt="album-image"
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        </a>
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
