const grpc = require('grpc');
const _ = require('lodash')
global.Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/grpc');
const employeeService = require('./employee_service');
const userService = require('./user_service');
//define the callable methods that correspond to the methods defined in the protofile

function preHook(context,call){
    console.log('context',context)
    console.log('call',call)
}

function getServer() {
    const server = new grpc.Server();
    server.addService(employeeService.employeeService().protoService, employeeService.employeeService().services);
    server.addService(userService.userService().protoService, userService.userService().services);
    return server
}

if (require.main === module) {
    var server = getServer();
    server.bind('0.0.0.0:9090', grpc.ServerCredentials.createInsecure());
    server.start();
}

exports.getServer = getServer;
console.log('grpc server running on port:', '0.0.0.0:9090');
