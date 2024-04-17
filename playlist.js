const URL = "https://deezerdevs-deezer.p.rapidapi.com/playlist/23";
const URL2 = "https://deezerdevs-deezer.p.rapidapi.com/playlist/13";
const URL3 = "https://deezerdevs-deezer.p.rapidapi.com/playlist/888";
const URL4 = "https://deezerdevs-deezer.p.rapidapi.com/playlist/14";
const URL5 = "https://deezerdevs-deezer.p.rapidapi.com/playlist/24";
const URL6 = "https://deezerdevs-deezer.p.rapidapi.com/playlist/25";

window.onload = () => {
  fetch(URL, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "930759dc45msh78f3170ae6ee192p10b2d8jsn8a3475d585fa",
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
    .then((playlistObj) => {
      console.log(playlistObj);
      const card1 = document.getElementById("imgCard1");
      card1.setAttribute("src", playlistObj.picture);
      const title = document.getElementById("title");
      title.innerText = playlistObj.title;
    });
  fetch(URL2, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "930759dc45msh78f3170ae6ee192p10b2d8jsn8a3475d585fa",
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
    .then((playlistObj) => {
      console.log(playlistObj);
      const card2 = document.getElementById("imgCard2");
      card2.setAttribute("src", playlistObj.picture);
      const title2 = document.getElementById("title2");
      title2.innerText = playlistObj.title;
    });
  fetch(URL3, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "930759dc45msh78f3170ae6ee192p10b2d8jsn8a3475d585fa",
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
    .then((playlistObj) => {
      console.log(playlistObj);
      const card3 = document.getElementById("imgCard3");
      card3.setAttribute("src", playlistObj.picture);
      const title3 = document.getElementById("title3");
      title3.innerText = playlistObj.title;
    });
  fetch(URL4, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "930759dc45msh78f3170ae6ee192p10b2d8jsn8a3475d585fa",
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
    .then((playlistObj) => {
      console.log(playlistObj);
      const card4 = document.getElementById("imgCard4");
      card4.setAttribute("src", playlistObj.picture);
      const title4 = document.getElementById("title4");
      title4.innerText = playlistObj.title;
    });
  fetch(URL5, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "930759dc45msh78f3170ae6ee192p10b2d8jsn8a3475d585fa",
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
    .then((playlistObj) => {
      console.log(playlistObj);
      const card5 = document.getElementById("imgCard5");
      card5.setAttribute("src", playlistObj.picture);
      const title5 = document.getElementById("title5");
      title5.innerText = playlistObj.title;
    });
  fetch(URL6, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "930759dc45msh78f3170ae6ee192p10b2d8jsn8a3475d585fa",
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
    .then((playlistObj) => {
      console.log(playlistObj);
      const card6 = document.getElementById("imgCard6");
      card6.setAttribute("src", playlistObj.picture);
      const title6 = document.getElementById("title6");
      title6.innerText = playlistObj.title;
    });
};
