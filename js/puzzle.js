const puzzle = document.getElementById("puzzle");
const pieces = document.getElementById("pieces");

const amm = 25;
let i = 0;
let piecesadded = [];
let currentpiece = 0;

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

while (i<amm){
    let pieceholder = document.createElement("div");
    pieceholder.classList = "pieceholder";
    pieceholder.style.margin = 0;
    pieceholder.style.padding = 0;
    puzzle.appendChild(pieceholder);
    piecesadded.push(i+1)
    i++;
}

shuffle(piecesadded)

for (i=0;i<piecesadded.length;i++){
  let piece = document.createElement("img");
  piece.src = "media/images/puzzle/(" + (piecesadded[i]) + ").png";
  piece.classList = "piece";
  pieces.appendChild(piece);
}

dragged = null

piecesexisting = document.getElementsByClassName("piece")
pieceholders = document.getElementsByClassName("pieceholder")

for (i=0;i<piecesexisting.length;i++){
  piecesexisting[i].addEventListener("dragstart", function(event){
      dragged = event.target
  })

  piecesexisting[i].addEventListener("dragend", function(event){
      dragged = null
  })
}

for (i=0;i<pieceholders.length;i++){

  pieceholders[i].addEventListener("dragover", function(event){
    event.preventDefault()
  })

  pieceholders[i].addEventListener("drop", function(event){
    if (this.innerHTML == ""){
      this.appendChild(dragged)
      dragged = null
    }
  })
}

pieces.addEventListener("dragover", function(event){
  event.preventDefault()
})

pieces.addEventListener("drop", function(event){
    this.appendChild(dragged)
    dragged = null
})

pieces.addEventListener("dragend", function(event){
  dragged = null
})