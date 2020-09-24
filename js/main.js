
function main() {

(function () {
   'use strict';

	// Hide .navbar first
	$(".navbar").hide();
	
	// Fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 200) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});
	
	// Preloader */
	  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 

   // Page scroll
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	/*$(document).ready(function() {
  	    $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

      });*/
      
      document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();

	var name = getValues('name');
	var phonenumber = getValues('phonenumber');
	var message = getValues('message');
	var email = getValues('email');

	ab3ith(name,phonenumber,message,email);

        document.getElementById('contactForm').reset();	
        
        if ((name==name) && (phonenumber==phonenumber) && (message==message) && (email==email) ){
            swal("Bravo!", "Merci pour votre aide!", "success") ;
        } 
        else{
            swal ( "Oops" ,  "Something went wrong!" ,  "error" )
        }
}


function getValues(id){return document.getElementById(id).value;}

var feedbacks = firebase.database().ref('feedbacks');

function ab3ith(name,phonenumber,message,email){
	var feedback = feedbacks.push();
	feedback.set({
		travailleur: name,
		tel: phonenumber ,
		message: message,
		email: email
	});
}
/*var auth = firebase.auth();

var logOut=document.getElementById('outBtn');

    logOut.addEventListener('click', e=>{
        window.location.href="index.html";
        auth.signOut();
    
    alert.style.display = "none";
})
    
auth.onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){ logOut.classList.remove('hide'); }
    else{ logOut.classList.add('hide')}
}) ;*/

//counter box
jQuery('.counter').counterUp({
    delay: 10,
    time: 2000
});
  
   

  	/*Portfolio Isotope Filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    }); */
    
    

 


  // jQuery Parallax
  function initParallax() {
    $('#intro').parallax("100%", 0.3);
    $('#services').parallax("100%", 0.3);
    $('#aboutimg').parallax("100%", 0.3);	
    $('#testimonials').parallax("100%", 0.1);

  }
  initParallax();

  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());

}
main();
