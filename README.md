# nodejs grpc api

## This tutorial will guide through the GRPC based API implementation at server and client side as well. Nodejs is used for client and server.


## Prerequisite:
1. Install nodejs https://nodejs.org/en/ please have node version 8.11 or above as I use es6 syntaxes.
2. Install mongodb
   - #### Windows: https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-windows/
   - #### Mac: https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-os-x/
3. launch your mongod services 
   - #### Windows https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition
   - #### Mac https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-os-x/#run-mongodb


## Steps: 
* Clone this repo : https://github.com/kuraby1389/nodejs_grpc.git
  * ``` git clone https://github.com/kuraby1389/nodejs_grpc.git```
* change the directory to nodejs_grpc
  * ``` cd nodejs_grpc ```
* RUN ```npm install```
* RUN ```npm rebuild```
* Now, start server [server-side] [terminal 1]
  * ```node server/index.js```
* Now, execute client stub [client-client] [terminal 2]
  * ``` node client/node/index.js ```
* in `client/browser/**` directory, refers to nodejs_grpc_react repo https://github.com/kuraby1389/nodejs_grpc_react instruction
  
To check mongodb records, launch mongo service in terminal and `show dbs` and you should have `grpc` collection and inside you will have `employees` and `users` documents (in nosql terms)


Open issue in this repo if you have any questions.
