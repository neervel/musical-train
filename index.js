const slider = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',
  autoHeight: true,

  fadeEffect: {
    crossFade: true
  },

  navigation: {
    nextEl: '.js-slider-next',
    prevEl: '.js-slider-prev',
  },
});

const current = document.querySelector('.js-slider-current')
const showauthor = document.querySelectorAll('.js-show-a')
const hideauthor = document.querySelectorAll('.js-hide-a')

slider.on('slideChange', function () {
  showauthor.forEach(el => {
    el.classList.add('hidden')
  })
  hideauthor.forEach(el => {
    el.classList.remove('hidden')
  })

  current.innerHTML = slider.realIndex + 1
});

showauthor.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.add('hidden')
    el.nextElementSibling.classList.remove('hidden')
  })
})

hideauthor.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.add('hidden')
    el.previousElementSibling.classList.remove('hidden')
  })
})
