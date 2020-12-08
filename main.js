var CarteUn = document.getElementById("CarteUn");
var CarteDeux = document.getElementById("CarteDeux");
var CarteTrois = document.getElementById("CarteTrois");
var CarteQuatre = document.getElementById("CarteQuatre");
var CarteCinq = document.getElementById("CarteCinq");
var CarteSix = document.getElementById("CarteSix");
var CarteSept = document.getElementById("CarteSept");
var CarteHuit = document.getElementById("CarteHuit");

var un = document.getElementById("un");
var deux = document.getElementById("deux");
var trois = document.getElementById("trois");
var quatre = document.getElementById("quatre");
var cinq = document.getElementById("cinq");
var six = document.getElementById("six");
var sept = document.getElementById("sept");
var huit = document.getElementById("huit");

var cache = false;

un.onclick = function()
  {
    if(!cache){
          
    CarteUn.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/01_of_clubs_A.svg/1200px-01_of_clubs_A.svg.png");
      cache = true;
    }
    else
      {
        CarteUn.setAttribute("src", "https://www.wikihow.com/images_en/d/d6/Play-Yu-Gi-Oh%21-Step-1.jpg");
        cache = false;
      }
  }
  
  deux.onclick = function()
  {
    if(!cache){
    CarteDeux.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/01_of_clubs_A.svg/1200px-01_of_clubs_A.svg.png");
      cache = true;
    }
    else
      {
        CarteDeux.setAttribute("src", "https://www.wikihow.com/images_en/d/d6/Play-Yu-Gi-Oh%21-Step-1.jpg");
        cache = false;
      }
  }

trois.onclick = function() {
    if (!cache) {
        CarteTrois.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/langfr-150px-01_of_spades_A.svg.png");
        cache = true;
    } else {
        CarteTrois.setAttribute("src", "https://www.wikihow.com/images_en/d/d6/Play-Yu-Gi-Oh%21-Step-1.jpg");
        cache = false;
    }
}

quatre.onclick = function() {
    if (!cache) {
        CarteQuatre.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/langfr-150px-01_of_spades_A.svg.png");
        cache = true;
    } else {
        CarteQuatre.setAttribute("src", "https://www.wikihow.com/images_en/d/d6/Play-Yu-Gi-Oh%21-Step-1.jpg");
        cache = false;
    }
}
  
cinq.onclick = function() {
    if (!cache) {
        CarteCinq.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/01_of_clubs_A.svg/1200px-01_of_clubs_A.svg.png");
        cache = true;
    } else {
        CarteCinq.setAttribute("src", "https://www.wikihow.com/images_en/d/d6/Play-Yu-Gi-Oh%21-Step-1.jpg");
        cache = false;
    }
}
  
six.onclick = function() {
    if (!cache) {
        CarteSix.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/01_of_clubs_A.svg/1200px-01_of_clubs_A.svg.png");
        cache = true;
    } else {
        CarteSix.setAttribute("src", "https://www.wikihow.com/images_en/d/d6/Play-Yu-Gi-Oh%21-Step-1.jpg");
        cache = false;
    }
}
  
sept.onclick = function() {
    if (!cache) {
        CarteSept.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/01_of_clubs_A.svg/1200px-01_of_clubs_A.svg.png");
        cache = true;
    } else {
        CarteSept.setAttribute("src", "https://www.wikihow.com/images_en/d/d6/Play-Yu-Gi-Oh%21-Step-1.jpg");
        cache = false;
    }
}
  
huit.onclick = function() {
    if (!cache) {
        CarteHuit.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/01_of_clubs_A.svg/1200px-01_of_clubs_A.svg.png");
        cache = true;
    } else {
        CarteHuit.setAttribute("src", "https://www.wikihow.com/images_en/d/d6/Play-Yu-Gi-Oh%21-Step-1.jpg");
        cache = false;
    }
}