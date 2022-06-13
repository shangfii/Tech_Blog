const bcrypt = require("bcrypt");

// db seeds for User model/table
const { User } = require("../models");

const userData = [
  {
    "name": "Shang",
    "email": "shang@hotmail.com",
    "password": "1password12345"
  },
  {
    "name": "Celsius",
    "email": "celsius@gmail.com",
    "password": "ppassword123455"
  },
  {
    "name": "NDZE",
    "email": "ndze@aol.com",
    "password": "1Lifetime#"
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning:true,
});

module.exports = seedUsers
