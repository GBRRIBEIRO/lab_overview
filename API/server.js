const dotenv = require('dotenv'); //Imports dotenv

dotenv.config({ path: './config.env' }); //Sets the route for the .env configuration file

const app = require('./app'); //Imports already configured express
const mongoose = require('mongoose'); //Imports mongoose

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
); //Replaces the placeholder for the real password

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connection done!');
}); //Connects to the remote database

// mongoose.connect(process.env.DATABASE_LOCAL); //Connects to the local database

//Server
