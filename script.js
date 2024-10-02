function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const galleryImages = document.querySelectorAll('.gallery__img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index; // Set current index
        showLightbox(image.src);
    });
});

function showLightbox(src) {
    lightbox.style.display = 'flex';
    lightboxImg.src = src; // Set lightbox image src to clicked image src
    lightboxImg.classList.remove('enlarged'); // Reset enlargement
}

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox.style.display = 'none';
    lightboxImg.classList.remove('enlarged'); // Reset enlargement on close
});

lightboxImg.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing when clicking on the image
    lightboxImg.classList.toggle('enlarged'); // Toggle enlarged state
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Close on background click
    lightboxImg.classList.remove('enlarged'); // Reset enlargement on close
});



