const express = require('express');
const controller = require('./../controllers/classroomController');

const router = express.Router();

router //Creates a route and its methods associated
    .route('/')
    .get(controller.getAllClassrooms)
    .post(controller.createClassroom);


router //Creates a route and its methods associated
    .route('/:id')
    .patch(controller.updateClassroom)
    .get(controller.getClassroomById)
    .delete(controller.deleteClassroom);

module.exports = router;