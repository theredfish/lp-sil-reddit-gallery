/**
 * Require libraries.
 * Node package Browserify help us to do that.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const Fetch = require('node-fetch');

/**
 * Main React component.
 */
ReactDOM.render(
  <h1>Hello all! React test</h1>,
  document.getElementById('example')
);


/**
 * Check status from HTTP response and return response or HTTP error.
 *
 * Response status can be 0 with fetch pol if HTTP protocol is "file:"
 * See https://github.com/github/fetch/issues/186#issuecomment-127479120
 */
function checkStatus(response) {
  if (response.status === 0 && window.location.protocol === 'file:') {
    console.log('checked', response);
    return response;
  } else if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

/**
 * Get JSON from HTTP response.
 */
function parseJSON(response) {
  return response.json()
}

/**
 * Fetch polyfill for non supporting browsers
 * @see https://github.com/github/fetch
 * @see https://github.com/bitinn/node-fetch (currently in use)
 *
 * "For now, unfortunate as it is, file and ftp URLs are left
 * as an exercise for the reader. When in doubt, return a network error."
 * @see https://fetch.spec.whatwg.org/#basic-fetch (file and ftp parts)
 */
Fetch('https://www.reddit.com/hot.json')
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    console.log('request succeeded with JSON response', data)
  }).catch(function(error) {
    console.log('request failed', error)
  });
