const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem"
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a6f563ac0mshb5920d970de9fdep1cd546jsn9694b3e51c03",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
}
const rowAlbum = document.getElementById("row-album")
const generateAlbum = () => {
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json()
      } else {
        throw new Error(console.log(error))
      }
    })
    .then((getData) => {
      console.log(getData)
      getData.data.forEach((obj) => {
        console.log(obj.album)
        const img = obj.album.cover_small
        const title = obj.album.title
        const artist = obj.artist.name
        const col = document.createElement("col")
        col.classList.add("col")
        col.innerHTML = `<div class="card">
      <img
        src="${img}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${artist}
        </p>
      </div>
    </div>`
        rowAlbum.appendChild(col)
      })
    })
    .catch((error) => console.log(error))
}

window.addEventListener("DOMContentLoaded", () => {
  generateAlbum()
})
