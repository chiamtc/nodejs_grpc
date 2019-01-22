/**
 * @fileoverview gRPC-Web generated client stub for users
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.users = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.users.UsersClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.users.UsersPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.users.UsersClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.users.UsersClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.LoginReq,
 *   !proto.users.LoginRes>}
 */
const methodInfo_Users_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.LoginRes,
  /** @param {!proto.users.LoginReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.LoginRes.deserializeBinary
);


/**
 * @param {!proto.users.LoginReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.LoginRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.LoginRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UsersClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.Users/Login',
      request,
      metadata,
      methodInfo_Users_Login,
      callback);
};


/**
 * @param {!proto.users.LoginReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.LoginRes>}
 *     The XHR Node Readable Stream
 */
proto.users.UsersPromiseClient.prototype.login =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.login(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.Empty,
 *   !proto.users.WatchRes>}
 */
const methodInfo_Users_WatchSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.WatchRes,
  /** @param {!proto.users.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.WatchRes.deserializeBinary
);


/**
 * @param {!proto.users.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.WatchRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.WatchRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UsersClient.prototype.watchSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.Users/WatchSession',
      request,
      metadata,
      methodInfo_Users_WatchSession,
      callback);
};


/**
 * @param {!proto.users.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.WatchRes>}
 *     The XHR Node Readable Stream
 */
proto.users.UsersPromiseClient.prototype.watchSession =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.watchSession(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.users.LoginReq,
 *   !proto.users.SignupRes>}
 */
const methodInfo_Users_Register = new grpc.web.AbstractClientBase.MethodInfo(
  proto.users.SignupRes,
  /** @param {!proto.users.LoginReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.users.SignupRes.deserializeBinary
);


/**
 * @param {!proto.users.LoginReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.users.SignupRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.users.SignupRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.users.UsersClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/users.Users/Register',
      request,
      metadata,
      methodInfo_Users_Register,
      callback);
};


/**
 * @param {!proto.users.LoginReq} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.users.SignupRes>}
 *     The XHR Node Readable Stream
 */
proto.users.UsersPromiseClient.prototype.register =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.register(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.users;

