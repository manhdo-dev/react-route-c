const newsRepository = require('../models/repository/news.repository');
const resErr = require('../models/resErr');

module.exports = {
    createNewsController: (req, res, next) => {
        const data = req.body;
        //console.log(data);
        try {
            newsRepository.createNews(data).then(docs => {
                res.status(200).json(docs);
            }).catch(err => {
                throw resErr(400, "Bad request");
            })
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },

    getAllNewsController: (req, res, next) => {
        try {
            newsRepository.getAllNewsModel().then(docs => {
                res.status(200).json(docs);
            }).catch(err => {
                throw resErr(400, "Bad request");
            })
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    }
}