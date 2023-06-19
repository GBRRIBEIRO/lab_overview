const changelogItem = require('ChangelogItem');
class Report {

    constructor() {
        this.createdOn = Date.now().toString();
        this.changelog = [new changelogItem('1','Gabriel', Date.now().toString())];
        this.classRoomsReports = [];
    }

    addClassRoomReport(classRoomReport) {
        this.classRoomsReports.push(classRoomReport);
        this.didChange();
    }

    didChange(){
        this.changelog.push(new changelogItem('1','Gabriel', Date.now().toString()));
    }
}

module.exports = Report;