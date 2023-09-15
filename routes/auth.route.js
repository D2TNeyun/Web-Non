const authController = require("../controllers/auth");
const middlewareController = require("../controllers/middleware");

const router = require("express").Router();

// dang ky
router.post("/register", authController.registerUser);
// dang nhap
router.post("/login", authController.loginUser);

//refresh
router.post("/refresh",authController.refreshToken );

//logout (yc user login rồi mới logout được)
router.post("/logout", middlewareController.verifyToken, authController.logOut);

module.exports = router;