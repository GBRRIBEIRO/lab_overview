//Handle all the events that are triggered by the router
const ClassroomReport = require('./../models/classroomReportModel');

//Get all the classroom reports
exports.getAll = async (req,res) => {
    //Try to find any classroom report, if not found, throw an error
    try {
        
        //----------------------------------------------------------------//
        // BUILD QUERY
        
        //1) Filtering
        const queryObj = {...req.query};         //Create a new object based on the req.query
        const excludedFields = ['page' , 'sort', 'limit', 'fields'];         //List of fields to be excluded from the query object
        excludedFields.forEach(field => delete queryObj[field]); //Loopes through the fields and delete them from query object

        //1.1) Advanced filtering
        let queryStr = JSON.stringify(queryObj); //Transfors query object into a readable string
        queryStr = queryStr.replace(/\b{gte|gt|lte|lt}\b/g, matched=>`$${matched}`); //Replaces the operators matched with the acceptable mongodb operators
 
        //----------------------------------------------------------------//
    
        //----------------------------------------------------------------//
        // EXECUTE QUERY
        let query = ClassroomReport.find(JSON.parse(queryStr));

        //2) Sorting
        if(req.query.sort){
            query = query.sort(req.query.sort);
        }
        else {
            query = query.sort('-createdAt');
        }
        //3) Field limiting || Projecting
        if(req.query.fields) {
            const fields = req.query.fields.split(',').join(' '); //Format the fields to be returned in a way that mongoose understands
            query = query.select(fields);
            query = query.select('-__v');
        }else {
            query = query.select('-__v');
        }

        //4) Pagination 
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 30;
        const skip = (page -1 ) * limit;

        query = query
            .skip(skip)
            .limit(limit);

        if(req.query.page){
            const numTours = await ClassroomReport.countDocuments();
            if(skip > numTours){
                throw new Error('This page doesnt exist');
            }
        }
        
        const reports = await query;
        //----------------------------------------------------------------//

        res.status(200)
        .json({
            status: 'success',
            results: reports.length,
            page: page,
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