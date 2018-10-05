const router = require("express").Router();
const articlesControllers = require("../../controllers/articlesControllers");

router.route("/")
    .get(articlesControllers.findAll)
    .post(articlesControllers.save);

router.route("/:id")
    .delete(articlesControllers.delete);