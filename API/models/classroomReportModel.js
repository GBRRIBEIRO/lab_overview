const mongoose = require('mongoose');

//Creates a schema (Class in mongoose)
classroomReportSchema = new mongoose.Schema({
    classroom:{
        _id: String,
        name: String,
        
    },
    functionalCpuQnt:{
        type: Number,
        required: true,
    },
    nFunctionalCpuQnt: Number,
    cpuObservations: String,
    functionalMonitorsQnt:{
        type: Number,
        required: true,
    },
    nFunctionalMonitorsQnt: Number,
    monitorObservations: String,
    functionalMousesQnt:{
        type: Number,
        required: true,
    },
    nFunctionalMousesQnt: Number,
    mousesObs: String,
    functionalKeyboardsQnt:{
        type: Number,
        required: true,
    },
    nFunctionalKeyboardsQnt: Number,
    keyboardsObs: String,
    generalObs: String,
    createdAt: {
        type: Date,
        default: Date.now()
        //select: false //Hides from the output
      },
});

//Creates a model using the schema provided
const ClassroomReport = new mongoose.model('ClassroomReport', classroomReportSchema);

module.exports = ClassroomReport;