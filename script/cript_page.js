const slides = document.querySelector(".slides");
const slide = document.querySelector(".slide");
const numberOfSlides = slides.children.length;

for (let i = 0; i < numberOfSlides * 2; i++) {
  let clone = slide.cloneNode(true);
  slides.appendChild(clone);
}