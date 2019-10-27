function inititalizeFeature() {
  var slideIndex = 2
  currentSlide(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var titles = document.getElementsByClassName("title");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < titles.length; i++) {
      titles[i].className = titles[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  titles[slideIndex-1].className += " active";
  if (slideIndex == 1) {miRouteFill()}
  else if (slideIndex == 2) {miServiceFill()}
  else if (slideIndex == 3) {miCarpoolFill()}
}

function miRouteFill() {
  //change miRoute to filled
  var miRouteOutline = document.getElementById("miRouteOutline")
  if (miRouteOutline !== null) {miRouteOutline.id = "miRouteFilled"};

  //change other two to outline
  var miServiceFilled = document.getElementById("miServiceFilled")
  if (miServiceFilled !== null) {miServiceFilled.id = "miServiceOutline"};
  var miCarpoolFilled = document.getElementById("miCarpoolFilled")
  if (miCarpoolFilled !== null) {miCarpoolFilled.id = "miCarpoolOutline"};
}

function miServiceFill() {
  //change miService to filled
  var miServiceOutline = document.getElementById("miServiceOutline")
  if (miServiceOutline !== null) {miServiceOutline.id = "miServiceFilled"};

  //change other two to outline
  var miRouteFilled = document.getElementById("miRouteFilled")
  if (miRouteFilled !== null) {miRouteFilled.id = "miRouteOutline"};
  var miCarpoolFilled = document.getElementById("miCarpoolFilled")
  if (miCarpoolFilled !== null) {miCarpoolFilled.id = "miCarpoolOutline"};
}

function miCarpoolFill() {
  var miCarpoolOutline = document.getElementById("miCarpoolOutline")
  if (miCarpoolOutline !== null) {miCarpoolOutline.id = "miCarpoolFilled"};

  //change other two to outline
  var miServiceFilled = document.getElementById("miServiceFilled")
  if (miServiceFilled !== null) {miServiceFilled.id = "miServiceOutline"};
  var miRouteFilled = document.getElementById("miRouteFilled")
  if (miRouteFilled !== null) {miRouteFilled.id = "miRouteOutline"};
}

function formConfirm(){
    window.alert("Thank you for your input!");
}

function startSetTimeoutAnimation() {
  const refreshRate = 1000 / 8;
  const maxYPosition = 5;
  let object = document.getElementById("animation");
  let speedY = 1;
  let positionY = 0; 

  window.setInterval(() => {
    positionY = positionY + speedY;
    if (positionY > maxYPosition || positionY < 1) {
      speedY = speedY * (-1);
    }
    object.style.bottom = positionY + 'px';
  }, refreshRate);
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hide() {
  document.getElementById("myLinks").style.display = "none";
}