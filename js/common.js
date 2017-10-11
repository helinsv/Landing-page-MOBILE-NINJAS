function randomNumber(m,n){
	m = parseInt(m);
	n = parseInt(n);
	return Math.floor( Math.random() * (n - m + 1) ) + m;
};

var aspmA = randomNumber(1,5); 
var aspmB = randomNumber(1,5); 
var sumAB = aspmA + aspmB;  
document.getElementById('capcha').placeholder = aspmA + ' + ' + aspmB + ' = ';   

$(document).ready(function(){
	$.validator.methods.equal = function(value, element, param) {
		return value == param;
	};

	$(".send").validate({

		rules:{

			name:{
				required: true,
				minlength: 4,               
			},


			message:{
				required: true,
				minlength: 4,               
			},


			email:{
				required: true,
				email: true,               
			},

			capcha:{
				required: true,
				number: true,
				equal: sumAB,
			},
		},

		messages:{

			name:{
				required: "This field is required.",
				minlength: "Please enter at least 4 characters.",
			},

			message:{
				required: "This field is required.",
				minlength: "Please enter at least 4 characters.",
			},

			capcha:{
				required: "This field is required.",            		
				equal: 'Please enter valid number',
			},

			email: "Please enter a valid email address",
		}
	});

	function CheckForm() {
		var requiredField = $(".send").children("[required=required]"); 
		for (var i = 0; i < requiredField.length; i++) { 
			if ($(requiredField[i]).val() == '') { 
				alert("This field is required"); 
				return false; 
			}
		}
		return true; 
	}

//E-mail Ajax Send
$(".send").submit(function() {
	if (CheckForm()){ 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
	}
	return false;
	alert("This field is required");
});


$('.btn-toggle').click(function(){
	$('.top-menu ').slideToggle(300, function(){
		if ($(this).css('display')==='none'){
			$(this).removeAttr('style');
		}});	
})

$(".team .items-app").owlCarousel({
	center: true,
	items:3,
	loop: true, 
	autoWidth:true,
	merge:true,
	responsive:{
		0:{
			items:1,
		},
		600:{
			items:2,
		},
		1000:{
			items:3,
			autoWidth: false
		}
	}
});

$(".contacts-slides").owlCarousel({
	center: true,
	items:1,
	loop: true,
    merge:true, 
    dots: true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]	
  });



$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
		$('#up').fadeIn();
	} else {
		$('#up').fadeOut();
	}
});

$("#up").click(function (){
	$('html, body').animate({
		scrollTop: $(".logo").offset().top
	}, 2000);
});

$("#menu").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
});

$(".footer-menu").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
});

});



/*
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

$(".top-description h1").animated("fadeInDown", "fadeOut");
	$('#fgfg').addClass('animated infinite bounceIn');

	$('.btn-green').click(function() { 
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$('#name').addClass('animated bounceIn').one(animationEnd, function() {
			$(this).removeClass('animated bounceIn');
		});
		return this;
	});




 https://github.com/flesler/jquery.scrollTo
 $("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
*/