const express = require("express");
const { register, login } = require("../controllers/auth.js");

const router = express.Router(); // Buradaki 'Router()' doğru yazım

router.post("/register", register);
router.post("/login", login);

module.exports = router;
