const router = require("express").Router();

const userControllers = require("../controllers/userController");

router.post("/signup", userControllers.register);
router.post("/signin", userControllers.login);

module.exports = router;