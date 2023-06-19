const dotenv = require('dotenv'); //Imports dotenv

dotenv.config({ path: './config.env' }); //Sets the route for the .env configuration file

const app = require('./app'); //Imports already configured express

//Server
