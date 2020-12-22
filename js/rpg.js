var boss = document.getElementById("boss");





var cache = false;

boss.on = function()
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
  
 