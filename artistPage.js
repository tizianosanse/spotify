const url = "https://deezerdevs-deezer.p.rapidapi.com/artist/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a6f563ac0mshb5920d970de9fdep1cd546jsn9694b3e51c03",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const songs = document.getElementById("songs");
const h4 = document.createElement("h4");
h4.classList.add("my-3");
h4.innerText = "Popolari";
songs.appendChild(h4);
const params = new URLSearchParams(window.location.search);
const id = params.get("idArtist");
console.log(id);

const generateArtistPage = () => {
  fetch(url + id, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("generic error");
      }
    })
    .then((element) => {
      console.log(element);
      const heroSection = document.getElementById("hero");
      const artistImage = element.picture_xl;
      heroSection.style = `background-image: url(${artistImage})`;
      const nameArtist = document.getElementById("name");
      nameArtist.innerText = element.name;
      const listeners = document.getElementById("listeners");
      listeners.innerHTML = `${element.nb_fan} ascoltatori mensili`;
      const likeTrack = document.getElementById("albums");
      likeTrack.innerHTML = `<div>
      <img
      src="${element.picture_small}"
      
      alt="album-image"
    />
      <i class="bi bi-heart-fill"></i>
      </div>
      <div>
      <p  class="m-0">hai messo Mi piace a 11 brani</p>
      <p class="m-0"> Di ${element.name}
      </div>`;
    })
    .catch((error) => console.log(error));
};
const url2 = `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=5`;

const generateTracksArtist = () => {
  fetch(url2, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("generic error");
      }
    })
    .then((element) => {
      console.log(element);
      element.data.forEach((obj) => {
        const tracks = document.createElement("div");
        tracks.classList.add(
          "d-flex",
          "justify-content-between",
          "align-items-center",
          "my-3",
          "hover"
        );
        const time = (obj.duration / 60).toFixed(2);
        tracks.innerHTML = ` 
        
          <img id="cover" src="${obj.album.cover_small}" alt="image-track" />
          <h6 id="title">${obj.title}</h6>
          <p>${obj.rank}</p>
          <p id="duration">${time}</p>
        `;

        songs.appendChild(tracks);
        tracks.addEventListener("click", () => {
          const imgFoot = document.getElementById("imgFoot");
          imgFoot.setAttribute("src", obj.album.cover_medium);
          const titleFoot = document.getElementById("titleFoot");
          titleFoot.innerText = obj.title;
          const artistFoot = document.getElementById("artistFoot");
          artistFoot.innerText = obj.artist.name;
          const embed = document.getElementById("audio");
          //embed.setAttribute("src", search.preview);
          console.log(embed);
          embed.src = obj.preview;
          console.log(embed.src);
        });
      });
    });
};

window.addEventListener("DOMContentLoaded", () => {
  generateArtistPage();
  generateTracksArtist();
});
const likeLink = document.getElementById("likeLink");
likeLink.addEventListener("click", (event) => {
  event.preventDefault();
  const path = document.getElementById("path");
  path.setAttribute("fill", "green");
});
