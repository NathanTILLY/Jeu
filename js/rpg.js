var PVfafnir = 250;
var ATKfafnir = 25;
var tourPoisonFafnir = 0;
var randomFafnir = 0;

var PVghisarma = 340;
var ATKghisarma = 10;
var tourPoisonGhisarma = 0;
var randomGhisarma = 0;

var PVlucia = 400;
var ATKlucia = 20;
var tourPoisonLucia = 0;
var randomLucia = 0;

var PVash = 300;
var MANAash = 50;
var AshPare = false;
var tourAsh = false;

var PVpenelo = 100;
var MANApenelo = 110;
var PeneloPare = false;
var tourPenelo = false;

var PVdarwin = 150;
var MANAdarwin = 40;
var DarwinPare = false;
var tourDarwin = false;

var PVviviane = 120;
var MANAviviane = 150;
var VivianePare = false;
var tourViviane = false;



function afficher_aide(aide) {
	if (aide.style.display == "none") aide.style.display = "block";
	else aide.style.display = "none";
}

 /* ----------------------- ASH -------------------------------*/ 

btn_attaquer_Ash.onclick = function ATKash()
{
	btn_attaquer_Ash.style.display = "none";
	btn_special_Ash.style.display = "none";
	btn_parer_Ash.style.display = "none";
	btn_repos_Ash.style.display = "none";

	btn_targetFafnir_Ash.style.display = "block";
	btn_targetLucia_Ash.style.display = "block";
	btn_targetGhisarma_Ash.style.display = "block";
	btn_retour_Ash.style.display = "block";

	btn_targetFafnir_Ash.onclick = function()
	{
		PVfafnir = PVfafnir - 30;
		btn_targetFafnir_Ash.style.display = "none";
		btn_targetLucia_Ash.style.display = "none";
		btn_targetGhisarma_Ash.style.display = "none";
		btn_retour_Ash.style.display = "none";

		PVFafnir.innerHTML = PVfafnir + "/250";

		if (PVfafnir <= 0)
		{
			alert("Vous avez vaincu Fafnir");
			spriteFafnir.style.display = "none";
		}

		tourAsh = true;
		alert(tourAsh);

	}
	btn_targetLucia_Ash.onclick = function()
	{
		PVlucia = PVlucia - 30;
		btn_targetFafnir_Ash.style.display = "none";
		btn_targetLucia_Ash.style.display = "none";
		btn_targetGhisarma_Ash.style.display = "none";
		btn_retour_Ash.style.display = "none";


		PVLucia.innerHTML = PVlucia + "/400"

		if (PVlucia <= 0)
		{
			alert("Vous avez vaincu Lucia");
			spriteFafnir.style.display = "none";
		}

		tourAsh = true;
	}
	btn_targetGhisarma_Ash.onclick = function()
	{
		PVghisarma = PVghisarma - 30;
		btn_targetFafnir_Ash.style.display = "none";
		btn_targetLucia_Ash.style.display = "none";
		btn_targetGhisarma_Ash.style.display = "none";
		btn_retour_Ash.style.display = "none";

		PVGhisarma.innerHTML = PVghisarma + "/340";

		if (PVghisarma <= 0)
		{
			alert("Vous avez vaincu Ghisarma");
			spriteFafnir.style.display = "none";
		}
		tourAsh = true;
	}
	btn_retour_Ash.onclick = function()
	{
		btn_attaquer_Ash.style.display = "block";
		btn_special_Ash.style.display = "block";
		btn_parer_Ash.style.display = "block";
		btn_repos_Ash.style.display = "block";

		btn_targetFafnir_Ash.style.display = "none";
		btn_targetLucia_Ash.style.display = "none";
		btn_targetGhisarma_Ash.style.display = "none";
		btn_retour_Ash.style.display = "none";
	}
		
} 


	btn_special_Ash.onclick = function SPCash()
	{
		btn_attaquer_Ash.style.display = "none";
		btn_special_Ash.style.display = "none";
		btn_parer_Ash.style.display = "none";
		btn_repos_Ash.style.display = "none";

		btn_targetFafnir_Ash.style.display = "block";
		btn_targetLucia_Ash.style.display = "block";
		btn_targetGhisarma_Ash.style.display = "block";
		btn_retour_Ash.style.display = "block";

		btn_targetFafnir_Ash.onclick = function()
		{
			PVfafnir = PVfafnir - 150;
			MANAash = MANAash -50;

			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";

			PVFafnir.innerHTML = PVfafnir + "/250";

			if (PVfafnir <= 0)
			{
				alert("Vous avez vaincu Fafnir");
				spriteFafnir.style.display = "none";
			}

			tourAsh = true;

		}
		btn_targetLucia_Ash.onclick = function()
		{
			PVlucia = PVlucia - 150;
			MANAash = MANAash -50;

			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";

			PVLucia.innerHTML = PVlucia + "/400"

			if (PVlucia <= 0)
			{
				alert("Vous avez vaincu Lucia");
				spriteFafnir.style.display = "none";
			}

			tourAsh = true;
		}
		btn_targetGhisarma_Ash.onclick = function()
		{
			PVghisarma = PVghisarma - 150;
			MANAash = MANAash -50;
			
			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";


			PVGhisarma.innerHTML = PVghisarma + "/340";

			if (PVghisarma <= 0)
			{
				alert("Vous avez vaincu Ghisarma");
				spriteFafnir.style.display = "none";
			}

			tourAsh = true;
		}
		btn_retour_Ash.onclick = function()
		{
			btn_attaquer_Ash.style.display = "block";
			btn_special_Ash.style.display = "block";
			btn_parer_Ash.style.display = "block";
			btn_repos_Ash.style.display = "block";

			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";
		}
	} 

	
	btn_parer_Ash.onclick = function PARash()
	{
		btn_attaquer_Ash.style.display = "none";
		btn_special_Ash.style.display = "none";
		btn_parer_Ash.style.display = "none";
		btn_repos_Ash.style.display = "none";

		btn_confirmer_Ash.style.display = "block";
		btn_retour_Ash.style.display = "block";

		btn_confirmer_Ash.onclick = function()
		{
			AshPare = true;

			btn_confirmer_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";
			tourAsh = true;
		}

		btn_retour_Ash.onclick = function()
		{
			btn_attaquer_Ash.style.display = "block";
			btn_special_Ash.style.display = "block";
			btn_parer_Ash.style.display = "block";
			btn_repos_Ash.style.display = "block";

			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";
			btn_confirmer_Ash.style.display = "none";
		}
	} 


	btn_repos_Ash.onclick = function REPash()
	{
		btn_attaquer_Ash.style.display = "none";
		btn_special_Ash.style.display = "none";
		btn_parer_Ash.style.display = "none";
		btn_repos_Ash.style.display = "none";

		btn_confirmer_Ash.style.display = "block";
		btn_retour_Ash.style.display = "block";

		btn_confirmer_Ash.onclick = function()
		{
			PVash = PVash + 10;

			btn_confirmer_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";
			tourAsh = true;
		}
		btn_retour_Ash.onclick = function()
		{
			btn_attaquer_Ash.style.display = "block";
			btn_special_Ash.style.display = "block";
			btn_parer_Ash.style.display = "block";
			btn_repos_Ash.style.display = "block";

			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";
			btn_confirmer_Ash.style.display = "none";
		}
	} 
	
		
	/* ----------------------- FIN ASH -------------------------------*/ 

	/* ----------------------- PENELO --------------------------------*/

	btn_attaquer_Penelo.onclick = function ATKpenelo()
	{
		btn_attaquer_Penelo.style.display = "none";
		btn_special_Penelo.style.display = "none";
		btn_parer_Penelo.style.display = "none";
		btn_repos_Penelo.style.display = "none";

		btn_targetFafnir_Penelo.style.display = "block";
		btn_targetLucia_Penelo.style.display = "block";
		btn_targetGhisarma_Penelo.style.display = "block";
		btn_retour_Penelo.style.display = "block";

		btn_targetFafnir_Penelo.onclick = function()
		{
			PVfafnir = PVfafnir - 10;
			btn_targetFafnir_Penelo.style.display = "none";
			btn_targetLucia_Penelo.style.display = "none";
			btn_targetGhisarma_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";

			PVFafnir.innerHTML = PVfafnir + "/250";

			if (PVfafnir <= 0)
			{
				alert("Vous avez vaincu Fafnir");
				spriteFafnir.style.display = "none";
			}

			tourPenelo = true;
			alert(tourPenelo);
		}
		btn_targetLucia_Penelo.onclick = function()
		{
			PVlucia = PVlucia - 10;
			btn_targetFafnir_Penelo.style.display = "none";
			btn_targetLucia_Penelo.style.display = "none";
			btn_targetGhisarma_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";

			PVLucia.innerHTML = PVlucia + "/400"

			if (PVlucia <= 0)
			{
				alert("Vous avez vaincu Lucia");
				spriteFafnir.style.display = "none";
			}

			tourPenelo = true;
		}
		btn_targetGhisarma_Penelo.onclick = function()
		{
			PVghisarma = PVghisarma - 10;
			btn_targetFafnir_Penelo.style.display = "none";
			btn_targetLucia_Penelo.style.display = "none";
			btn_targetGhisarma_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";

			PVGhisarma.innerHTML = PVghisarma + "/340";

			if (PVghisarma <= 0)
			{
				alert("Vous avez vaincu Ghisarma");
				spriteFafnir.style.display = "none";
			}

			tourPenelo = true;
		}
		btn_retour_Penelo.onclick = function()
		{
			btn_attaquer_Penelo.style.display = "block";
			btn_special_Penelo.style.display = "block";
			btn_parer_Penelo.style.display = "block";
			btn_repos_Penelo.style.display = "block";

			btn_targetFafnir_Penelo.style.display = "none";
			btn_targetLucia_Penelo.style.display = "none";
			btn_targetGhisarma_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";
		}
	} 


	btn_special_Penelo.onclick = function SPCpenelo()
	{
		btn_attaquer_Penelo.style.display = "none";
		btn_special_Penelo.style.display = "none";
		btn_parer_Penelo.style.display = "none";
		btn_repos_Penelo.style.display = "none";

		btn_targetAsh_Penelo.style.display = "block";
		btn_targetPenelo_Penelo.style.display = "block";
		btn_targetDarwin_Penelo.style.display = "block";
		btn_targetViviane_Penelo.style.display = "block";
		btn_retour_Penelo.style.display = "block";

		btn_targetAsh_Penelo.onclick = function()
		{
			PVash = PVash + 40;
			MANApenelo = MANApenelo -20;

			btn_targetAsh_Penelo.style.display = "none";
			btn_targetPenelo_Penelo.style.display = "none";
			btn_targetDarwin_Penelo.style.display = "none";
			btn_targetViviane_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";

			tourPenelo = true;

		}
		btn_targetPenelo_Penelo.onclick = function()
		{
			PVpenelo = PVpenelo + 40;
			MANApenelo = MANApenelo -20;

			btn_targetAsh_Penelo.style.display = "none";
			btn_targetPenelo_Penelo.style.display = "none";
			btn_targetDarwin_Penelo.style.display = "none";
			btn_targetViviane_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";

			tourPenelo = true;
		}
		btn_targetDarwin_Penelo.onclick = function()
		{
			PVdarwin = PVdarwin + 40;
			MANApenelo = MANApenelo -20;

			btn_targetAsh_Penelo.style.display = "none";
			btn_targetPenelo_Penelo.style.display = "none";
			btn_targetDarwin_Penelo.style.display = "none";
			btn_targetViviane_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";

			tourPenelo = true;
		}
		btn_targetViviane_Penelo.onclick = function()
		{
			PVviviane = PVviviane + 40;
			MANApenelo = MANApenelo -20;

			btn_targetAsh_Penelo.style.display = "none";
			btn_targetPenelo_Penelo.style.display = "none";
			btn_targetDarwin_Penelo.style.display = "none";
			btn_targetViviane_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";


			tourPenelo = true;
		}
		btn_retour_Penelo.onclick = function()
		{
			btn_attaquer_Penelo.style.display = "block";
			btn_special_Penelo.style.display = "block";
			btn_parer_Penelo.style.display = "block";
			btn_repos_Penelo.style.display = "block";

			btn_targetAsh_Penelo.style.display = "none";
			btn_targetPenelo_Penelo.style.display = "none";
			btn_targetDarwin_Penelo.style.display = "none";
			btn_targetViviane_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";

			
		}
	} 


	btn_parer_Penelo.onclick = function PARpenelo()
	{
		btn_attaquer_Penelo.style.display = "none";
		btn_special_Penelo.style.display = "none";
		btn_parer_Penelo.style.display = "none";
		btn_repos_Penelo.style.display = "none";

		btn_confirmer_Penelo.style.display = "block";
		btn_retour_Penelo.style.display = "block";

		btn_confirmer_Penelo.onclick = function()
		{
			PeneloPare = true;

			btn_confirmer_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";

			tourPenelo = true;
		}

		btn_retour_Penelo.onclick = function()
		{
			btn_attaquer_Penelo.style.display = "block";
			btn_special_Penelo.style.display = "block";
			btn_parer_Penelo.style.display = "block";
			btn_repos_Penelo.style.display = "block";

			btn_targetFafnir_Penelo.style.display = "none";
			btn_targetLucia_Penelo.style.display = "none";
			btn_targetGhisarma_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";
			btn_confirmer_Penelo.style.display = "none";
		}
	} 


	btn_repos_Penelo.onclick = function REPpenelo()
	{
		btn_attaquer_Penelo.style.display = "none";
		btn_special_Penelo.style.display = "none";
		btn_parer_Penelo.style.display = "none";
		btn_repos_Penelo.style.display = "none";

		btn_confirmer_Penelo.style.display = "block";
		btn_retour_Penelo.style.display = "block";

		btn_confirmer_Penelo.onclick = function()
		{
			PVpenelo = PVpenelo + 10;

			btn_confirmer_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";

			tourPenelo = true;
		}
		btn_retour_Penelo.onclick = function()
		{
			btn_attaquer_Penelo.style.display = "block";
			btn_special_Penelo.style.display = "block";
			btn_parer_Penelo.style.display = "block";
			btn_repos_Penelo.style.display = "block";

			btn_targetFafnir_Penelo.style.display = "none";
			btn_targetLucia_Penelo.style.display = "none";
			btn_targetGhisarma_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";
			btn_confirmer_Penelo.style.display = "none";
		}
	} 

	

	/* ----------------------- FIN PENELO --------------------------------*/

	/* ----------------------- DARWIN --------------------------------*/

	btn_attaquer_Darwin.onclick = function ATKdarwin()
	{
		btn_attaquer_Darwin.style.display = "none";
		btn_special_Darwin.style.display = "none";
		btn_parer_Darwin.style.display = "none";
		btn_repos_Darwin.style.display = "none";

		btn_targetFafnir_Darwin.style.display = "block";
		btn_targetLucia_Darwin.style.display = "block";
		btn_targetGhisarma_Darwin.style.display = "block";
		btn_retour_Darwin.style.display = "block";

		btn_targetFafnir_Darwin.onclick = function()
		{
			PVfafnir = PVfafnir - 35;
			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";

			PVFafnir.innerHTML = PVfafnir + "/250";

			if (PVfafnir <= 0)
			{
				alert("Vous avez vaincu Fafnir");
				spriteFafnir.style.display = "none";
			}

			tourDarwin = true;
			alert(tourDarwin);

		}
		btn_targetLucia_Darwin.onclick = function()
		{
			PVlucia = PVlucia - 35;
			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";

			PVLucia.innerHTML = PVlucia + "/400"

			if (PVlucia <= 0)
			{
				alert("Vous avez vaincu Lucia");
				spriteFafnir.style.display = "none";
			}

			tourDarwin = true;
		}
		btn_targetGhisarma_Darwin.onclick = function()
		{
			PVghisarma = PVghisarma - 35;
			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";

			PVGhisarma.innerHTML = PVghisarma + "/340";

			if (PVghisarma <= 0)
			{
				alert("Vous avez vaincu Ghisarma");
				spriteFafnir.style.display = "none";
			}

			tourDarwin = true;
		}
		btn_retour_Darwin.onclick = function()
		{
			btn_attaquer_Darwin.style.display = "block";
			btn_special_Darwin.style.display = "block";
			btn_parer_Darwin.style.display = "block";
			btn_repos_Darwin.style.display = "block";

			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";
		}
	} 


	btn_special_Darwin.onclick = function SPCdarwin()
	{
		btn_attaquer_Darwin.style.display = "none";
		btn_special_Darwin.style.display = "none";
		btn_parer_Darwin.style.display = "none";
		btn_repos_Darwin.style.display = "none";

		btn_targetFafnir_Darwin.style.display = "block";
		btn_targetLucia_Darwin.style.display = "block";
		btn_targetGhisarma_Darwin.style.display = "block";
		btn_retour_Darwin.style.display = "block";

		btn_targetFafnir_Darwin.onclick = function()
		{
			PVfafnir = PVfafnir - 80;
			MANAdarwin = MANAdarwin -20;

			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";

			PVFafnir.innerHTML = PVfafnir + "/250";

			if (PVfafnir <= 0)
			{
				alert("Vous avez vaincu Fafnir");
				spriteFafnir.style.display = "none";
			}

			tourDarwin = true;
			
		}
		btn_targetLucia_Darwin.onclick = function()
		{
			PVlucia = PVlucia - 80;
			MANAdarwin = MANAdarwin -20;

			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";

			PVLucia.innerHTML = PVlucia + "/400"

			if (PVlucia <= 0)
			{
				alert("Vous avez vaincu Lucia");
				spriteFafnir.style.display = "none";
			}

			tourDarwin = true;
		}
		btn_targetGhisarma_Darwin.onclick = function()
		{
			PVghisarma = PVghisarma - 80;
			MANAdarwin = MANAdarwin -20;
			
			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";

			PVGhisarma.innerHTML = PVghisarma + "/340";

			if (PVghisarma <= 0)
			{
				alert("Vous avez vaincu Ghisarma");
				spriteFafnir.style.display = "none";
			}

			tourDarwin = true;
		}
		btn_retour_Darwin.onclick = function()
		{
			btn_attaquer_Darwin.style.display = "block";
			btn_special_Darwin.style.display = "block";
			btn_parer_Darwin.style.display = "block";
			btn_repos_Darwin.style.display = "block";

			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";
		}
	} 


	btn_parer_Darwin.onclick = function PARdarwin()
	{
		btn_attaquer_Darwin.style.display = "none";
		btn_special_Darwin.style.display = "none";
		btn_parer_Darwin.style.display = "none";
		btn_repos_Darwin.style.display = "none";

		btn_confirmer_Darwin.style.display = "block";
		btn_retour_Darwin.style.display = "block";

		btn_confirmer_Darwin.onclick = function()
		{
			DarwinPare = true;

			btn_confirmer_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";

			

			tourDarwin = true;
		}

		btn_retour_Darwin.onclick = function()
		{
			btn_attaquer_Darwin.style.display = "block";
			btn_special_Darwin.style.display = "block";
			btn_parer_Darwin.style.display = "block";
			btn_repos_Darwin.style.display = "block";

			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";
			btn_confirmer_Darwin.style.display = "none";
		}
	} 


	btn_repos_Darwin.onclick = function REPdarwin()
	{
		btn_attaquer_Darwin.style.display = "none";
		btn_special_Darwin.style.display = "none";
		btn_parer_Darwin.style.display = "none";
		btn_repos_Darwin.style.display = "none";

		btn_confirmer_Darwin.style.display = "block";
		btn_retour_Darwin.style.display = "block";

		btn_confirmer_Darwin.onclick = function()
		{
			PVdarwin = PVdarwin + 10;

			btn_confirmer_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";

			tourDarwin = true;
		}
		btn_retour_Darwin.onclick = function()
		{
			btn_attaquer_Darwin.style.display = "block";
			btn_special_Darwin.style.display = "block";
			btn_parer_Darwin.style.display = "block";
			btn_repos_Darwin.style.display = "block";

			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";
			btn_confirmer_Darwin.style.display = "none";
		}
	} 

	

	/* ----------------------- FIN DARWIN --------------------------------*/

	/* ----------------------- VIVIANE --------------------------------*/

	btn_attaquer_Viviane.onclick = function ATKviviane()
	{
		
		btn_attaquer_Viviane.style.display = "none";
		btn_special_Viviane.style.display = "none";
		btn_parer_Viviane.style.display = "none";
		btn_repos_Viviane.style.display = "none";

		btn_targetFafnir_Viviane.style.display = "block";
		btn_targetLucia_Viviane.style.display = "block";
		btn_targetGhisarma_Viviane.style.display = "block";
		btn_retour_Viviane.style.display = "block";

		btn_targetFafnir_Viviane.onclick = function()
		{
			PVfafnir = PVfafnir - 15;
			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";

			PVFafnir.innerHTML = PVfafnir + "/250";

			
			if (PVfafnir <= 0)
			{
				alert("Vous avez vaincu Fafnir");
				spriteFafnir.style.display = "none";
			}

			tourViviane = true;
			alert(tourViviane);
			
		}
		btn_targetLucia_Viviane.onclick = function()
		{
			PVlucia = PVlucia - 15;
			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";

			PVLucia.innerHTML = PVlucia + "/400"


			if (PVlucia <= 0)
			{
				alert("Vous avez vaincu Lucia");
				spriteFafnir.style.display = "none";
			}


			tourViviane = true;
		}
		btn_targetGhisarma_Viviane.onclick = function()
		{
			PVghisarma = PVghisarma - 15;
			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";

			PVGhisarma.innerHTML = PVghisarma + "/340";

			if (PVghisarma <= 0)
			{
				alert("Vous avez vaincu Ghisarma");
				spriteFafnir.style.display = "none";
			}

			tourViviane = true;
		}
		btn_retour_Viviane.onclick = function()
		{
			btn_attaquer_Viviane.style.display = "block";
			btn_special_Viviane.style.display = "block";
			btn_parer_Viviane.style.display = "block";
			btn_repos_Viviane.style.display = "block";

			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";
		}
	} 


	btn_special_Viviane.onclick = function SPCviviane()
	{
		btn_attaquer_Viviane.style.display = "none";
		btn_special_Viviane.style.display = "none";
		btn_parer_Viviane.style.display = "none";
		btn_repos_Viviane.style.display = "none";

		btn_targetFafnir_Viviane.style.display = "block";
		btn_targetLucia_Viviane.style.display = "block";
		btn_targetGhisarma_Viviane.style.display = "block";
		btn_retour_Viviane.style.display = "block";

		btn_targetFafnir_Viviane.onclick = function()
		{
			
			MANAviviane = MANAviviane -35;
			tourPoisonFafnir = 3;

			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";

			tourViviane = true;

		}
		btn_targetLucia_Viviane.onclick = function()
		{
			
			MANAviviane = MANAviviane -35;
			tourPoisonLucia = 3;

			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";

			tourViviane = true;
		}
		btn_targetGhisarma_Viviane.onclick = function()
		{
			
			MANAviviane = MANAviviane -35;
			tourPoisonGhisarma = 3;
			
			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";

			tourViviane = true;
		}
		btn_retour_Viviane.onclick = function()
		{
			btn_attaquer_Viviane.style.display = "block";
			btn_special_Viviane.style.display = "block";
			btn_parer_Viviane.style.display = "block";
			btn_repos_Viviane.style.display = "block";

			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";
		}
	} 


	btn_parer_Viviane.onclick = function PARviviane()
	{
		btn_attaquer_Viviane.style.display = "none";
		btn_special_Viviane.style.display = "none";
		btn_parer_Viviane.style.display = "none";
		btn_repos_Viviane.style.display = "none";

		btn_confirmer_Viviane.style.display = "block";
		btn_retour_Viviane.style.display = "block";

		btn_confirmer_Viviane.onclick = function()
		{
			VivianePare = true;

			btn_confirmer_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";

			tourViviane = true;
		}

		btn_retour_Viviane.onclick = function()
		{
			btn_attaquer_Viviane.style.display = "block";
			btn_special_Viviane.style.display = "block";
			btn_parer_Viviane.style.display = "block";
			btn_repos_Viviane.style.display = "block";

			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";
			btn_confirmer_Viviane.style.display = "none";
		}
	} 


	btn_repos_Viviane.onclick = function REPviviane()
	{
		btn_attaquer_Viviane.style.display = "none";
		btn_special_Viviane.style.display = "none";
		btn_parer_Viviane.style.display = "none";
		btn_repos_Viviane.style.display = "none";

		btn_confirmer_Viviane.style.display = "block";
		btn_retour_Viviane.style.display = "block";

		btn_confirmer_Viviane.onclick = function()
		{
			PVviviane = PVviviane + 10;

			btn_confirmer_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";

			tourViviane = true;
		}
		btn_retour_Viviane.onclick = function()
		{
			btn_attaquer_Viviane.style.display = "block";
			btn_special_Viviane.style.display = "block";
			btn_parer_Viviane.style.display = "block";
			btn_repos_Viviane.style.display = "block";

			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";
			btn_confirmer_Viviane.style.display = "none";
		}
	} 

	/* ----------------------- FIN VIVIANE --------------------------------*/



	/* ----------------------- FAFNIR --------------------------------*/

	function AttaqueFafnir()
	{
		randomFafnir =  Math.floor(Math.random() * 4);
		if(randomFafnir == 1)
		{
			if(AshPare == true)
			{
				PVash = PVash - ATKfafnir/2;
			}
			else
			{
				PVash = PVash - ATKfafnir;
			}
			PV_ash.innerHTML = PVash + "/300";
			if (PVash <= 0)
			{
				alert("Ash est mort");
				spriteAsh.style.display = "none";
			}
		}
		if(randomFafnir == 2)
		{
			if(PeneloPare == true)
			{
				PVpenelo = PVpenelo - ATKfafnir/2;
			}
			else
			{
				PVpenelo = PVpenelo - ATKfafnir;
			}
			PV_penelo.innerHTML = PVpenelo + "/300";
			if (PVpenelo <= 0)
			{
				alert("Penelo est morte");
				spritePenelo.style.display = "none";
			}
		}
		if(randomFafnir == 3)
		{
			if(DarwinPare == true)
			{
				PVdarwin = PVdarwin - ATKfafnir/2;
			}
			else
			{
				PVdarwin = PVdarwin - ATKfafnir;
			}
			PV_darwin.innerHTML = PVdarwin + "/300";
			if (PVdarwin <= 0)
			{
				alert("Darwin est mort");
				spriteDarwin.style.display = "none";
			}
		}
		if(randomFafnir == 0)
		{
			if(VivianePare == true)
			{
				PVviviane = PVviviane - ATKfafnir/2;
			}
			else
			{
				PVviviane = PVviviane - ATKfafnir;
			}
			PV_viviane.innerHTML = PVviviane + "/300";
			if (PVviviane <= 0)
			{
				alert("Viviane est morte");
				spriteViviane.style.display = "none";
			}
		}



		
	}
	
	/* ----------------------- FIN FAFNIR --------------------------------*/
		/* ----------------------- LUCIA --------------------------------*/

	function AttaqueLucia()
	{
		randomLucia =  Math.floor(Math.random() * 4);
		if(randomLucia == 1)
		{
			if(AshPare == true)
			{
				PVash = PVash - ATKlucia/2;
			}
			else
			{
				PVash = PVash - ATKlucia;
			}
			PV_ash.innerHTML = PVash + "/300";
			if (PVash <= 0)
			{
				alert("Ash est mort");
				spriteAsh.style.display = "none";
			}
		}
		if(randomLucia == 2)
		{
			if(PeneloPare == true)
			{
				PVpenelo = PVpenelo - ATKlucia/2;
			}
			else
			{
				PVpenelo = PVpenelo - ATKlucia;
			}
			PV_penelo.innerHTML = PVpenelo + "/300";
			if (PVpenelo <= 0)
			{
				alert("Penelo est morte");
				spritePenelo.style.display = "none";
			}
		}
		if(randomLucia == 3)
		{
			if(DarwinPare == true)
			{
				PVdarwin = PVdarwin - ATKlucia/2;
			}
			else
			{
				PVdarwin = PVdarwin - ATKlucia;
			}
			PV_darwin.innerHTML = PVdarwin + "/300";
			if (PVdarwin <= 0)
			{
				alert("Darwin est mort");
				spriteDarwin.style.display = "none";
			}
		}
		if(randomLucia == 0)
		{
			if(VivianePare == true)
			{
				PVviviane = PVviviane - ATKlucia/2;
			}
			else
			{
				PVviviane = PVviviane - ATKlucia;
			}
			PV_viviane.innerHTML = PVviviane + "/300";
			if (PVviviane <= 0)
			{
				alert("Viviane est morte");
				spriteViviane.style.display = "none";
			}
		}
	
			
	}
		
		/* ----------------------- FIN LUCIA --------------------------------*/
			/* ----------------------- GHISARMA --------------------------------*/

	function AttaqueGhisarma()
	{
		randomGhisarma =  Math.floor(Math.random() * 4);
		if(randomGhisarma == 1)
		{
			if(AshPare == true)
			{
				PVash = PVash - ATKghisarma/2;
			}
			else
			{
				PVash = PVash - ATKghisarma;
			}
			PV_ash.innerHTML = PVash + "/300";
			if (PVash <= 0)
			{
				alert("Ash est mort");
				spriteAsh.style.display = "none";
			}
		}
		if(randomGhisarma == 2)
		{
			if(PeneloPare == true)
			{
				PVpenelo = PVpenelo - ATKghisarma/2;
			}
			else
			{
				PVpenelo = PVpenelo - ATKghisarma;
			}
			PV_penelo.innerHTML = PVpenelo + "/300";
			if (PVpenelo <= 0)
			{
				alert("Penelo est morte");
				spritePenelo.style.display = "none";
			}
		}
		if(randomGhisarma == 3)
		{
			if(DarwinPare == true)
			{
				PVdarwin = PVdarwin - ATKghisarma/2;
			}
			else
			{
				PVdarwin = PVdarwin - ATKghisarma;
			}
			PV_darwin.innerHTML = PVdarwin + "/300";
			if (PVdarwin <= 0)
			{
				alert("Darwin est mort");
				spriteDarwin.style.display = "none";
			}
		}
		if(randomGhisarma == 0)
		{
			if(VivianePare == true)
			{
				PVviviane = PVviviane - ATKghisarma/2;
			}
			else
			{
				PVviviane = PVviviane - ATKghisarma;
			}
			PV_viviane.innerHTML = PVviviane + "/300";
			if (PVviviane <= 0)
			{
				alert("Viviane est morte");
				spriteViviane.style.display = "none";
			}
		}

		
	}
	
	/* ----------------------- FIN GHISARMA --------------------------------*/

	
	while((PVash>0 | PVpenelo>0 | PVdarwin>0 | PVviviane>0) & (PVFafnir>0 | PVLucia>0 | PVghisarma>0))
	{
		if(tourAsh == false & tourPenelo == false & tourDarwin == false & tourViviane == false)
		{
			if(PVash > 0)
			{
				btn_attaquer_Ash.style.display = "block";
				btn_special_Ash.style.display = "block";
				btn_parer_Ash.style.display = "block";
				btn_repos_Ash.style.display = "block";
			}
			if(PVpenelo > 0)
			{
				btn_attaquer_Penelo.style.display = "block";
				btn_special_Penelo.style.display = "block";
				btn_parer_Penelo.style.display = "block";
				btn_repos_Penelo.style.display = "block";
			}
			if(PVdarwin > 0)
			{
				btn_attaquer_Darwin.style.display = "block";
				btn_special_Darwin.style.display = "block";
				btn_parer_Darwin.style.display = "block";
				btn_repos_Darwin.style.display = "block";
			}
			if(PVviviane > 0)
			{
				btn_attaquer_Viviane.style.display = "block";
				btn_special_Viviane.style.display = "block";
				btn_parer_Viviane.style.display = "block";
				btn_repos_Viviane.style.display = "block";
			}

			ATKash();
			SPCash();
			PARash();
			REPash();
	
			ATKpenelo();
			SPCpenelo();
			PARpenelo();
			REPpenelo();
	
			ATKdarwin();
			SPCdarwin();
			PARdarwin();
			REPdarwin();
	
			ATKviviane();
			SPCviviane();
			PARviviane();
			REPviviane();
			
			
			alert(tourAsh); 
			alert(tourDarwin); 
			alert(tourPenelo);
			alert(tourViviane);
		}
	
		alert("est ce que j'en sors direct ?")
		alert(tourAsh)
	
		if(tourAsh == true & tourPenelo == true & tourDarwin == true & tourViviane == true)
		{
			AttaqueFafnir();
			AttaqueLucia();
			AttaqueGhisarma();
			
			tourAsh = false
			tourPenelo = false
			tourDarwin = false
			tourViviane = false
		}
		if(tourPoisonFafnir >0)
		{
			PVfafnir = PVfafnir -25;
			tourPoisonFafnir = tourPoisonFafnir-1;
			PVFafnir.innerHTML = PVfafnir + "/250";
			
			if (PVfafnir <= 0)
			{
				alert("Fafnir a succombé au poison et est vaincu");
				spriteFafnir.style.display = "none";
			}

		}
		if(tourPoisonLucia >0)
		{
			PVlucia = PVlucia -25;
			tourPoisonLucia = tourPoisonLucia-1;
			PVlucia.innerHTML = PVlucia + "/250";
			
			if (PVlucia <= 0)
			{
				alert("Lucia a succombé au poison et est vaincu");
				spriteLucia.style.display = "none";
			}

		}
		if(tourPoisonGhisarma >0)
		{
			PVghisarma = PVghisarma -25;
			tourPoisonGhisarma = tourPoisonGhisarma-1;
			PVghisarma.innerHTML = PVghisarma + "/250";
			
			if (PVghisarma <= 0)
			{
				alert("Ghisarma a succombé au poison et est vaincu");
				spriteGhisarma.style.display = "none";
			}

		}

		
	}
	if(PVash==0 & PVpenelo==0 & PVdarwin==0 & PVviviane==0)
	{
		alert("YOU LOOSE");
	}
	if(PVfafnir==0 & PVlucia==0 & PVghisarma==0 )
	{
		alert("YOU WIN");
	}




	
	