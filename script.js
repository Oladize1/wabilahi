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



window.onscroll = function() {
  const backToTopButton = document.getElementById('back-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.classList.add('show');
  } else {
      backToTopButton.classList.remove('show');
  }
};

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}


  

// const swiper = new Swiper('.mySwiper', {
//   direction: 'horizontal',
//   loop: true,
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
//   autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//   },
//   spaceBetween: 30,
//   centeredSlides: true,
// });

const products = {
  Tecno: [
      { image: 'images/image-2.jpg', title: 'TECNO T301', price: '#17,400.00' },
      { image: 'images/image-2.jpg', title: 'TECNO T302', price: '#18,400.00' },
      { image: 'images/image-3.jpg', title: 'TECNO T303', price: '#19,400.00' },
      { image: 'images/image-3.jpg', title: 'TECNO T304', price: '#20,400.00' },
      { image: 'images/image-3.jpg', title: 'TECNO T304', price: '#20,400.00' }
    ],
    Infinix: [
      { image: 'images/image-2.jpg', title: 'Infinix S1', price: '#25,400.00' },
      { image: 'images/image-3.jpg', title: 'Infinix S2', price: '#26,400.00' },
      { image: 'images/image-3.jpg', title: 'Infinix S3', price: '#27,400.00' },
      { image: 'images/image-2.jpg', title: 'Infinix S4', price: '#28,400.00' },
  ],
  iPhone: [
      { image: 'images/image-3.jpg', title: 'iPhone 12', price: '#400,000.00' },
      { image: 'images/image-3.jpg', title: 'iPhone 11', price: '#300,000.00' },
      { image: 'images/image-2.jpg', title: 'iPhone X', price: '#250,000.00' },
      { image: 'images/image-2.jpg', title: 'iPhone 8', price: '#200,000.00' },
  ],
  
};

const carouselTrack = document.querySelector('.carousel-track');
let currentSlide = 0;
let itemsToShow = 2;

function filterImages(category) {
    // Clear existing slides
    carouselTrack.innerHTML = '';

    // Add new slides based on the selected category
    products[category].forEach(product => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-item');
        slide.innerHTML = `
            <div class="product-card">
                <div class="image-wrapper">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-overlay">
                        <button class="product-add-to-cart">Add to Cart</button>
                    </div>
                </div>
                <h4>${product.title}</h4>
                <p>${product.price}</p>
            </div>
        `;
        carouselTrack.appendChild(slide);
    });

    // Reset slide position
    currentSlide = 0;
    updateCarousel();
}

function updateCarousel() {
    const slideWidth = document.querySelector('.carousel-item').clientWidth;
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function moveCarousel(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Ensure the currentSlide doesn't go out of bounds
    if (step === 1 && currentSlide < totalItems - itemsToShow) {
        currentSlide++;
    } else if (step === -1 && currentSlide > 0) {
        currentSlide--;
    }

    updateCarousel();
}

function handleResize() {
    const width = window.innerWidth;
    if (width < 768) {
        itemsToShow = 2;
    } else if (width < 1024) {
        itemsToShow = 3;
    } else {
        itemsToShow = 4;
    }
    updateCarousel();
}

window.addEventListener('resize', handleResize);

// Initial load
filterImages('Tecno');
handleResize();