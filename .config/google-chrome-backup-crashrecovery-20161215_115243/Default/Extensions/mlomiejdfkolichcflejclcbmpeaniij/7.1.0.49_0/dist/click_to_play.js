if(typeof browser!=='undefined'){chrome=browser;}
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var msg = require('./utils/msg')('click_to_play'),
    sendMessage = msg.sendMessage,
    onMessage = msg.onMessage,
    log = msg.log;

var Click2Play = function (win, doc) {
	var C2P_DATA = {};

	var createEl = function (type) {
		return doc.createElement(type);
	};

	var appendChild = function (parent, ...args) {
		for (var i = 0; i < args.length; i++) {
			parent.appendChild(args[i]);
		}
	};

	var buildC2P = function (c2pFrame, c2pAppDef, html) {
		c2pFrame.addEventListener('load', function () {
			var idoc = c2pFrame.contentDocument;

			idoc.documentElement.innerHTML = html;

			if (c2pAppDef.button) {
				c2pFrame.style.width = '30px';
				c2pFrame.style.height = '19px';
				c2pFrame.style.border = '0px';
			} else {
				c2pFrame.style.width = '100%';
				c2pFrame.style.border = '1px solid #ccc';
				c2pFrame.style.height = '80px';
			}

			if (c2pAppDef.frameColor) {
				c2pFrame.style.background = c2pAppDef.frameColor;
			}

			idoc.getElementById('action-once').addEventListener('click', function (e) {
				sendMessage('processC2P', {
					action: 'once',
					app_ids: c2pAppDef.allow
				}, function (result) {
					doc.location.reload();
				});

				e.preventDefault();
			}, true);

			if (!c2pAppDef.button) {
				idoc.getElementById('action-always').addEventListener('click', function (e) {
					sendMessage('processC2P', {
						action: 'always',
						app_ids: c2pAppDef.allow
					}, function (result) {
						doc.location.reload();
					});

					e.preventDefault();
				}, true);
			}
		}, false);
	};

	var applyC2P = function (app_id, c2p_app, html) {
		c2p_app.forEach(function (c2pAppDef, idx) {

			var els = doc.querySelectorAll(c2pAppDef.ele);
			for (var i = 0, num_els = els.length; i < num_els; i++) {
				var el = els[i];

				var c2pFrame = createEl('iframe');
				buildC2P(c2pFrame, c2pAppDef, html[idx]);
				c2pFrame.style.display = 'inline-block';

				if (c2pAppDef.attach && c2pAppDef.attach === 'parentNode' || el.nodeName === 'IFRAME') {
					if (el.parentNode && el.parentNode.nodeName !== 'BODY' && el.parentNode.nodeName !== 'HEAD') {
						el.parentNode.replaceChild(c2pFrame, el);
						return;
					}
				}

				el.textContent = '';

				el.style.display = 'inline-block';
				appendChild(el, c2pFrame);
			}
		});
	};

	var _initialize = function () {
		onMessage.addListener(function (request, sender, sendResponse) {
			var name = request.name,
			    msg = request.message;

			log("click_to_play.js received message", name);

			if (name === 'c2p') {
				C2P_DATA[msg.app_id] = [msg.app_id, msg.data, msg.html];

				if (doc.readyState === 'complete') {
					applyC2P.apply(this, C2P_DATA[msg.app_id]);
				}
			}

			sendResponse();
			return true;
		});

		window.addEventListener('load', function () {
			for (var app_id in C2P_DATA) {
				if (C2P_DATA.hasOwnProperty(app_id)) {
					applyC2P.apply(this, C2P_DATA[app_id]);
				}
			}
		}, { capture: false, passive: true });
	};

	return {
		init: function () {
			_initialize();
		}
	};
}(window, document);

Click2Play.init();

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


//# sourceMappingURL=click_to_play.js.map
