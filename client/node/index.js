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

/*
streaming call
const call = client.List({});
call.on('data',function(a){
    console.log('a',a)
})

call.on('end', function(end){
    console.log('ended',end)
})*/


/*client.List({}, (error, response) => {
	if (!error) {
		console.log("Response : ", response)
	}
	else {
		console.log("Error:", error.message);
	}
});*/

/*client.update({
    employee_id: 418880,
    field: ['name','email'],
    emp:{name:'asd',email:'total@ta.com'}
}, (err, res) => {
    if (!err) {
        console.log("Response : ", res)
    }
    else {
        console.log("Error:", err.message);
    }
})*/



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
const watch = client.Watch({});
watch.on('data', function(newly){
    console.log('newly',newly)
})


setTimeout(()=>{
client.Insert({
    employee_id: parseInt(Math.random() * 1000000),
    name: "tat cheng",
    email: "tat.c@gmail.com"
}, (error, response) => {
    if (
        !error
    ) {
        console.log("Response : ", response)
    }
    else {
        console.log("Error:", error);
    }
});
},5000);


