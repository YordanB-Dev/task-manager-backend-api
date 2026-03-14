const asyncHandler = require("../middleware/asyncHandler");
const userService = require("../services/user.service");

const register = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const result = await userService.register(email, password);
    res.status(201).json(result);
});

const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await userService.login(email, password);
    res.status(201).json(user);
});

module.exports = {
    register,
    login
};
