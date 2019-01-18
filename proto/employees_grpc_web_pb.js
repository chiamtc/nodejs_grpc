/**
 * @fileoverview gRPC-Web generated client stub for employees
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.employees = require('./employees_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.employees.EmployeesClient =
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
proto.employees.EmployeesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.employees.EmployeesClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.employees.EmployeesClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employees.Empty,
 *   !proto.employees.EmployeeList>}
 */
const methodInfo_Employees_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employees.EmployeeList,
  /** @param {!proto.employees.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.employees.EmployeeList.deserializeBinary
);


/**
 * @param {!proto.employees.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employees.EmployeeList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employees.EmployeeList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employees.Employees/List',
      request,
      metadata,
      methodInfo_Employees_List,
      callback);
};


/**
 * @param {!proto.employees.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employees.EmployeeList>}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesPromiseClient.prototype.list =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.list(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employees.Employee,
 *   !proto.employees.Employee>}
 */
const methodInfo_Employees_Insert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employees.Employee,
  /** @param {!proto.employees.Employee} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.employees.Employee.deserializeBinary
);


/**
 * @param {!proto.employees.Employee} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employees.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employees.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employees.Employees/Insert',
      request,
      metadata,
      methodInfo_Employees_Insert,
      callback);
};


/**
 * @param {!proto.employees.Employee} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employees.Employee>}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesPromiseClient.prototype.insert =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.insert(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employees.EmployeeId,
 *   !proto.employees.Employee>}
 */
const methodInfo_Employees_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employees.Employee,
  /** @param {!proto.employees.EmployeeId} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.employees.Employee.deserializeBinary
);


/**
 * @param {!proto.employees.EmployeeId} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employees.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employees.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employees.Employees/Get',
      request,
      metadata,
      methodInfo_Employees_Get,
      callback);
};


/**
 * @param {!proto.employees.EmployeeId} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employees.Employee>}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesPromiseClient.prototype.get =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.get(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employees.EmployeeId,
 *   !proto.employees.Employee>}
 */
const methodInfo_Employees_Remove = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employees.Employee,
  /** @param {!proto.employees.EmployeeId} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.employees.Employee.deserializeBinary
);


/**
 * @param {!proto.employees.EmployeeId} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employees.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employees.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employees.Employees/Remove',
      request,
      metadata,
      methodInfo_Employees_Remove,
      callback);
};


/**
 * @param {!proto.employees.EmployeeId} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employees.Employee>}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesPromiseClient.prototype.remove =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.remove(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employees.EmployeeUpdate,
 *   !proto.employees.Employee>}
 */
const methodInfo_Employees_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employees.Employee,
  /** @param {!proto.employees.EmployeeUpdate} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.employees.Employee.deserializeBinary
);


/**
 * @param {!proto.employees.EmployeeUpdate} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.employees.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.employees.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/employees.Employees/Update',
      request,
      metadata,
      methodInfo_Employees_Update,
      callback);
};


/**
 * @param {!proto.employees.EmployeeUpdate} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.employees.Employee>}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesPromiseClient.prototype.update =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.update(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.employees.Empty,
 *   !proto.employees.EmployeeList>}
 */
const methodInfo_Employees_Watch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.employees.EmployeeList,
  /** @param {!proto.employees.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.employees.EmployeeList.deserializeBinary
);


/**
 * @param {!proto.employees.Empty} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.employees.EmployeeList>}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesClient.prototype.watch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/employees.Employees/Watch',
      request,
      metadata,
      methodInfo_Employees_Watch);
};


/**
 * @param {!proto.employees.Empty} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.employees.EmployeeList>}
 *     The XHR Node Readable Stream
 */
proto.employees.EmployeesPromiseClient.prototype.watch =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/employees.Employees/Watch',
      request,
      metadata,
      methodInfo_Employees_Watch);
};


module.exports = proto.employees;

