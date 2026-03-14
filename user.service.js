const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require("../repositories/user.repository");

const register = async (email, password) => {
  const existingUser = await userRepository.findUserbyEmail(email);
  if(existingUser) {
    const err = new Error("Email already in use");
    err.status = 400;
    throw err;
  };

  const hashedPassword = bcrypt.hash(password, 10);
  const user = await userRepository.findUserbyEmail(email, hashedPassword);

  return user;
};

const login = async (email, password) => {
  const user = await userRepository.findUserbyEmail(email);
  if(!user) {
    const err = new Error("Invalid credentials");
    err.status = 400;
    throw err;
  };

  const isMathch = bcrypt.compare(password, user.password);
  if(!isMathch) {
    const err = new Error("Password is incorect");
    err.status = 400;
    throw err;
  };

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  )

  return { token };
};

module.exports = {
  register,
  login
};