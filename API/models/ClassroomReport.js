class ClassroomReport {
    constructor(
        classroom,
        functionalCpuQnt,
        functionalMonitorsQnt,
        functionalMousesQnt,
        functionalKeyboardsQnt,
    ){
        this.classroom = classroom;
        this.functionalCpuQnt = functionalCpuQnt;
        this.nFunctionalCpuQnt = null;
        this.cpuObs = null;
        this.functionalMonitorsQnt = functionalCpuQnt;
        this.nFunctionalMonitorsQnt = null;
        this.monitorObs = null;
        this.functionalMousesQnt = functionalMousesQnt;
        this.nFunctionalMousesQnt = null;
        this.mousesObs = null;
        this.functionalKeyboardsQnt = functionalKeyboardsQnt;
        this.nFunctionalKeyboardsQnt = null
        this.keyboardsObs = null;
        this.generalObs = null;
    }

    addNonFunctionalCpus(qnt, obs){
        this.nFunctionalCpuQnt = qnt;
        this.cpuObs = obs;
    }

    addNonFunctionalMonitors(qnt,obs){
        this.nFunctionalMonitorsQnt = qnt;
        this.monitorObs = obs;
    }

    addNonFunctionalMouses(qnt,obs){
        this.nFunctionalMousesQnt = qnt;
        this.mousesObs = obs;
    }

    addNonFunctionalKeyboards(qnt,obs){
        this.nFunctionalKeyboardsQnt = qnt;
        this.keyboardsObs = obs;
    }

    addGeneralObs(obs){
        this.generalObs = obs;
    }


}