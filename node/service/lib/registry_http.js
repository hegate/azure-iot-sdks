// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

var Base = require('azure-iot-common').Http;

/*Codes_SRS_NODE_IOTHUB_HTTP_05_001: [The Http constructor shall accept an object with three properties:
host - (string) the fully-qualified DNS hostname of an IoT hub
hubName - (string) the name of the IoT hub, which is the first segment of hostname
sharedAccessSignature - (string) a shared access signature generated from the credentials of a policy with the appropriate registry persmissions (read and/or write).]*/
function Http(config) {
  this._config = config;
  this._http = new Base();
}

Http.prototype.createDevice = function (path, deviceInfo, done) {
  var config = this._config;
  var httpHeaders = {
    'Authorization': config.sharedAccessSignature,
    'iothub-name': config.hubName,
    'Content-Type': 'application/json; charset=utf-8'
  };
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_002: [The createDevice method shall construct an HTTP request using information supplied by the caller, as follows:
  PUT <path>?api-version=<version> HTTP/1.1
  Authorization: <config.sharedAccessSignature>
  iothub-name: <config.hubName>
  Content-Type: application/json; charset=utf-8
  If-Match: *
  Host: <config.host>

  <deviceInfo>
  ]
  */
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_007: [If any registry operation method encounters an error before it can send the request, it shall invoke the done callback function and pass the standard JavaScript Error object with a text description of the error (err.message).]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_008: [When any registry operation method receives an HTTP response with a status code >= 300, it shall invoke the done callback function with the following arguments:
  err - the standard JavaScript Error object, with the Node.js http.ServerResponse object attached as the property response.]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_009: [When any registry operation receives an HTTP response with a status code < 300, it shall invoke the done callback function with the following arguments:
  err - null
  body – the body of the HTTP response
  response - the Node.js http.ServerResponse object returned by the transport]*/
  var request = this._http.buildRequest('PUT', path, httpHeaders, config.host, function (err, body, response) {
    if (!err) done (null, body, response);
    else {
      err.response = response;
      err.responseBody = body;
      done(err);
    }
  });
  request.write(JSON.stringify(deviceInfo));
  request.end();
};

Http.prototype.updateDevice = function (path, deviceInfo, done) {
  var config = this._config;
  var httpHeaders = {
    'Authorization': config.sharedAccessSignature,
    'iothub-name': config.hubName,
    'Content-Type': 'application/json; charset=utf-8',
    'If-Match': '*'
  };
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_003: [The updateDevice method shall construct an HTTP request using information supplied by the caller, as follows:
  PUT <path>?api-version=<version> HTTP/1.1
  Authorization: <config.sharedAccessSignature>
  iothub-name: <config.hubName>
  Content-Type: application/json; charset=utf-8
  Host: <config.host>

  <deviceInfo>
  ]
  */
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_007: [If any registry operation method encounters an error before it can send the request, it shall invoke the done callback function and pass the standard JavaScript Error object with a text description of the error (err.message).]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_008: [When any registry operation method receives an HTTP response with a status code >= 300, it shall invoke the done callback function with the following arguments:
  err - the standard JavaScript Error object, with the Node.js http.ServerResponse object attached as the property response.]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_009: [When any registry operation receives an HTTP response with a status code < 300, it shall invoke the done callback function with the following arguments:
  err - null
  body – the body of the HTTP response
  response - the Node.js http.ServerResponse object returned by the transport]*/
  var request = this._http.buildRequest('PUT', path, httpHeaders, config.host, function (err, body, response) {
    if (!err) done (null, body, response);
    else {
      err.response = response;
      err.responseBody = body;
      done(err);
    }
  });
  request.write(JSON.stringify(deviceInfo));
  request.end();
};

