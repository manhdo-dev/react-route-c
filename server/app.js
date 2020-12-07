require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const port = process.env.PORT;
const dbConfig = require('./config/db.config');
const routeNews = require('./routes/news.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(dbConfig.mongodbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(function() {
    console.log("Connect mongodb successfully");
}, function(err) {
    console.log("Connect mongodb failed");
});

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(process.env.NEWS_ROUTE, routeNews);

app.listen(port, () => {
    console.log('App listening on port ' + port);
});