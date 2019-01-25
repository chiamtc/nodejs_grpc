let employeeModel = require('../models/employee')
const _ = require('lodash')
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
      /*Using stream , employees.proto has to return as stream

        employeeModel.find(criteria, projections, options, (err,res)=>{
            if(err) cb.write(err)
            _.each(res, (res)=>{
                cb.write(res)
            })
        });*/
    }

    update(cb){
        console.log('payload',this.payload)
        employeeModel.findOneAndUpdate(this.payload.id, this.payload.update, {new:true}, cb);
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
