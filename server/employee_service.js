const employeeServices = require('../db/employees');
const employeeModel = require("../models/employee");
const events = require('events');
const path = require('path')
const grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    path.join(__dirname + '/../proto/employees.proto'),
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const proto = grpc.loadPackageDefinition(packageDefinition).employees;

var bookStream = new events.EventEmitter();

function allServices() {
    return {

        List(call, callback) {
            //normla one-to-one call
            let allEmp = new employeeServices({});
            employeeModel.find({}, (err, res) => {
                if (err) callback(err)
                callback(null, {employees: res})
            })

            /* stream
             allEmp.list(call)*/
        },

        Watch(call) {
            let allEmp = new employeeServices({});
            employeeModel.find({}, (err, res) => {
                //console.log('res',res)
                if (err) call.write(err)

                call.write({employees: res})
            })

            bookStream.on('new_emp', (res) => {
                let newEmp = new employeeServices(res);
                employeeModel.find({}, (err, res) => {

                    if (err) call.write(err);
                    call.write({employees: res});
                })
                /*.then(() => {
                                    call.end();
                                })*/

            })
        },

        get(call, callback) {
            let payload = {
                criteria: {
                    employee_id: call.request.employee_id
                },
                projections: {
                    _id: 0, __v: 0
                },
                options: {
                    lean: true
                }
            };
            let emp = new employeeServices(payload);
            emp.fetch(callback);
        },

        update(call, callback) {
            let payload = {
                id: {
                    employee_id: call.request.employee_id
                },
                fields: call.request.field,
                update: {...call.request.emp, employee_id: call.request.employee_id}
            }
            let emp = new employeeServices(payload);
            emp.update(callback)
        },

        Insert(call, callback) {
            let emp = new employeeServices({
                employee_id: call.request.employee_id,
                name: call.request.name,
                email: call.request.email,
            });
            emp.add(callback);
            bookStream.emit('new_emp', call.request.employee_id)
        },

        remove(call, callback) {
            const criteria = {
                employee_id: call.request.employee_id,
            };
            let emp = new employeeServices(criteria);
            emp.remove(callback);
        },
    }
}

function employeeService() {
    return {protoService: proto.Employees.service, services: allServices()}
}

exports.employeeService = employeeService;
