function lenisJs() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 700);
  });

  gsap.ticker.lagSmoothing(0);
}

lenisJs();

const tl = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1-part2",
    start: "top -20%",
    end: "top -200%",
    scrub: 1,
    pin: true,
    markers: true,
  },
});

tl.to(
  ".page1-part2-center",
  {
    width: "32%",
    height: "90vh",
  },
  "a"
);

tl.to(
  ".page1-part2-center>img",
  {
    scale: 1,
  },
  "a"
);

tl.to(
  ".page1-part2-left",
  {
    top: "2.9%",
  },
  "b"
);

tl.to(
  ".page1-part2-right",
  {
    top: "24.5%",
  },
  "b"
);
