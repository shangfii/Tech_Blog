// seeds for Blog model/table
const{ Blog } = require('../models');

const blogData = [
  {
    "title": "Web3 also called Web 3.0",
    "description": "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic",
    "user_id": 3
  },
  {
    "title": "What is Internet?",
    "description": "The Internet is essentially a global network of computing resources. You can think of the Internet as a physical collection of routers and circuits as a set of shared resources.",
    "user_id": 1
  },
  {
    "title": "computer science",
    "description": "computer science, the study of computers and computing, including their theoretical and algorithmic foundations, hardware and software",
  },
  {
    "title": "Operating systems",
    "description": "An operating system is a specialized collection of software that stands between a computer’s hardware architecture and its applications. It performs a number of fundamental activities such as file system management.",
    "user_id": 3
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;