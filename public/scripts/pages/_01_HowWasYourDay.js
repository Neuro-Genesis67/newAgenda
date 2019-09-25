console.log("initialized ----- _01_HowWasYourDay.js");

let currentPage  = parseInt(document.getElementById('currentPage').innerHTML);
let previousPage = parseInt(document.getElementById('previousPage').innerHTML);

if (currentPage < previousPage) {
    animator.slideInDownwards(card);
} else {
    animator.slideInUpwards(card);
}
