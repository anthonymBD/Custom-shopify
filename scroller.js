

let tl = gsap.timeline();

let hero = document.querySelector(".desktop-h1")
let sideScroller = document.querySelector(".withoutscroll")




if (hero) {
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
}

if (sideScroller) {

    let st = ScrollTrigger.create({
        trigger: ".withoutscroll",
        pin: ".withoutscroll",
        scrub: true,
        start: "300px center",
        endTrigger: ".square",
        end: "-250px 200px ",
    });

    // tl.fromTo(
    //   ".layers",
    //  { opacity: 0, y: -200 },

    //   { y: 0, opacity: 1, duration: 1.4, stagger: 0.5 }
    //)
}




