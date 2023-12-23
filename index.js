Shery.mouseFollower({
   skew: true,
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 1,
});

Shery.hoverWithMediaCircle(".title", {
   videos: ["./assests/images/study.mp4"],
})

var tl = gsap.timeline({
   scrollTrigger: {
      trigger: "#main",
      start: "50% 50%",
      end: "150% 50%",
      scrub: 2,
      pin: true
   }
})
tl
   .to("#center", {
      height: "100vh",
   }, 'a')
   .to("#top", {
      top: "-50%",
   }, 'a')
   .to("#bottom", {
      bottom: "-50%",
   }, 'a')
   .to("#top-h1", {
      top: "60%"
   }, 'a')
   .to("#bottom-h1", {
      bottom: "-30%"
   }, 'a')
   .to("#center-h1", {
      top: "-30%"
   }, 'a')
   .to(".content", {
      delay: -0.2,
      marginTop: "0%"
   })

var card1 = document.querySelector(".year1");
card1.addEventListener("mousemove", function () {
   anime({
      targets: document.querySelector(".year1"),
      rotateY: "+=180",
      easing: 'easeInOutSine',
      duration: 400,
   });
})

var card1 = document.querySelector(".year1");
card1.addEventListener("mouseleave", function () {
   anime({
      targets: document.querySelector(".year1"),
      rotateY: "+=180",
      easing: 'easeInOutSine',
      duration: 400,
   });
})

var card2 = document.querySelector(".year2");
card2.addEventListener("mousemove", function () {
   anime({
      targets: document.querySelector(".year2"),
      rotateY: "+=180",
      easing: 'easeInOutSine',
      duration: 400,
   });
})

var card2 = document.querySelector(".year2");
card2.addEventListener("mouseleave", function () {
   anime({
      targets: document.querySelector(".year2"),
      rotateY: "+=180",
      easing: 'easeInOutSine',
      duration: 400,
   });
})

var card3 = document.querySelector(".year3");
card3.addEventListener("mousemove", function () {
   anime({
      targets: document.querySelector(".year3"),
      rotateY: "+=180",
      easing: 'easeInOutSine',
      duration: 400,
   });
})

var card3 = document.querySelector(".year3");
card3.addEventListener("mouseleave", function () {
   anime({
      targets: document.querySelector(".year3"),
      rotateY: "+=180",
      easing: 'easeInOutSine',
      duration: 400,
   });
})

var card4 = document.querySelector(".year4");
card4.addEventListener("mousemove", function () {
   anime({
      targets: document.querySelector(".year4"),
      rotateY: "+=180",
      easing: 'easeInOutSine',
      duration: 400,
   });
})

var card4 = document.querySelector(".year4");
card4.addEventListener("mouseleave", function () {
   anime({
      targets: document.querySelector(".year4"),
      rotateY: "+=180",
      easing: 'easeInOutSine',
      duration: 400,
   });
})