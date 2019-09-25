const mongoose = require('mongoose');

const PageNavigationSchema = ({
    _id: String,
    currentPage: Number,
    previousPage: Number
});

module.exports = mongoose.model('PageNavigation', PageNavigationSchema);