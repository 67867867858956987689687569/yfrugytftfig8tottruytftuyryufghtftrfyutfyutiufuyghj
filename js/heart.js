var codeinput = document.getElementById("code");

codeinput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    
    if (codeinput.value == "6666666"){
        alert("He is your friend")
    }
    else if (codeinput.value == "3475493"){
      window.location.href = "eyes.html"
    }
    else if (codeinput.value == "1264354"){
      window.location.href = "https://youtu.be/os-z2rbZTrs"
    }
    else if (codeinput.value == "8562593"){
      window.location.href = "ladybug.html"
    }
    else if (codeinput.value == "5859155"){
      window.location.href = "media/audio/the3rdcoming.mp3"
    }
    else if (codeinput.value == "7349277"){
      window.location.href = "puzzle.html"
    }
    else if (codeinput.value == "9461518"){
      window.location.href = "771.html"
    }
    else if (codeinput.value == "5392771"){
      window.location.href = "thekeytoitall.html"
    }
    else {
        window.location.href = "void.html"
    }
  }
});

function stopbeating(){
    heart = document.getElementById("heart")
    heart.src = "media/images/heartdead.gif"
    heart.onclick = ""
    setTimeout(function(){document.title = "It's Dead"; document.querySelector("link[rel='icon']").href = "media/images/empty.png";}, 3000)
}