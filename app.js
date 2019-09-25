const express    = require('express');
const app        = express();
const mustache   = require('mustache-express');
const path       = require('path');
const bodyParser = require('body-parser');
const urlEncoder = bodyParser.urlencoded({ extended: false });
const port       = process.env.PORT || 3000;
const router     = require('./routes/router');
const mongoose   = require('mongoose');
                   require('dotenv/config');

app.engine('html', mustache());

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/router', router);

app.get('/', (req, res) => {
    res.render('_00_Welcome.html', {
        currentPage: 0,
        previousPage: 0
    });
});

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('Server connected to database')
);

app.listen(port, () => console.log(`Server listening on port ${port}`));















// --------------- dotenv - works. -----------------
// require('dotenv/config');
// console.log(process.env.MongoDBConnectionString);
// _________________________________________________







