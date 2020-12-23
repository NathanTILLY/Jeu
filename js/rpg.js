var PVfafnir = 250;
var ATKfafnir = 25;

var PVghisarma = 340;
var ATKghisarma = 10;


var PVlucia = 400;
var ATKlucia = 20;

var PVash = 300;
var MANAash = 50;
var AshPare = false;

var PVpenelo = 100;
var MANApenelo = 110;

var PVdarwin = 150;
var MANAdarwin = 40;

var PVviviane = 120;
var MANAviviane = 150;

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
/*}

/if(PVash==0 & PVpenelo==0 & PVdarwin==0 & PVviviane==0)
{

}
*/



	
	