$(document).ready(function()
 {
	$('.mascaraFone').mask('(99) 9 9999-9999');
}
);

function enviar()
{
	var nome = document.getElementById("nome");
	var cidade = document.getElementById("cidade");
	var uf = document.getElementById("uf");
	var email = document.getElementById("email");
	var fone = document.getElementById("fone");

	if (nome.value=="")
	{
		alert("Preencha seu Nome!")
		nome.focus()
	}

}
