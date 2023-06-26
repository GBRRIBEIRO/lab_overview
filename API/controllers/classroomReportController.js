//Handle all the events that are triggered by the router
const ClassroomReport = require('./../models/classroomReportModel');

//Get all the classroom reports
exports.getAll = async (req,res) => {
     //Create a new object based on the req.query
     const queryObj = {...req.query};
     //List of fields to be excluded from the query object
     const excludedFields = ['page' , 'sort', 'limit', 'fields'];

     //Loopes through the fields and delete them from query object
     excludedFields.forEach(field => delete queryObj[field]);

    //Try to find any classroom report, if not found, throw an error
    try {
        const reports = await ClassroomReport.find(queryObj);
        res.status(200)
        .json({
            status: 'success',
            data: reports,
        })
    } catch (error) {
        res.status(400)
            .json({
            status: 'failed',
            message: error
        })
    }
}

//Create a new classroom report
exports.createClassroomReport = async (req, res) => {
    //Try to create a new classroom report, if can't, throw an error
    try {
       
        const incomingClassroomReport = req.body;
        const newClassroomReport = await ClassroomReport.create(incomingClassroomReport);
        res.status(200)
        .json({
            status: 'success',
            data: newClassroomReport,
        })
    } catch (error) {
        res.status(400)
            .json({
            status: 'failed',
            message: error
        })
    }   
}