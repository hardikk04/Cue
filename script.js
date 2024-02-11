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

gsap.to(".loader", {
  top: "-100vh",
  delay: 1,
  duration: 1,
});

const tl = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: ".page1-part2",
    start: "top -20%",
    end: "top -200%",
    scrub: 1,
    pin: true,
    // pinSpacing: false,
    // markers: true,
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

gsap.from(".page2>img", {
  x: 800,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2",
    start: "top 40%",
    end: "top 0",
    scrub: 1,
    // markers: true,
  },
});

gsap.from(".page2-mid", {
  x: -600,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2",
    start: "top 20%",
    end: "top -20%",
    scrub: 1,
    // markers: true,
  },
});

gsap.from(".page2>h1", {
  x: 500,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2",
    start: "top 0%",
    end: "top -40%",
    scrub: 1,
    // markers: true,
  },
});

function clutterAnimation(element) {
  const htmlTag = document.querySelector(element);
  let clutter = "";
  htmlTag.textContent.split(" ").forEach((words) => {
    clutter += `<span>${words + " "}</span>`;
  });

  htmlTag.innerHTML = clutter;
}

clutterAnimation(".page3-span2");

gsap.to(".page3-span2>span", {
  color: "#FF3227",
  stagger: 0.1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    start: "top 80%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});
