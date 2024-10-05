/**
 * 
 */

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px",
        crsr.style.top = dets.y + "px",
        blur.style.left = dets.x - 175 + "px",
        blur.style.top = dets.y - 175 + "px"
});


var h4all = document.querySelector("#nav");
// h4all.forEach(function (elem) {
h4all.addEventListener("mouseenter", function () {
    crsr.style.scale = 3
    crsr.style.border = "1px solid rgb(204, 177, 0, 0.5)"
    crsr.style.backgroundColor = "transparent"
});
h4all.addEventListener("mouseleave", function () {
    crsr.style.scale = 1
    crsr.style.border = "0px solid rgb(204, 177, 0, 0.3 )"
    crsr.style.backgroundColor = "rgb(204, 177, 0,0.45)"
});
// });
gsap.to("#nav", {
    backgroundColor: "#000",
    // blur: '30px', doesn't works use filter instead 
    // filter: "blur(1px)",
    opacity: '0.9',
    height: "15vh",
    duration: 0.1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    },
});
gsap.to("#nav h4", {
    color: "white",
    duration: 0.1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    },
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -85%",
        scrub: 2
    },
});

gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 3,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 58%",
        scrub: 3
    },
});
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:0.5,
//     // stagger:0.4,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body", 
//         stagger:0.1,
//         markers:true,
//         start:"top 70%", 
//         end: "top 65%",
//         scrub:1
//     }
// })


gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 65%",
        end: "top 40%",
        scrub: 3
    },
});



gsap.from("#page3", {
    y: 50,
    opacity: 1,
    duration: 3,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end: "top 58%",
        scrub: 3
    },
});


gsap.from("why-zescoot, #div1, #div2", {
    y: 90,
    opacity: 0,
    duration: 15,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#why-zescoot",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    },
});

// Select the element using querySelector
const arrowContainer = document.querySelector("#page1 #arrow-container");
const arrow = document.querySelector("#page1 #arrow-container #arrow");

// Add an event listener for the 'mouseover' event
arrowContainer.addEventListener("mouseover", function () {
    // Change the background color when hovered
    arrow.style.scale = '0.4';
    arrow.style.borderColor = 'black';
    arrow.style.backgroundColor = '#ccb100';
    arrow.styel.border = '1px solid black';
});

// Optionally, you may want to revert the color when the mouse leaves
arrowContainer.addEventListener("mouseout", function () {
    // Revert the background color when the mouse leaves
    arrow.style.scale = '1';
    arrow.style.borderColor = '';
    arrow.style.backgroundColor = '';
    arrow.styel.border = '';
});
