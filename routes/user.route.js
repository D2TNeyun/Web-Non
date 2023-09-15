const middlewareController = require("../controllers/middleware");
const userController = require("../controllers/user");

const router = require("express").Router();

router.get("/", middlewareController.verifyToken, userController.getAllUser);

router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);

module.exports = router;    
