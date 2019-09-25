console.log("initialized ----- animator.js");


class Animator {

    slideInDownwards  = function (card) {
        card.style.visibility = "visible";
        card.classList.add('slide-in-top');
    }
    slideInUpwards    = function (card) {
        card.style.visibility = "visible";
        card.classList.add('slide-in-bottom');
    }

    slideOutUpwards   = function (card) {
        card.classList.add('slide-out-top');
    }
    slideOutDownwards = function (card) {
        card.classList.add('slide-out-bottom');
    }

    unfoldHorCenter   = function () {
        let card = document.getElementById('card');
        card.style.visibility = "visible";
        card.classList.add('scale-up-hor-center');
    }

    openFullscreen    = function () {
        let de = document.documentElement; // Used to be a var
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) { /* Firefox */
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            de.webkitRequestFullscreen();
        } else if (de.msRequestFullscreen) { /* IE/Edge */
            de.msRequestFullscreen();
        }
    }
}



// --- IMPROVEMENTS --- //
// Lad metoderne tage en card parameter som controller giver med










