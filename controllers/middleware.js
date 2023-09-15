const jwt = require("jsonwebtoken");

const middlewareController = {
  //verifyToken xac nhan Toke user khi login
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          res.status(403).json("Token is valid");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("you're not authencicated");
    }
  },

  //quyen delete uer 
  verifyTokenAndAdminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      // user chỉ có thể tự xóa chính nó, admin có thể xóa các user khác
      if (req.user.id == req.params.id || req.user.admin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  },
};

module.exports = middlewareController;
