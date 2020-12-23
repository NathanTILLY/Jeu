var PVfafnir = 250;
var ATKfafnir = 25;
var tourPoisonFafnir = 0;

var PVghisarma = 340;
var ATKghisarma = 10;
var tourPoisonGhisarma = 0;

var PVlucia = 400;
var ATKlucia = 20;
var tourPoisonLucia = 0;

var PVash = 300;
var MANAash = 50;
var AshPare = false;

var PVpenelo = 100;
var MANApenelo = 110;
var PeneloPare = false;

var PVdarwin = 150;
var MANAdarwin = 40;
var DarwinPare = false;

var PVviviane = 120;
var MANAviviane = 150;
var VivianePare = false;

function afficher_aide(aide) {
	if (aide.style.display == "none") aide.style.display = "block";
	else aide.style.display = "none";
}

var btn_attaquer_ash = document.getElementById(btn_attaquer_Ash);
var btn_special_ash = document.getElementById(btn_special_Ash);
var btn_parer_ash = document.getElementById(btn_parer_Ash);
var btn_repos_ash = document.getElementById(btn_repos_Ash);

var btn_attaquer_penelo = document.getElementById(btn_attaquer_Penelo);
var btn_special_penelo = document.getElementById(btn_special_Penelo);
var btn_parer_penelo = document.getElementById(btn_parer_Penelo);
var btn_repos_penelo = document.getElementById(btn_repos_Penelo);

var btn_attaquer_darwin = document.getElementById(btn_attaquer_Darwin);
var btn_special_darwin = document.getElementById(btn_special_Darwin);
var btn_parer_darwin = document.getElementById(btn_parer_Darwin);
var btn_repos_darwin = document.getElementById(btn_repos_Darwin);

var btn_attaquer_viviane = document.getElementById(btn_attaquer_Viviane);
var btn_special_viviane = document.getElementById(btn_special_Viviane);
var btn_parer_viviane = document.getElementById(btn_parer_Viviane);
var btn_repos_viviane = document.getElementById(btn_repos_Viviane);


/*while((PVlucia>0 | PVghisarma>0 | PVfafnir>0) & (PVash>0 | PVpenelo>0 | PVdarwin>0 | PVviviane>0) )
{*/

/* ----------------------- ASH -------------------------------*/ 

	btn_attaquer_Ash.onclick = function()
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

		}
		btn_targetLucia_Ash.onclick = function()
		{
			PVlucia = PVlucia - 30;
			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";
		}
		btn_targetGhisarma_Ash.onclick = function()
		{
			PVghisarma = PVghisarma - 30;
			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";
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


	btn_special_Ash.onclick = function()
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

		}
		btn_targetLucia_Ash.onclick = function()
		{
			PVlucia = PVlucia - 150;
			MANAash = MANAash -50;

			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";
		}
		btn_targetGhisarma_Ash.onclick = function()
		{
			PVghisarma = PVghisarma - 150;
			MANAash = MANAash -50;
			
			btn_targetFafnir_Ash.style.display = "none";
			btn_targetLucia_Ash.style.display = "none";
			btn_targetGhisarma_Ash.style.display = "none";
			btn_retour_Ash.style.display = "none";
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


	btn_parer_Ash.onclick = function()
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


	btn_repos_Ash.onclick = function()
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

	btn_attaquer_Penelo.onclick = function()
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

		}
		btn_targetLucia_Penelo.onclick = function()
		{
			PVlucia = PVlucia - 10;
			btn_targetFafnir_Penelo.style.display = "none";
			btn_targetLucia_Penelo.style.display = "none";
			btn_targetGhisarma_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";
		}
		btn_targetGhisarma_Penelo.onclick = function()
		{
			PVghisarma = PVghisarma - 10;
			btn_targetFafnir_Penelo.style.display = "none";
			btn_targetLucia_Penelo.style.display = "none";
			btn_targetGhisarma_Penelo.style.display = "none";
			btn_retour_Penelo.style.display = "none";
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


	btn_special_Penelo.onclick = function()
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


	btn_parer_Penelo.onclick = function()
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


	btn_repos_Penelo.onclick = function()
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

	btn_attaquer_Darwin.onclick = function()
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

		}
		btn_targetLucia_Darwin.onclick = function()
		{
			PVlucia = PVlucia - 35;
			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";
		}
		btn_targetGhisarma_Darwin.onclick = function()
		{
			PVghisarma = PVghisarma - 35;
			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";
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


	btn_special_Darwin.onclick = function()
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

		}
		btn_targetLucia_Darwin.onclick = function()
		{
			PVlucia = PVlucia - 80;
			MANAdarwin = MANAdarwin -20;

			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";
		}
		btn_targetGhisarma_Darwin.onclick = function()
		{
			PVghisarma = PVghisarma - 80;
			MANAdarwin = MANAdarwin -20;
			
			btn_targetFafnir_Darwin.style.display = "none";
			btn_targetLucia_Darwin.style.display = "none";
			btn_targetGhisarma_Darwin.style.display = "none";
			btn_retour_Darwin.style.display = "none";
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


	btn_parer_Darwin.onclick = function()
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


	btn_repos_Darwin.onclick = function()
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

	btn_attaquer_Viviane.onclick = function()
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

		}
		btn_targetLucia_Viviane.onclick = function()
		{
			PVlucia = PVlucia - 15;
			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";
		}
		btn_targetGhisarma_Viviane.onclick = function()
		{
			PVghisarma = PVghisarma - 15;
			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";
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


	btn_special_Viviane.onclick = function()
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

		}
		btn_targetLucia_Viviane.onclick = function()
		{
			
			MANAviviane = MANAviviane -35;
			tourPoisonLucia = 3;

			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";
		}
		btn_targetGhisarma_Viviane.onclick = function()
		{
			
			MANAviviane = MANAviviane -35;
			tourPoisonGhisarma = 3;
			
			btn_targetFafnir_Viviane.style.display = "none";
			btn_targetLucia_Viviane.style.display = "none";
			btn_targetGhisarma_Viviane.style.display = "none";
			btn_retour_Viviane.style.display = "none";
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


	btn_parer_Viviane.onclick = function()
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


	btn_repos_Viviane.onclick = function()
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




/*}

/if(PVash==0 & PVpenelo==0 & PVdarwin==0 & PVviviane==0)
{

}
*/



	
	