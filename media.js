// const URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";

// const play = document.getElementById("play");
// play.addEventListener("click", (event) => {
//   event.preventDefault();
//   fetch(URL, {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "9a6f563ac0mshb5920d970de9fdep1cd546jsn9694b3e51c03",
//       "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log(response);
//         return response.json();
//       } else {
//         throw new Error(console.log(error));
//       }
//     })
//     .then((objSong) => {
//       const footer = document.getElementsByTagName("footer");
//       const video = document.createElement("video");
//       video.setAttribute("name", "media");

//       const audio = document.createElement("source");
//       audio.setAttribute("type", "audio/mpeg");
//       audio.setAttribute("src", objSong.data[0].preview);
//       console.log(objSong.data[0].preview);
//       video.appendChild(audio);
//       footer.appendChild(video);
//     })
//     .catch((error) => console.log(error));
// });
