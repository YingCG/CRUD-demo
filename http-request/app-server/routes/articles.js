import express from "express";
import { v4 as uuidV4 } from "uuid";
// import { getUsers, createUser } from "../controllers/users.js";

const router = express.Router();

let articles = [
  {
    title: "Server",
    description: "This is just a recap of backend",
    id: uuidV4(),
  },
  {
    title: "Restful Api",
    description: "We will do some CRUD operation with restful api",
    id: uuidV4(),
  },
  {
    title: "API with CMS",
    description: "API call to connect to your CMS",
    id: uuidV4(),
  },
];

router.get("/articles", (req, res) => {
  res.json(articles);
});

router.post("/articles", function (req, res) {
  const { article, user } = req.body;
  console.log(article, user);

  articles.push({
    article: article,
    user: user,
    id: uuidV4,
  });

  res.json(articles);
});

router.get("/articles/:id", function (req, res) {
  // to make the id dynamic
  const articleId = req.params.id;

  // get get one article
  const article = articles.find(function (article) {
    // make sure check the datatype to match as comparison
    // return article.id === Number(articleId);
    // or this
    return article.id + "" === articleId;
  });
  //   res.send("Check this out: " + articleId);
  res.json(article);
});

router.delete("/articles/:id", function (req, res) {
  const articleId = req.params.id;

  articles = articles.filter(function (article) {
    return article.id !== articleId;
  });
  res.json(articles);
});

export default router;
