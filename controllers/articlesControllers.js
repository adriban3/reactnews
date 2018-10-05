const db = require("../models");

module.exports = {
    //find all saved
    findAll: function (req, res) {
        db.Article
            .find(req.query)
            .sort({ data: -1 })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    //this is supposed to save an article
    save: function (req, res) {
        db.Article
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    //delete article
    delete: function (req, res) {
        db.Article
            .findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    //need to create a * route, not sure what that means...
}