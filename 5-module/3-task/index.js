function initCarousel() {
    // ваш код...
    let arrowRight = document.querySelector('.carousel__arrow_right');
    let arrowLeft = document.querySelector('.carousel__arrow_left');
    let carouselInner = document.querySelector('.carousel__inner');
    let carouselSlide = document.querySelectorAll('.carousel__slide');
    let carouselFirst  = document.querySelector('.carousel__slide');
    let width = carouselFirst.offsetWidth;
    let counter = 0;
      
    arrowRight.addEventListener("click", () => {
      counter += 1;
      arrowLeft.style.display = ""
      if(counter >= (carouselSlide.length - 1) ) {
        counter =  (carouselSlide.length - 1)
        arrowRight.style.display = "none"
      }
      carouselInner.style.transform = `translateX(${-1*(counter * width)}px)`
    })
   
    arrowLeft.addEventListener("click", () => {
      counter -= 1;
      if(counter < 0) {
        counter = 0;
      }
      if(counter < (carouselSlide.length - 1) ) {
        arrowRight.style.display = ""
      }
      if(counter === 0) {
        arrowLeft.style.display = "none"
      }
      carouselInner.style.transform = `translateX(${-1*(counter * width)}px)`
    })
    if(counter === 0) {
      arrowLeft.style.display = "none"
    }
  }
