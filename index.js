function inititalizeFeature() {
  var slideIndex = 1
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