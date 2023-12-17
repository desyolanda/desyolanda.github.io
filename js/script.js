// document.getElementsByClassName("tablinks").onclick = function() {
//     document.getElementsByClassName("grid-container").style.visibility = "visible";
// }
//
// function show() {
//     document.querySelectorAll('img').style.visibility = 'visible';
// }


// Tab Contents
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].style.visibility = "visible";

  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";




}

////////////////////////////////////RANDOM IMAGES
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomOrder = function(element) {

    // Viewport Dimensions
    var vpHeight = window.innerHeight;
    var vpWidth = window.innerWidth;

    // Image Position
    var xPos = getRandomInt(0, vpWidth - element.offsetWidth);
    var yPos = getRandomInt(0, vpHeight - element.offsetHeight);
    var zIndex = getRandomInt(0,13);

 element.style.cssText += '--x-position:' + xPos + 'px; --y-position:' + yPos + 'px; z-index:' + zIndex;
};

var imgs = [...document.querySelectorAll('img')]
  .filter(elm => !elm.closest('[footerImg]'));


  // var imgs = document.querySelectorAll('img');
imgs.forEach((the_img) => {

  $('.tablinks').mouseover(function(evt, cityName) {
    randomOrder(the_img);
  });

}); //end foreach

var getRandomScale = Math.floor(Math.random() / 5);

var img = document.querySelectorAll("img");

 function randomWidth() {
  return img.width * getRandomScale;
}



//Overlay
// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }
//
// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }





////////////////////////////////TOP BUTTON
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
