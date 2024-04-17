const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem"
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a6f563ac0mshb5920d970de9fdep1cd546jsn9694b3e51c03",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
}

function iR() {
  let i = Math.floor(Math.random() * 24)
  return i
}

const generateBanner = () => {
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(console.log(error))
      }
    })
    .then((getElement) => {
      console.log(getElement)
      let bannerI = getElement.data[iR()]
      const annuncio = document.getElementById("annuncio")
      annuncio.innerHTML = `
      <div>
        <img
          src="${bannerI.album.cover_medium}"
          alt="annuncio"
          
        />
      </div>
      <div class="flex-grow-1">
        <p>Da ${bannerI.album.title}</p>
        <h1>${bannerI.title}</h1>
        <p>${bannerI.artist.name}</p>
        <p>${bannerI.type}</p>
        <div class="d-flex gap-3">
          <button class="btn btn-success">Play</button>
          <button class="btn btn-dark">Salva</button>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
              />
            </svg>
          </a>
          <button
            class="position-absolute top-0 end-0 m-3 btn btn-outline-secondary rounded-pill"
          >
            nascondi annunci
          </button>
        </div>
      </div>`
    })
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
    .then((getElement) => {
      console.log(getElement)
      const albumArr = []
      const album1 = getElement.data[0]
      const album2 = getElement.data[1]

      const album6 = getElement.data[5]
      const album7 = getElement.data[6]
      const album19 = getElement.data[19]
      albumArr.push(album6, album7, album1, album2, album19)
      albumArr.forEach((obj) => {
        const img = obj.album.cover_medium
        const title = obj.album.title
        const artist = obj.artist.name

        const col = document.createElement("col")
        col.classList.add("col")
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
    </div>`
        rowAlbum.appendChild(col)
      })
      const card = document.querySelectorAll(".card")

      console.log(card)
      card.forEach((event) => {
        event.addEventListener("click", () => {
          window.location.assign("./albumPage.html")
        })
      })
    })
    .catch((error) => console.log(error))
}

window.addEventListener("DOMContentLoaded", () => {
  generateBanner()
  generateAlbum()
})
