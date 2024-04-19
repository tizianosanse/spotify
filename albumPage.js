const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";
const params = new URLSearchParams(window.location.search);
const id = params.get("p");
console.log(id);
window.onload = () => {
  fetch(url + id, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9a6f563ac0mshb5920d970de9fdep1cd546jsn9694b3e51c03",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error(console.log(error));
      }
    })
    .then((getElement) => {
      const imgFoot = document.getElementById("imgFoot");
      imgFoot.setAttribute("src", getElement.cover_medium);
      console.log(getElement);
      const title = document.getElementById("title");
      const img = document.getElementById("imgAlbum");

      img.setAttribute("src", getElement.cover_medium);

      title.innerText = getElement.title;
      const arrTracks = getElement.tracks.data;
      arrTracks.forEach((track) => {
        const link = document.createElement("a");

        const rowTracks = document.createElement("div");

        const col1 = document.createElement("div");
        col1.classList.add("col-1");
        const col6 = document.createElement("div");
        col6.classList.add("col-6");
        const col4 = document.createElement("div");
        col4.classList.add("col-4");
        const col66 = document.createElement("div");
        col66.classList.add("col-1");
        rowTracks.classList.add("row");
        console.log(track);
        console.log(getElement.tracks.data);
        const songCont = document.getElementById("container-tracks");
        const p = document.createElement("p");

        p.innerText = arrTracks.indexOf(track) + 1;

        col1.appendChild(p);
        songCont.appendChild(col1);
        const title = document.createElement("a");

        title.innerText = track.title;
        const artist = document.createElement("h6");
        artist.innerText = track.artist.name;
        col6.appendChild(title);
        col6.appendChild(artist);
        songCont.appendChild(col6);
        const p2 = document.createElement("p");
        p2.innerText = track.rank;
        col4.appendChild(p2);
        songCont.appendChild(col4);
        const time = document.createElement("p");
        time.innerText = track.duration;
        col66.appendChild(time);
        songCont.appendChild(col66);
        title.addEventListener("click", (event) => {
          event.preventDefault();

          const titleFoot = document.getElementById("titleFoot");
          titleFoot.innerText = track.title;
          const artistFoot = document.getElementById("artistFoot");
          artistFoot.innerText = track.artist.name;
        });
      });
    });
};

const likeLink = document.getElementById("likeLink");
likeLink.addEventListener("click", (event) => {
  event.preventDefault();
  const path = document.getElementById("path");
  path.setAttribute("fill", "green");
});
