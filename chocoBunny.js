$(function(){
	$('.menu').on('mousemove', function(){
		$(".theMenu").show();
	});
	$('.menu').on('mouseleave', function(){
		$(".theMenu").hide();
	});
	$('#contacts').on('click', function(){
		document.location.href = "contacts.html";
	});
	$('#extLash').on('click', function(){
		document.location.href = "extLash.html";
	});
	$('#lamLash').on('click', function(){
		document.location.href = "lamLash.html";
	});
	$('#pedicure').on('click', function(){
		document.location.href = "pedicure.html";
	});
	$('#manicure').on('click', function(){
		document.location.href = "manicure.html";
	});
	$('#brow').on('click', function(){
		document.location.href = "brow.html";
	});
	$('#sun').on('click', function(){
		document.location.href = "sun.html";
	});
});