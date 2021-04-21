// Navbar Sticky

//When the user scrolls the pageXOffset, excute myFunction
window.onscroll = function(){
     myFunction()
};

//Get the navbar
var navbar = document.getElementById("navbar");

//Get the offset position of the navbar
var Sticky = navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset >= Sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
}
//Nav Sticky End

//Smooth Scrolling Start
$(document) .ready(function(){
    //add smooth scrolling to all links
    $("a") .on('click', function(event){

// make sure this.hash has a value before overriging default behavior
if (this.hash !=="") {
    
    //prevent default anchor click behavior
    event.preventDefault();

    //sore hash
    var hash = this.hash;

    //usingjquery

    $('html, body').animate({
        scrollTop: $(hash). offset().top
    }, 800, function(){

        //add hash
        window.location.hash = hash;
    });
    
}//
    });
});

//Smooth Scrolling End