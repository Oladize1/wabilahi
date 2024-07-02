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
    HP: [
      { image: 'images/image-2.jpg', title: 'HP Pavilion 15', price: '#300,000.00' },
      { image: 'images/image-2.jpg', title: 'HP Envy 13', price: '#350,000.00' },
      { image: 'images/image-2.jpg', title: 'HP Spectre x360', price: '#400,000.00' },
      { image: 'images/image-2.jpg', title: 'HP Omen 15', price: '#500,000.00' },
    ],
    Dell: [
      { image: 'images/image-2.jpg', title: 'Dell XPS 13', price: '#350,000.00' },
      { image: 'images/image-2.jpg', title: 'Dell Inspiron 15', price: '#250,000.00' },
      { image: 'images/image-2.jpg', title: 'Dell G5 15', price: '#300,000.00' },
      { image: 'images/image-2.jpg', title: 'Dell Alienware m15', price: '#600,000.00' },
    ],
    Apple: [
      { image: 'images/image-2.jpg', title: 'MacBook Pro', price: '#1,200,000.00' },
      { image: 'images/image-2.jpg', title: 'MacBook Air', price: '#900,000.00' },
      { image: 'images/image-2.jpg', title: 'iMac', price: '#1,500,000.00' },
      { image: 'images/image-2.jpg', title: 'Mac Mini', price: '#500,000.00' },
    ],
    Asus: [
      { image: 'images/image-2.jpg', title: 'Asus ZenBook 13', price: '#250,000.00' },
      { image: 'images/image-2.jpg', title: 'Asus ROG Zephyrus', price: '#500,000.00' },
      { image: 'images/image-2.jpg', title: 'Asus VivoBook 15', price: '#200,000.00' },
      { image: 'images/image-2.jpg', title: 'Asus TUF Gaming', price: '#350,000.00' },
    ],
    Acer: [
      { image: 'images/image-2.jpg', title: 'Acer Aspire 5', price: '#150,000.00' },
      { image: 'images/image-2.jpg', title: 'Acer Nitro 5', price: '#250,000.00' },
      { image: 'images/image-2.jpg', title: 'Acer Predator Helios 300', price: '#400,000.00' },
      { image: 'images/image-2.jpg', title: 'Acer Swift 3', price: '#200,000.00' },
    ],
    Lenovo: [
      { image: 'images/image-2.jpg', title: 'Lenovo ThinkPad X1', price: '#400,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Legion 5', price: '#350,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo IdeaPad 3', price: '#150,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Yoga C940', price: '#500,000.00' },
    ],
    Televisions: [
      { image: 'images/image-2.jpg', title: 'Lenovo ThinkPad X1', price: '#400,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Legion 5', price: '#350,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo IdeaPad 3', price: '#150,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Yoga C940', price: '#500,000.00' },
    ],
    Fryers: [
      { image: 'images/image-2.jpg', title: 'Lenovo ThinkPad X1', price: '#400,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Legion 5', price: '#350,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo IdeaPad 3', price: '#150,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Yoga C940', price: '#500,000.00' },
      { image: 'images/image-3.jpg', title: 'Lenovo Yoga C940', price: '#500,000.00' },
    ],
    accessories: [
      { image: 'images/image-2.jpg', title: 'Lenovo ThinkPad X1', price: '#400,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Legion 5', price: '#350,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo IdeaPad 3', price: '#150,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Yoga C940', price: '#500,000.00' },
      { image: 'images/image-3.jpg', title: 'Lenovo Yoga C940', price: '#500,000.00' },
    ],
    SPORTY: [
      { image: 'images/image-2.jpg', title: 'Lenovo ThinkPad X1', price: '#400,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Legion 5', price: '#350,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo IdeaPad 3', price: '#150,000.00' },
      { image: 'images/image-2.jpg', title: 'Lenovo Yoga C940', price: '#500,000.00' },
      { image: 'images/image-3.jpg', title: 'Lenovo Yoga C940', price: '#500,000.00' },
    ],
  };
  
  function filterImages(category, carouselId) {
    const carouselTrack = document.querySelector(`#${carouselId} .carousel-track`);
  
    // Clear previous slides
    carouselTrack.innerHTML = '';
  
    // Get products for the selected category
    const categoryProducts = products[category];
  
    // Loop through products and create slides
    categoryProducts.forEach(product => {
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
  
    // Reset currentSlide to 0 and update carousel display
    const parentCarousel = document.querySelector(`#${carouselId}`);
    parentCarousel.currentSlide = 0;
    updateCarousel(carouselId);
  }
  
  function updateCarousel(carouselId) {
    const parentCarousel = document.querySelector(`#${carouselId}`);
    const carouselTrack = parentCarousel.querySelector('.carousel-track');
    const slideWidth = parentCarousel.querySelector('.carousel-item').clientWidth;
    carouselTrack.style.transform = `translateX(-${parentCarousel.currentSlide * slideWidth}px)`;
  }
  
  function moveCarousel(step, carouselId) {
    const parentCarousel = document.querySelector(`#${carouselId}`);
    const items = parentCarousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let itemsToShow = 2;
  
    if (window.innerWidth >= 1024) {
      itemsToShow = 4;
    } else if (window.innerWidth >= 768) {
      itemsToShow = 3;
    }
  
    if (step === 1) {
      if (parentCarousel.currentSlide < totalItems - itemsToShow) {
        parentCarousel.currentSlide++;
      }
    } else if (step === -1) {
      if (parentCarousel.currentSlide > 0) {
        parentCarousel.currentSlide--;
      }
    }
  
    updateCarousel(carouselId);
  }
  
  function handleResize() {
    const carousels = document.querySelectorAll('.product-slider-container');
    carousels.forEach(carousel => {
      const carouselId = carousel.id;
      updateCarousel(carouselId);
    });
  }
  
  window.addEventListener('resize', handleResize);
  
  window.addEventListener('DOMContentLoaded', () => {
    // Load initial categories for each section
    filterImages('Tecno', 'phones-carousel');
    filterImages('HP', 'pcs-carousel');
    filterImages('Televisions', 'electronics-carousel');
    filterImages('accessories', 'accessories-carousel');
  });
  