window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function myiframeshow(){
            var targetElement;
            targetElement = document.getElementById("myiframe") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }
function myiframeshow1(){
            var targetElement;
            targetElement = document.getElementById("ninja") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }

function myiframeshow2(){
            var targetElement;
            targetElement = document.getElementById("plus") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }
function myiframeshow3(){
            var targetElement;
            targetElement = document.getElementById("coucou") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }
function myiframeshow4(){
            var targetElement;
            targetElement = document.getElementById("converti") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }
function myiframeshow5(){
            var targetElement;
            targetElement = document.getElementById("hide") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }
function myiframeshow6(){
            var targetElement;
            targetElement = document.getElementById("formu") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }

function myiframeshow7(){
            var targetElement;
            targetElement = document.getElementById("temp1") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }
function myiframeshow8(){
            var targetElement;
            targetElement = document.getElementById("chats") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }
function myiframeshow9(){
            var targetElement;
            targetElement = document.getElementById("wordpress1") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }
function myiframeshow10(){
            var targetElement;
            targetElement = document.getElementById("miniblog") ;
            if (targetElement.style.display == "none")
            {
            targetElement.style.display = "" ;
            } else {
            targetElement.style.display = "none" ;
            }
            }

            // Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-blue";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-blue", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
