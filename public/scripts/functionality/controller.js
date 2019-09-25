console.log("initialized ----- controller.js");

class Controller {

    loadPage = function (page) {
        // animator.openFullscreen(); // disabled because impractical to work with
        card.classList = "";
        let currentPage  = parseInt(document.getElementById("currentPage").innerHTML);
        let previousPage = parseInt(document.getElementById("previousPage").innerHTML);
        let nextPage;

        if (page == "previous") {
            animator.slideOutDownwards(card);

            if (currentPage == 0) {
                nextPage = 0;
            } else {
                nextPage = currentPage - 1;
            }
        }

        if (page == "next") {
            animator.slideOutUpwards(card);
            nextPage = currentPage + 1;
        }

        setTimeout(() => {
            if (nextPage == 0 && currentPage == 0) {
                card.classList = "";
                animator.slideInUpwards(card);
                // controller.redirectTo(0);
            } else {
                controller.redirectTo(nextPage);
            }
        }, 100);
    }

    redirectTo = function (pageNumber) {
        document.getElementById('form_nextPage').value = pageNumber;
        let form = document.getElementById('form');
        form.submit();
    }


    addFormElementToCard = function(card) {
        let formElement =
                ' <form id="form" method="post" action="/router/posts">               '
            +   '     <input id="form_previousPage" type="text" name="form_previousPage" value="prevvy">      '
            +   '     <input id="form_nextPage"     type="text" name="form_nextPage"     value="nextty">      '
            +   '     <input id="sumbitId" type="submit"               value="submit">'
            +   ' </form>                                                             ';
        card.innerHTML += formElement;
    }

    initKeylogger = function () {
        let keylogger = [];

        setInterval(() => {
            keylogger.length = 0;
        }, 500);

        addEventListener('keydown', function (kbd) {
            if (kbd.ctrlKey)
                keylogger.push('Control');

            if (kbd.key == 'ArrowDown')
                keylogger.push('ArrowDown');

            if (kbd.key == 'ArrowUp')
                keylogger.push('ArrowUp');

            if (keylogger.includes('Control') && keylogger.includes('ArrowUp'))
                controller.loadPage("previous");

            if (keylogger.includes('Control') && keylogger.includes('ArrowDown'))
                controller.loadPage("next");
        });
    }
}

// INITIALIZATION
let card          = document.getElementById('card');
let animator      = new Animator();
let controller    = new Controller();

controller.initKeylogger();
controller.addFormElementToCard(card);













































