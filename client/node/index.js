const grpc = require('grpc');
const path = require('path')
const protoPath = require('path').join(__dirname, '../..', 'proto');
//console.log("proto path : ", protoPath)
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    path.join(__dirname + '/../../proto/employees.proto'),
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const proto = grpc.loadPackageDefinition(packageDefinition).employees;

//Create a new client instance that binds to the IP and port of the grpc server.
const client = new proto.EmployeesService('localhost:50050', grpc.credentials.createInsecure());

client.List({}, (error, response) => {
	if (!error) {
		console.log("Response : ", response)
	}
	else {
		console.log("Error:", error.message);
	}
});

/*client.get({
	employee_id: 695879
}, (error, response) => {
	if (
		!error
	) {
		console.log("Response : ", response)
	}
	else {
		console.log("Error:", error.message);
	}
});*/

/*client.remove({
	employee_id: 854290
}, (error, response) => {
	if (
		!error
	) {
		console.log("Response : ", response)
	}
	else {
		console.log("Error:", error.message);
	}
});*/

/*client.Insert({
    employee_id: parseInt(Math.random() * 1000000),
    name: "Amulya Kashyap",
    email: "bruh@gmail.com"
}, (error, response) => {
    if (
        !error
    ) {
        console.log("Response : ", response)
    }
    else {
        console.log("Error:", error);
    }
});*/
