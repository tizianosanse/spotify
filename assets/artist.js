const url = "https://deezerdevs-deezer.p.rapidapi.com/artist/13";

window.onload = () => {
  fetch(url, {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'ede202ced2msha8718ec61e63293p1e2fa9jsneec3ff0aef78',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    },
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Request failed!");
    }
  })

.then((BG)=>{
    const headerBG = document.querySelector(".headerBG") 
    headerBG.setAttribute(BG, data.picture_xl)
})
}
