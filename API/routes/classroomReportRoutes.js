const express = require('express');
const controller = require('./../controllers/classroomReportController');

const router = express.Router();

router //Creates a route and its methods associated
    .route('/')
    .get(controller.getAll)
    .post(controller.createClassroomReport);


// router //Creates a route and its methods associated
//     .route('/:id')
//     .patch(controller.updateClassroom)
//     .get(controller.getClassroomById)
//     .delete(controller.deleteClassroom);

module.exports = router;