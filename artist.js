const url = "https://deezerdevs-deezer.p.rapidapi.com/artist/";
const params = new URLSearchParams(window.location.search);
const id = params.get("artistId");
console.log(id);
window.onload = () => {
  fetch(url + id, {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': 'ede202ced2msha8718ec61e63293p1e2fa9jsneec3ff0aef78',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
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
      console.log(getElement);
      const headerBG = document.querySelector(".headerBG")
      const artistName = document.querySelector(".display-3")
      const listners = document.getElementById("ascoltatori")

      headerBG.setAttribute("src", getElement.picture_xl)
      artistName.innerHTML = getElement.name
      listners.innerHTML = getElement.nb_fan + " ascoltatori mensili"

    });
};
