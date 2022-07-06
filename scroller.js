let tl = gsap.timeline();
tl.fromTo(
  ".desktop-h1",
  { opacity: 0, y: -200 },
  { y: 0, opacity: 1, duration: 1.4 }
).fromTo(
  ".img-fluid",
  {
    opacity: 0,
    x: -300,
  },
  {
    opacity: 1,
    x: 0,
    ease: "sine.in",
  },
  ">-1"
);

let st = ScrollTrigger.create({
  trigger: ".withoutscroll",
  pin: ".withoutscroll",
  scrub: true,
  start: "top",

  endTrigger: ".square",
  end: "center bottom",
});
