$(document).ready(function() {
	$('.mascaraData').mask('99/99/9999');
	$('.mascaraCep').mask('99999-999');
	$('.mascaraCpf').mask('999.999.999-99');

	$('.mascaraSalario').priceFormat({
		prefix: 'R$ ',
		centsSeparator: ',',
		thousandsSeparator: '.'
	});

});