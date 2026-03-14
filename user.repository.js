const { hash } = require("bcrypt");
const db = require("../db");

const createUser = async (email, hashedPassword) =>{
   const result = await db.query(
      `INSER INTO users (email, password) VALUES ($1, $2) RETURNING id, email`,
      [email, hashedPassword]
   )

   return result.rows[0];
};

const findUserbyEmail = async (email) => {
   const result = await db.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
   )

   return result.rows[0];
};

module.exports = {
   createUser,
   findUserbyEmail
};