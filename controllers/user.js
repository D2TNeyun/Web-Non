const User = require("../model/user.model");

const userController = {
    // get all user
    getAllUser: async(req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //dele user
    deleteUser: async(req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = userController;