const url = "https://deezerdevs-deezer.p.rapidapi.com/album/"
const params = new URLSearchParams(window.location.search)
const id = params.get("p")
console.log(id)
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
        console.log(response)
        return response.json()
      } else {
        throw new Error(console.log(error))
      }
    })
    .then((getElement) => {
      console.log(getElement)
      const title = document.getElementById("title")
      const img = document.getElementById("imgAlbum")
      img.setAttribute("src", getElement.cover_medium)

      title.innerText = getElement.title
      const nameArtist = document.getElementById("name-artist")
      nameArtist.innerText = getElement.artist.name
      const arrTracks = getElement.tracks.data
      const container = document.getElementById("tracks-container")
      arrTracks.forEach((track) => {
        const time = (track.duration / 60).toFixed(2)
        const rowContainer = document.createElement("div")
        rowContainer.classList.add("row", "rowTrack")
        rowContainer.innerHTML = `<div class="col-1">
        <p>${arrTracks.indexOf(track) + 1}</p>
      </div>
      <div class="col-6">
      <h6>${track.title}</h6>
      <a class="link d-inline-block" href="artistPage.html?idArtist=${
        getElement.artist.id
      }"><p>${track.artist.name}</p></a>
        </div>
        <div class="col-4">
        <p>${track.rank}</p>
        </div>
        <div class="col-1">
        <p>${time}</p>
        </div>`
        container.appendChild(rowContainer)

        rowContainer.addEventListener("click", () => {
          const imgFoot = document.getElementById("imgFoot")
          imgFoot.setAttribute("src", getElement.cover_medium)
          const titleFoot = document.getElementById("titleFoot")
          titleFoot.innerText = track.title
          const artistFoot = document.getElementById("artistFoot")
          artistFoot.innerText = track.artist.name
        })
      })
    })
  const likeLink = document.getElementById("likeLink")
  likeLink.addEventListener("click", (event) => {
    event.preventDefault()
    const path = document.getElementById("path")
    path.setAttribute("fill", "green")
  })
}
