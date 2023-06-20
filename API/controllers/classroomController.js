const Classroom = require('./../models/classroomModel');

//Post
exports.createClassroom = async (req,res) => {
    try {
        //Creates a new classroom, saves in the database and stores it on the variable
        const newClassroom = await Classroom.create(req.body);
        //Returns the status and the new classroom created
        res.status(201)
            .json({
                status: 'success',
                data: {
                    classroom: newClassroom
                }
            })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error
        })
    }
}

exports.getAllClassrooms = async (req, res) => {
    try {
        //Searches in the collection and find all the documents, then returns it to the client
        const results = await Classroom.find();
        res.status(200).json({
            status: 'success',
            data: {
                classrooms: results
            }
        });
    } catch (error) {
        //Catch and return a error
        res.status(400).json({
            status: 'failed',
            message: error
        })
    }
}
exports.getClassroomById = async (req,res) => {
    try {
        //Searches in the collection and find the document that matches the id, then returns it to the client
        const id = req.params.id;
        const result = await Classroom.findById(id); //Tour.findOne({_id: req.params.id})
        res.status(200).json({
            status: 'success',
            data: {
                classroom: result
            }
        });
    } catch (error) {
        //Catch and return a error
        res.status(400).json({
            status: 'failed',
            message: error
        })
    }
}
exports.deleteClassroom = async (req,res) => {
    try {
        //Searches in the collection and find the document that matches the id, then deletes it
        const result = await Classroom.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
        });
    } catch (error) {
        //Catch and return a error
        res.status(400).json({
            status: 'failed',
            message: error
        })
    }
}

exports.updateClassroom = async (req,res) => {
    try {
        //Searches in the collection and find the document that matches the id, then update it 
        const result = await Classroom.findByIdAndUpdate(req.params.id, req.body, {
            //It will return the object that was updated
            new:true,
            //Rerun the validators
            runValidators: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                classroom: result
            }
        });  
    } catch (error) {
        //Catch and return a error
        res.status(400).json({
        status: 'failed',
        message: error
    });
    }
}