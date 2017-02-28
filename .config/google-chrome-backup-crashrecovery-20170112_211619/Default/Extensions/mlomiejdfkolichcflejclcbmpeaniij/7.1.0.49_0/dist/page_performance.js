if(typeof browser!=='undefined'){chrome=browser;}
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var msg = require('./utils/msg')('page_performance'),
    sendMessage = msg.sendMessage,
    log = msg.log;

var PageInfo = function (window, document, undefined) {
	var state = document.readyState;
	var seenChildren = [];
	var adStandards = {
		standards: {
			31: [88],
			50: [300, 320, 924],
			60: [120, 234, 300, 468, 954],
			66: [970],
			90: [120, 728, 990],
			100: [300],
			120: [290],
			125: [125, 300, 740],
			150: [180, 490],
			160: [300],
			177: [225],
			200: [200, 410],
			240: [120],
			250: [250, 300, 970],
			280: [336],
			300: [720],
			310: [300],
			360: [640],
			400: [240],
			480: [640],
			600: [120, 160, 300, 425],
			850: [336]
		},
		exists: function (height, width) {
			if (!this.standards.hasOwnProperty(height)) {
				return false;
			}
			if (this.standards[height].indexOf(width) === -1) {
				return false;
			}
			return true;
		}
	};

	var timingEvents = {
		"navigationStart": "ns",
		"unloadEventStart": "ues",
		"unloadEventEnd": "uee",
		"redirectStart": "rds",
		"redirectEnd": "rde",
		"fetchStart": "fs",
		"domainLookupStart": "dls",
		"domainLookupEnd": "dle",
		"connectStart": "cs",
		"connectEnd": "ce",
		"secureConnectionStart": "scs",
		"requestStart": "rqs",
		"responseStart": "rps",
		"responseEnd": "rpe",
		"domLoading": "dl",
		"domInteractive": "di",
		"domContentLoadedEventStart": "dcles",
		"domContentLoadedEventEnd": "dclee",
		"domComplete": "dc",
		"loadEventStart": "les",
		"loadEventEnd": "lee"
	};

	var markChildren = function (ele) {
		for (var n = 0; n < ele.length; n++) {
			if (ele[n].hasChildNodes()) {
				markChildren(ele[n].childNodes);
			}
			seenChildren.push(ele[n]);
		}
	};

	var processPerformanceAPI = function () {
		let api = window.performance,
		    processed = {
			t: {},
			n: {
				t: api.navigation.type,
				r: api.navigation.redirectCount
			}
		};

		for (let event in timingEvents) {
			if (timingEvents.hasOwnProperty(event)) {
				processed.t[timingEvents[event]] = api.timing[event];
			}
		}

		return JSON.stringify(processed);
	};

	var analyzePageInfo = function () {
		var el,
		    i,
		    h,
		    w,
		    pageLatency = 0,
		    spots = 0,
		    d = document,
		    html = d.querySelectorAll('iframe, div, img, object');

		for (i = 0; i < html.length; i++) {
			el = html[i];

			if (seenChildren.indexOf(el) !== -1) {
				continue;
			}
			h = parseInt(window.getComputedStyle(el).getPropertyValue('height'), 10);
			w = parseInt(window.getComputedStyle(el).getPropertyValue('width'), 10);

			if (adStandards.exists(h, w)) {
				markChildren(el.childNodes);

				spots++;
			}
		}

		pageLatency = performance.timing.domContentLoadedEventStart - performance.timing.requestStart;

		log("Sending latency from page_performance", pageLatency);

		var host = d.location.host,
		    pathname = d.location.pathname,
		    protocol = d.location.protocol;
		sendMessage('recordPageInfo', {
			domain: protocol + "//" + host + pathname,
			spots: spots,
			latency: pageLatency,
			loadEventEnd: window.performance.timing.loadEventEnd,
			performanceAPI: processPerformanceAPI()
		});
		spots = null;
		seenChildren = null;
	};

	var _initialize = function () {
		if (state !== "complete") {
			document.onreadystatechange = function () {
				state = document.readyState;
				if (state === "complete") {
					analyzePageInfo();
				}
			};
		} else {
			analyzePageInfo();
		}
	};

	return {
		init: function () {
			_initialize();
		}
	};
}(window, document);

PageInfo.init();

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


//# sourceMappingURL=page_performance.js.map
