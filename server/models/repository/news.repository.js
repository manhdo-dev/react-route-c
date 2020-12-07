const newsModel = require('../news.model');
const resErr = require('../resErr');

module.exports = {
    createNews: async(data) => {
        if (!data) {
            throw resErr(400, " Invalid data")
        }
        try {
            var create = new newsModel(data);

            var result = await create.save();
            return result;
        } catch (err) {
            throw resErr(500, "Unexpected error");
        }
    },

    getAllNewsModel: async function() {
        try {
            const result = await newsModel.find();
            return result;
        } catch (err) {
            throw resErr(500, 'Unexpected error');
        }

    }
}