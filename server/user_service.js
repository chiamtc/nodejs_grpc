const userModel = require("../models/user");
const events = require('events');
const path = require('path')
const grpc = require('grpc');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    path.join(__dirname + '/../proto/user.proto'),
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const proto = grpc.loadPackageDefinition(packageDefinition).users;
var bookStream = new events.EventEmitter();

function allServices() {
    return {
        Login(call, callback) {
            userModel.findOne({email: call.request.email}, (err, res) => {
                if (err) callback(err)
                if (!bcrypt.compareSync(call.request.password, res.password)) {
                    callback({
                        code: 400,
                        message: "invalid input",
                        status: grpc.status.INVALID_ARGUMENT
                    })
                } else {
                    const meta = new grpc.Metadata();
                    const token = jwt.sign({user: res}, process.env.SECRET, {expiresIn: 7200});
                     meta.add('token', token);
                     call.sendMetadata(meta)
                    callback(null, {token})
                }
            })
        },
        Register(call, callback) {
            let emp = {
                email: call.request.email,
                password: bcrypt.hashSync(call.request.password, process.env.SALT)
            };

            userModel.create(emp, (err, res) => {
                if (err) callback(err)
                callback(null, res);
            });
        },
        WatchSession(call, callback) {
            jwt.verify(call.metadata._internal_repr.token[0], process.env.SECRET, (err, res) => {
                if (err) callback('error on auth', {token: null})
                const user = {
                    id: res.user._id,
                    email: res.user.email,
                    token: call.metadata._internal_repr.token[0],
                    iat: res.iat,
                    exp: res.exp
                }
                callback(null, user)
            })
        }
    }
}

function userService() {
    return {protoService: proto.Users.service, services: allServices()}
}

exports.userService = userService;
