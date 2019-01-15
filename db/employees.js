let employeeModel = require('../models/employee')
let Employee = class {
    constructor(payload) {
        this.payload = payload;
    }

    list(cb) {
        const criteria = {};
        const projections = {
            _id: 0,
            __v: 0
        };
        const options = {
            lean: true
        };
        employeeModel.find(criteria, projections, options, cb);
    }

    add(cb) {
        //new employeeModel(this.payload).save(cb);
        employeeModel.create(this.payload, cb)
    }

    fetch(cb) {
        const criteria = this.payload.criteria;
        const projections = this.payload.projections;
        const options = this.payload.options;
        employeeModel.findOne(criteria, cb)
    }

    remove(cb) {
        const criteria = this.payload;
        employeeModel.findOneAndRemove(criteria, cb);
    }
};
module.exports = Employee;
