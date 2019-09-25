const express          = require('express');
const router           = express.Router();
const bodyParser       = require('body-parser');
const pageNavigation   = require('../models/PageNavigation');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const pages = [
    "_00_Welcome",
    "_01_HowWasYourDay",
    "_02_HowAreYouFeeling"
];

let previousPage;
let nextPage;


// --- GET --- //
router.get('/_00_Welcome', (req, res) => {
    res.render('_00_Welcome.html', {
        currentPage:  nextPage,
        previousPage: previousPage
    });
});

router.get('/_01_HowWasYourDay', (req, res) => {
    res.render('_01_HowWasYourDay.html', {
        currentPage:  nextPage,
        previousPage: previousPage
    });
});


// --- POST --- //
router.post('/posts', urlencodedParser, (req, res) => {
    previousPage = req.body.form_previousPage;
    nextPage     = req.body.form_nextPage;

    //Save some data to mongoDB here

    res.redirect(pages[nextPage]);
});








module.exports = router;



































