const scrolltp = document.querySelector('#scrolltp')
scrolltp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
    
  })
})
window.addEventListener('scroll', () => {
  if(window.scrollY >= 700) {
    scrolltp.style.opacity = 1;
  }else {
    scrolltp.style.opacity = 0;

  }
})