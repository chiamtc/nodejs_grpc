/**
 *
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const {List, Empty, Employee, Watch} = require('../../proto/employees_pb.js');
const {EmployeesClient} = require('../../proto/employees_grpc_web_pb.js');

var client = new EmployeesClient('http://' + window.location.hostname + ':8080',
    null, null);

console.log('here?')


var request = new Empty();
client.list(request, {}, function (err, message) {
    console.log('err', err)
    console.log('message', message)
});

var watcher = client.watch(request, {});
watcher.on('data', (response) => {
    console.log('watching?', response)
    //console.log('watching?', response.getEmployeesList())
    console.log('watching?', response.getEmployeeId())
    console.log('watching?', response.toObject())
})


var newEmp = new Employee();
newEmp.setName('test10');
newEmp.setEmail('asdas@sad.com')
newEmp.setEmployeeId(parseInt(Math.random() * 1000000))
console.log('newEmp', newEmp)
setTimeout(() => {
    client.insert(newEmp, {}, function (err, message) {
        console.log('insert err', err)
        console.log('insert message', message)
    });
}, 5000);
// simple unary call
/*
var request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
  console.log('edited',response.getMessage());
});


// server streaming call
var streamRequest = new RepeatHelloRequest();
streamRequest.setName('World');
streamRequest.setCount(5);

var stream = client.sayRepeatHello(streamRequest, {});
stream.on('data', (response) => {
  console.log('repeat', response.getMessage());
});
*/


// deadline exceeded
/*var deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 1);

client.sayHelloAfterDelay(request, {deadline: deadline.getTime()},
  (err, response) => {
    console.log('Got error, code = ' + err.code +
                ', message = ' + err.message);
  });*/
