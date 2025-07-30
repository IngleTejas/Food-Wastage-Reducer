// // backend/routes/userRoutes.js
// const express = require('express')
// const router = express.Router()

// // Example route
// router.get('/', (req, res) => {
//   res.send("Users route working!")
// })

// module.exports = router

const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

