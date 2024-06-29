function openMenu() {
    document.getElementById("menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeMenu() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


  function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');

    if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
        answer.style.maxHeight = '0px';
        icon.textContent = "+";
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = "-";
    }
}



  

  let currentSlide = 0;

  function moveCarousel(step) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
  
    currentSlide = (currentSlide + step + totalItems) % totalItems;
    const offset = -currentSlide * 100;
  
    carousel.style.transform = `translateX(${offset}%)`;
  }
  

  let currentProductSlide = 0;

function moveProductSlider(step) {
  const slider = document.querySelector('.product-slider');
  const items = document.querySelectorAll('.product-slider-item');
  const totalItems = items.length;

  currentProductSlide = (currentProductSlide + step + totalItems) % totalItems;
  const offset = -currentProductSlide * 100;

  slider.style.transform = `translateX(${offset}%)`;
}

