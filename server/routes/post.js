const express = require("express");
const { getPosts, createPost, updatePost, deletePost } = require("../controllers/post.js");

const router = express.Router(); // Buradaki 'Router()' doğru yazım

router.get("/getPosts", getPosts);
router.post("/createPost", createPost);
router.patch("/updatePost/:id", updatePost);
router.delete("/deletePost/:id", deletePost);

module.exports = router;