Http.prototype.getDevice = function (path, done) {
  var config = this._config;
  var httpHeaders = {
      'Authorization': config.sharedAccessSignature,
      'iothub-name': config.hubName,
  };
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_004: [The getDevice method shall construct an HTTP request using information supplied by the caller, as follows:
  GET <path>?api-version=<version> HTTP/1.1
  Authorization: <config.sharedAccessSignature>
  iothub-name: <config.hubName>
  Host: <config.host>
  ]
  */
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_007: [If any registry operation method encounters an error before it can send the request, it shall invoke the done callback function and pass the standard JavaScript Error object with a text description of the error (err.message).]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_008: [When any registry operation method receives an HTTP response with a status code >= 300, it shall invoke the done callback function with the following arguments:
  err - the standard JavaScript Error object, with the Node.js http.ServerResponse object attached as the property response.]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_009: [When any registry operation receives an HTTP response with a status code < 300, it shall invoke the done callback function with the following arguments:
  err - null
  body – the body of the HTTP response
  response - the Node.js http.ServerResponse object returned by the transport]*/
  var request = this._http.buildRequest('GET', path, httpHeaders, config.host, function (err, body, response) {
    if (!err) done (null, body, response);
    else {
      err.response = response;
      err.responseBody = body;
      done(err);
    }
  });
  request.end();
};

Http.prototype.listDevices = function (path, done) {
  var config = this._config;
  var httpHeaders = {
      'Authorization': config.sharedAccessSignature,
      'iothub-name': config.hubName,
  };
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_005: [The listDevices method shall construct an HTTP request using information supplied by the caller, as follows:
  GET <path>?api-version=<version> HTTP/1.1
  Authorization: <config.sharedAccessSignature>
  iothub-name: <config.hubName>
  Host: <config.host>
  ]
  */
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_007: [If any registry operation method encounters an error before it can send the request, it shall invoke the done callback function and pass the standard JavaScript Error object with a text description of the error (err.message).]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_008: [When any registry operation method receives an HTTP response with a status code >= 300, it shall invoke the done callback function with the following arguments:
  err - the standard JavaScript Error object, with the Node.js http.ServerResponse object attached as the property response.]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_009: [When any registry operation receives an HTTP response with a status code < 300, it shall invoke the done callback function with the following arguments:
  err - null
  body – the body of the HTTP response
  response - the Node.js http.ServerResponse object returned by the transport]*/
  var request = this._http.buildRequest('GET', path, httpHeaders, config.host, function (err, body, response) {
    if (!err) done (null, body, response);
    else {
      err.response = response;
      err.responseBody = body;
      done(err);
    }
  });
  request.end();
};

Http.prototype.deleteDevice = function (path, done) {
  var config = this._config;
  var httpHeaders = {
      'Authorization': config.sharedAccessSignature,
      'iothub-name': config.hubName,
      'If-Match': '*'
  };
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_006: [The deleteDevice method shall construct an HTTP request using information supplied by the caller, as follows:
  DELETE <path>?api-version=<version> HTTP/1.1
  Authorization: <config.sharedAccessSignature>
  iothub-name: <config.hubName>
  If-Match: *
  Host: <config.host>
  ]
  */
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_007: [If any registry operation method encounters an error before it can send the request, it shall invoke the done callback function and pass the standard JavaScript Error object with a text description of the error (err.message).]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_008: [When any registry operation method receives an HTTP response with a status code >= 300, it shall invoke the done callback function with the following arguments:
  err - the standard JavaScript Error object, with the Node.js http.ServerResponse object attached as the property response.]*/
  /*Codes_SRS_NODE_IOTHUB_HTTP_05_009: [When any registry operation receives an HTTP response with a status code < 300, it shall invoke the done callback function with the following arguments:
  err - null
  body – the body of the HTTP response
  response - the Node.js http.ServerResponse object returned by the transport]*/
  var request = this._http.buildRequest('DELETE', path, httpHeaders, config.host, function (err, body, response) {
    if (!err) done (null, body, response);
    else {
      err.response = response;
      err.responseBody = body;
      done(err);
    }
  });
  request.end();
};

module.exports = Http;