descented = false
music = new Audio("media/audio/soundsofthechamber.mp3");
music.addEventListener('timeupdate', function(){
  var buffer = .44
  if(this.currentTime > this.duration - buffer){
      this.currentTime = 0
      this.play()
  }
});

function leave(){
  window.location.replace("void.html")
}

function blinkoff(imag){
  imag.src = "media/images/god.png";
  setInterval(blinkon, 30, imag)
}

function blinkon(imag){
  imag.src = "media/images/god2.png";
  setInterval(blinkoff, 30, imag)
}

function yt() {
  window.open("https://www.youtube.com/@maxflyman171", '_blank');
}

function tt() {
  window.open("https://www.tiktok.com/@maxflymann", '_blank');
}

function disc() {
  window.open("https://discord.gg/3SzwSmtdWd", '_blank');
}

function twch() {
  window.open("https://www.twitch.tv/maxflyman1", '_blank');
}

function twit() {
  window.open("https://twitter.com/MaxFlyMann", '_blank');
}

function redd() {
  window.open("https://www.reddit.com/user/MaxFlyman", '_blank');
}

function spot() {
  window.open("https://open.spotify.com/user/joi9zmlvrwp8atmquz9f5zmff", '_blank');
}

function cash() {
  window.open("https://cash.app/$MaxFlyMan", '_blank');
}

function meow() {
  meowsound = new Audio("media/audio/meow.wav");
  meowsound.play();
}

function messed() {
  document.getElementById("window").remove()
  document.getElementById("godwat").remove()
  document.getElementById("door").remove()
  document.querySelector("body").style.margin = "0"
  document.querySelector("body").style.padding = "0"
  document.querySelector("body").style.overflow = "hidden"
  document.querySelector("html").style.cursor = "none"
  vid = document.createElement("video")
  vid.autoplay = true
  vid.loop = true
  vid.muted = true
  vid.id = "bg"
  vid.src = "media/videos/angry.mp4"
  vid.style.zIndex = "10"
  vid.style.height = "100vh"
  vid.style.width = "100%"
  vid.style.backgroundPosition = "absolute";
  vid.style.objectFit = "cover";
  document.body.appendChild(vid)
  god = document.createElement("img")
  god.id = "god"
  god.src = "media/images/god.png"
  god.style.position = "absolute";
  god.style.top = "50%";
  god.style.left = "50%";
  god.style.transform = "translate(-50%, -50%)";
  god.style.width = "800px";
  setInterval(blinkon, 30, god)
  document.body.appendChild(god)
  document.getElementById("god").style.animation = "zoom .2s infinite linear"
  music.currentTime = 0
  music.pause();
  music.currentTime = 0;
  new Audio('media/audio/angry.mp3').play();
  setTimeout(leave, 1000)
}

function moew(e) {
  upfiles = document.getElementById("file")
  file = upfiles. files[0]
  let fr = new FileReader()
  fr.addEventListener("load", function(){
    if (this.result == "gbf8njgh65j6h7jf5gh6jgh6fj6f8hg5j56fgh84j56hfg84j56hg4fj8ghf4j8h56fj486545l4l548hf4dghjdfg8h4dfg56h8dgf4h56fs4g5sdfg8dsf4tro54j6iu45h654h6b45uig635hb63hj345b6hjk45bg68456y0dvh6dfgh6dfg780ghs6fg7dfs6g78dfs6gdfs78ui34524v5b6234mnv6j2b67mj24v6mn2bv65mnb6v"){
      window.location.href = "afinalnote.html"
    }
    else{
      if (confirm("you messed up") == true) {
        document.documentElement.requestFullscreen()
        messed();
      } else {
        document.documentElement.requestFullscreen()
        messed();
      }
    }
  })
  fr.readAsText(file)
}

function sparklestop() {
  sparkles = 0;
  for (var i=0; i < star.length; i++) {
    star[i].remove()
  }
  for (var i=0; i < tiny.length; i++) {
    tiny[i].remove()
  } 
}

function dooropen(){
  doorel.classList.toggle("dooropen")
  new Audio("media/audio/dooropen.mp3").play()
  setTimeout(function(){window.location.href = "labyrinth.html";}, 750)
}

function imhere(){
  new Audio("media/audio/knock.mp3").play()
  doorel = document.getElementById("door")
  doorel.onclick = null
  doorel.style.cursor = "url(media/images/godscursor.png), none"
  setTimeout(dooropen, 1000)
}


function descent() {
  kit = document.getElementById("kittywave");
  if (kit.src.indexOf("media/images/kittywave.gif")!=-1){
    kit.src = "media/images/kittywav.gif";
    document.querySelector('html').style.animationDuration = "3s";
  }
  else if (kit.src.indexOf("media/images/kittywav.gif")!=-1){
    kit.src = "media/images/kittywa.gif";
    document.querySelector('html').style.animationDuration = "6s";
  }
  else if (kit.src.indexOf("media/images/kittywa.gif")!=-1){
    kit.src = "media/images/kittyw.gif";
    document.querySelector('html').style.animationPlayState = "paused"
  }
  else if (kit.src.indexOf("media/images/kittyw.gif")!=-1){
    descented = true
    music.play();
    kit.src = "media/images/kitty.gif";
    document.querySelector('html').style.background = "url(media/images/guts.png)"
    document.querySelector('html').style.animation = "none"
    document.querySelector('html').style.backgroundSize = "500px"
    document.querySelector('html').style.cursor = "url(media/images/godscursor.png), none"
    document.getElementById("window").style.backgroundColor = "#000000"
    document.getElementById("window").style.border = "7px solid #380005"
    document.querySelector('p1').innerHTML = "<center>wElcOMe to My SiTE</center>"
    document.querySelector('p1').style.fontFamily = "HELP";
    document.querySelector('p2').innerHTML = ""
    document.querySelector('p2').style.fontFamily = "HELP";
    document.getElementById("autistic").remove()
    document.querySelector('p3').innerHTML = "<center>3475493</center><br>"
    document.querySelector('p3').style.fontFamily = "HELP";
    document.querySelector('p3').style.fontSize = "50px";
    document.querySelector('p4').innerHTML = "<center>This is just the beginning</center><br><br><br><br><br><br>"
    buttons = document.getElementsByClassName("button")
    for (let i=0; i<buttons.length; i+=1) {
      buttons[i].style.backgroundColor = "#750000";
      buttons[i].style.border = "3px solid #380005";
      buttons[i].style.fontFamily = "HELP"
      buttons[i].style.cursor = "url(media/images/godscursorclicker.png), none"
    }
    document.getElementById("buttons").remove()
    document.getElementById('kitty').remove()

    godwat = document.createElement("img")
    godwat.src = "media/images/god.png";
    godwat.id = "godwat"
    godwat.style.cursor = "url(media/images/godscursorclicker.png), none"
    document.getElementById("customfile").appendChild(godwat)

    sparklestop()
    
    doorback = document.createElement("img")
    doorback.src = "media/images/backdoor.png"
    doorback.id = "backdoor"
    document.getElementById("backdoordiv").appendChild(doorback);

    door = document.createElement("img")
    door.src = "media/images/door.png"
    door.id = "door"
    door.onclick = imhere
    door.style.cursor = "url(media/images/godscursorclicker.png), none"
    document.getElementById("doordiv").appendChild(door);
    document.querySelector("link[rel='icon']").href = "media/images/brain.png";
  }
}