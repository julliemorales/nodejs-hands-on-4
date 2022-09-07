const express = require("express");
const galleryRouter = express.Router();
const methodOverride = require("method-override");
const articleMockOld = require("../mock/articleMock");
let articleMock = [...articleMockOld.articles];
const articleController = require("../controllers/articlesController");

galleryRouter.use(express.urlencoded({ extended: true }));
galleryRouter.use(methodOverride("_method"));

galleryRouter.use(express.json());

// CREATE Article
galleryRouter.get("/create", articleController.articles_add_form);
galleryRouter.post("/create", articleController.articles_add);

//UPDATE Article
galleryRouter.get("/:id/update", articleController.article_update_form);
galleryRouter.put("/:id/update", articleController.article_update);

// DELETE Article
galleryRouter.delete("/:id/delete", articleController.articles_delete);

// View Single Article
galleryRouter.get("/:id", articleController.articles_view_one);

// View All Articles
galleryRouter.get("/", articleController.articles_view_all);

module.exports = galleryRouter;
