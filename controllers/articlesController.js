const Articles = require("../model/articles");

//Get all articles

const articles_add_form = (req, res) => {
  res.render("pages/add");
};

const articles_view_all = (req, res) => {
  Articles.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("pages/gallery", { articles: result });
    })
    .catch((err) => console.log(err));
};

// Get article by id
const articles_view_one = (req, res) => {
  Articles.findById(req.params.id)
    .then((result) => res.render("pages/view", { article: result }))
    .catch((err) => console.log(err));
};

// Create an article
const articles_add = (req, res) => {
  const body = req.body;
  const modifiedBody = {
    ...body,
    completed: body.completed === "on" ? true : false,
    imageSrc: "https://dummyimage.com/400x300/000/fff",
  };
  const article = new Articles(modifiedBody);
  article
    .save()
    .then((result) => res.render("pages/new", { article: result }))
    .catch((err) => console.log(err));
};

// Update article
const article_update_form = (req, res) => {
  Articles.findById(req.params.id)
    .then((result) => {
      res.render("pages/update", { article: result });
    })
    .catch((err) => console.log(err));
};

const article_update = async (req, res) => {
  let articlesUpdate = await Articles.findByIdAndUpdate(req.params.id, {
    ...req.body,
    completed: req.body.completed === "on" ? true : false,
  });
  if (!articlesUpdate) return res.status(404).render("pages/error");
  // TODO: Add preview page after editing
  res.redirect("/gallery");
};

// Delete articles
const articles_delete = async (req, res) => {
  const deletedArticles = await Articles.findByIdAndDelete(req.params.id);
  if (!deletedArticles) {
    return res.status(404).render("pages/error");
  }
  res.redirect("/gallery");
};

// const articles_addDetails = (req, res) => {
//   res.render("add", { title: "ADD ARTICLE" });
// };

module.exports = {
  articles_add_form,
  articles_view_all,
  articles_view_one,
  articles_add,
  article_update_form,
  article_update,
  articles_delete,
};
