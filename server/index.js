const grpc = require('grpc');
const path = require('path')
global.Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/grpc');
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
const server = new grpc.Server();
const employeeServices = require('../db/employees');
const employeeModel = require("../models/employee")
const events = require('events')

var bookStream = new events.EventEmitter();
//define the callable methods that correspond to the methods defined in the protofile
server.addService(proto.EmployeesService.service, {

    List(call, callback) {
        //normla one-to-one call
        let allEmp = new employeeServices({});
        employeeModel.find({}, (err,res)=>{
            if(err) callback(err)
            callback(null, {employees:res})
        })

        /* stream
         allEmp.list(call)*/
    },

    Watch(call,callback){
        bookStream.on('new_emp',(res)=>{
            console.log('res',res)
            let newEmp = new employeeServices(res);
            employeeModel.findOne({employee_id:res}, (err,res)=>{
                console.log('found?',res)
                if(err) call.write(err);
                call.write(res);
            })
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

    update(call,callback){
        console.log('call',call)
        let payload={
            id:{
                employee_id:call.request.employee_id
            },
            fields:call.request.field,
            update: {...call.request.emp,employee_id:call.request.employee_id}
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
});

//Specify the IP and and port to start the grpc Server, no SSL in test environment
server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

//Start the server
server.start();
console.log('grpc server running on port:', '0.0.0.0:50050');
