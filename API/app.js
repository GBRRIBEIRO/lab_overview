//Express configuration
const express = require('express');
const app = express();
const morgan = require('morgan');

const classroomRouter = require('./routes/classroomRoutes'); //Imports the router with the basic routes and operations

if (process.env.NODE_ENV === 'development') { //Checks if the current environment is "development", if it's use morgan
    app.use(morgan('dev'));
}
app.use(express.json()); //Sets the incoming requests to json

app.use('/api/v1/classrooms', classroomRouter); //Sets the default route || Connects with the route handler

module.exports = app;