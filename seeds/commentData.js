// db seeds for Comment model/table
const{ Comment } = require('../models');

const commentData = [
  {
    "user_id": 1,
    "description": "Great reaction from the public and more to come",
    "blog_id": 1
  },
  {
    "user_id": 2,
    "description": "I've been using Pug for my last projects. What do other devs like to use?",
    "blog_id": 4
  },
  {
    "user_id": 3,
    "description": "That's a great way of describing the difference. Thanks!",
    "blog_id": 2
  },
  {
    "user_id": 3,
    "description": "I agree and I just started learning about Sequelize ORM in class!.",
    "blog_id": 3
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;