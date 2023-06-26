const mongoose = require('mongoose'); //Imports mongoose

//Creates a schema
const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    
});


//Create a model using the schema | Model is a collection in the database
const Classroom = mongoose.model('Classroom',classroomSchema); 

module.exports = Classroom;