const url = "https://deezerdevs-deezer.p.rapidapi.com/artist/";

const params = new URLSearchParams(window.location.search);
const id = params.get("artistId");
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
      console.log(getElement);
    });
};
