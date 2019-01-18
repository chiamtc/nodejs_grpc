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

//1. ? src: https://grpc.io/docs/guides/auth.html#with-server-authentication-ssltls-6
// const ssl_cert = grpc.credentials.createSsl(root_certs_path)

//2. ? src :https://github.com/jSherz/node-grpc-mutual-auth-example/blob/master/server.js
//      blogpost: https://jsherz.com/grpc/node/nodejs/mutual/authentication/ssl/2017/10/27/grpc-node-with-mutual-auth.html
/*const ssl_cert = grpc.ServerCredentials.createSsl({
    rootCerts: fs.readFileSync(path.join(process.cwd(), "server-certs", "Snazzy_Microservices.crt")),
    keyCertPairs: {
        privateKey: fs.readFileSync(path.join(process.cwd(), "server-certs", "login.services.widgets.inc.key")),
        certChain: fs.readFileSync(path.join(process.cwd(), "server-certs", "login.services.widgets.inc.crt"))
    },
    checkClientCertificate: true
})*/
const client = new proto.Employees('localhost:8080', grpc.credentials.createInsecure());

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


/*
client.List({}, (err,res)=>{
    console.log('err',err)
    console.log('res',res)
});
*/

/*setTimeout(()=>{
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
},5000);*/


