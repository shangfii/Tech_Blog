// calling all seed files and file to establish connection to db
const sequelize = require('../config/connection');
const seedBlogs = require('./blogData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');

// function for seeding db
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  
  await seedBlogs();

  await seedComments();

  process.exit(0);
};

seedDatabase();