var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 175 + "px";
    blur.style.top = dets.y - 175 + "px";
});


var h4all = document.querySelectorAll("#nav");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid rgb(204, 177, 0, 0.5)"
        crsr.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(204, 177, 0, 0.3 )"
        crsr.style.backgroundColor = "rgb(204, 177, 0,0.45)"
    });
});
// gsap.to("#nav", {
//     backgroundColor: "#000",
//     filter: "blur(1px)", // Correct use of blur within filter
//     opacity: 0.9, // Remove quotes for numerical value
//     height: "15vh",
//     duration: 0.1,
//     scrollTrigger: {
//         trigger: "#nav",
//         scroller: "body",
//         start: "top -10%",
//         end: "top -11%",
//         scrub: 1
//     },
// });

// gsap.to("#nav h4", {
//     backgroundColor: "rgb(204, 177, 0)",
//     color: "black",
//     duration: 0.1,
//     scrollTrigger: {
//         trigger: "#nav",
//         scroller: "body",
//         start: "top -10%",
//         end: "top -11%",
//         scrub: 1
//     },
// });
// gsap.to("#main", {
//     backgroundColor: "#000",
//     scrollTrigger: {
//         trigger: "#main",
//         scroller: "body",
//         start: "top -25%",
//         end: "top -85%",
//         scrub: 2
//     },
// });
const arrowContainer = document.querySelector("#page1 #arrow-container");
const arrow = document.querySelector("#page1 #arrow-container #arrow");
const help = document.querySelector('#arrow-container p');
// Add an event listener for the 'mouseover' event
arrowContainer.addEventListener("mouseover", function () {
    // Change the background color when hovered
    arrow.style.scale = '0.4';
    arrow.style.borderColor = 'black';
    arrow.style.backgroundColor = '#ccb100';
    arrow.style.border = '1px solid black';
    help.style.color = 'black';
});

// Optionally, you may want to revert the color when the mouse leaves
arrowContainer.addEventListener("mouseout", function () {
    // Revert the background color when the mouse leaves
    arrow.style.scale = '1';
    arrow.style.borderColor = '';
    arrow.style.backgroundColor = '';
    arrow.style.border = '';
    help.style.color = 'white';
});

const button = document.querySelector('.page1-containers-inside button');
button.addEventListener('click', function () {
    console.log("buttonclicked");
})


function checkPasswordMatch(confirmPasswordInput) {
    const password = document.getElementById('password').value;
    const confirmPassword = confirmPasswordInput.value;
    const errorMessage = document.getElementById('error-message');
	
    if ( password != '' && confirmPassword != '' && password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        confirmPasswordInput.setCustomValidity("Passwords do not match!");
    } else {
        errorMessage.textContent = "";
        confirmPasswordInput.setCustomValidity("");
    }
}

const searc = URLSearchParams.arguments("user");

if(searc =='exists'){
	
}