let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // scrolling down
    navbar.style.top = '-100px';
  } else {
    // scrolling up
    navbar.style.top = '0';
  }
  lastScrollY = window.scrollY;
}); 




const bar = document.getElementById("bar")
const close = document.getElementById("close")
const navlinks  = document.querySelector(".nav-links")

if(bar){
  bar.addEventListener("click",()=>{
    navlinks.classList.add('active')
  })
}
if(close){
  close.addEventListener("click",()=>{
    navlinks.classList.remove('active')
  })
}




// nav and landing page 



// project animation start














document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
// project animation end



gsap.from(".big-headings h1",{
  y:30,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.5
})

gsap.from(".small-headings",{
  y:30,
  opacity:0,
  duration:1,
  delay:1,
  stagger:0.5
})

gsap.from(".about-text h4",{
  y:30,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.5
})

gsap.from(".graphic img",{
  y:30,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.5
})

gsap.from(".about-text p, .about-footer h4",{
  y:30,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.5
})


