if(typeof browser!=='undefined'){chrome=browser;}
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const msg = require('./utils/msg')('settings_redirect'),
      sendMessage = msg.sendMessage,
      onMessage = msg.onMessage;

window.addEventListener('load', () => {
  onMessage.addListener(function (request, sender, sendResponse) {
    if (request.name === 'gotSettingsUrl') {
      window.location = request.message ? request.message : 'https://extension.ghostery.com/en/settings';
    }
  });

  sendMessage('getSettingsUrl', '', () => {});
});

},{"./utils/msg":2}],2:[function(require,module,exports){
'use strict';

module.exports = function (origin) {
	var onMessage = chrome.runtime && chrome.runtime.onMessage;
	var DEBUG = chrome.runtime.getManifest().debug || false;

	function sendMessageInPromise(name, message) {
		return new Promise(function (resolve, reject) {
			if (chrome.runtime && chrome.runtime.sendMessage) {
				chrome.runtime.sendMessage({
					origin: origin,
					name: name,
					message: message
				}, function (response) {
					if (chrome.runtime.lastError) {
						reject(new Error(chrome.runtime.lastError));
					}
					resolve(response);
				});
			} else {
				reject(new Error('could not send message'));
			}
		});
	};

	function sendMessage(name, message, callback) {
		log(origin + ' sending to handler', name);
		return _sendMessageToHandler(name, origin, message, callback);
	};

	function sendMessageToBackground(name, message, callback) {
		log(origin + ' sending to background', name);
		return _sendMessageToHandler(name, '', message, callback);
	};

	function log(...args) {
		if (!DEBUG) {
			return false;
		}

		var errors = args.toString().toLowerCase().indexOf('error');

		args.unshift(new Date().toLocaleTimeString() + '\t');

		try {
			if (errors !== -1) {
				console.error.apply(console, args);
			} else {
				console.log.apply(console, args);
			}
		} catch (e) {
			if (errors !== -1) {
				console.error(args);
			} else {
				console.log(args);
			}
		}
	}

	function _sendMessageToHandler(name, origin, message, callback) {
		log('_sendMessageToHandler:' + origin + ' sending to background', name, chrome);

		var fallback = function () {};
		callback = callback ? callback : fallback;
		return (chrome.runtime && chrome.runtime.sendMessage)({
			origin: origin,
			name: name,
			message: message
		}, callback);
	};

	return {
		sendMessageInPromise: sendMessageInPromise,
		onMessage: onMessage,
		DEBUG: DEBUG,
		sendMessage: sendMessage,
		sendMessageToBackground: sendMessageToBackground,
		log: log
	};
};

},{}]},{},[1])


//# sourceMappingURL=settings_redirect.js.map
