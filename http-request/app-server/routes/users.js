import express from "express";
// import { getUsers, createUser } from "../controllers/users.js";
const router = express.Router();

const articles = [
  {
    title: "Server",
    description: "This is just a recap of backend",
  },
  {
    title: "Restful Api",
    description: "We will do some CRUD operation with restful api",
  },
  {
    title: "API with CMS",
    description: "API call to connect to your CMS",
  },
];

router.get("/users", (req, res) => {
  res.json([
    { name: "developer", description: "Yo! Server is running" },
    { name: "developer2", description: "Yay! New to the team" },
  ]);
});
router.get("/news", (req, res) => {
  res.json(articles);
});

export default router;
