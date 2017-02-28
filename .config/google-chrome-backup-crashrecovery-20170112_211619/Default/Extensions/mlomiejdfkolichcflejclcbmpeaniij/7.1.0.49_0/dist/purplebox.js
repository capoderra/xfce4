if(typeof browser!=='undefined'){chrome=browser;}
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var msg = require('./utils/msg')('purplebox'),
    sendMessage = msg.sendMessage,
    onMessage = msg.onMessage;

var Ghostery = function (win, doc) {
	var TIMEOUTS = {
		box_position_timeout: 0,
		box_destroy_timeout: 9999,
		box_none_timeout: 9999
	},
	    BOX_CONF = {},
	    BOX_CREATED = false,
	    BOX_TRANSLATIONS = {},
	    HEIGHT = 0,
	    PREV_HEIGHT = 0;

	var createEl = function (type) {
		return doc.createElement(type);
	};

	var appendChild = function (parent, ...args) {
		for (var i = 0; i < args.length; i++) {
			parent.appendChild(args[i]);
		}
	};

	var destroyPurpleBox = function () {
		var ghostery = doc.getElementById('ghostery-purple-box');
		if (ghostery) {
			ghostery.parentNode.removeChild(ghostery);
		}
		clearTimeout(TIMEOUTS.box_position_timeout);
		clearTimeout(TIMEOUTS.box_destroy_timeout);
		clearTimeout(TIMEOUTS.box_none_timeout);
		BOX_CREATED = false;
	};

	var resetDestroyTimer = function () {
		clearTimeout(TIMEOUTS.box_destroy_timeout);
		if (BOX_CONF.alert_bubble_timeout > 0) {
			TIMEOUTS.box_destroy_timeout = setTimeout(function () {
				destroyPurpleBox();
			}, 1000 * BOX_CONF.alert_bubble_timeout);
		}
	};

	var handleSizeChangeClick = function (e) {
		var ghostery = doc.getElementById('ghostery-purple-box');
		if (ghostery) {
			BOX_CONF.alert_expanded = !BOX_CONF.alert_expanded;
			doSizeChange();
			if (e.originalEvent.detail > 1) {
				return;
			}
		}
	};

	var doSizeChange = function () {
		var ghostery = doc.getElementById('ghostery-purple-box'),
		    background = doc.getElementById('ghostery-pb-background'),
		    box = doc.getElementById('ghostery-box'),
		    windowHeight = doc.documentElement.clientHeight * 0.85 - 35;

		resetDestroyTimer();
		sendMessage('updateAlertConf', BOX_CONF);
		if (ghostery.classList.contains('ghostery-expanded')) {
			ghostery.classList.remove('ghostery-expanded');
			ghostery.classList.add('ghostery-collapsing');

			box.addEventListener('transitionend', function a(e) {
				e.target.removeEventListener('transitionend', a);
				ghostery.classList.remove('ghostery-collapsing');
				ghostery.classList.add('ghostery-collapsed');
			});
		} else {
			if (ghostery.classList.contains('ghostery-none')) {
				clearTrackersNone();
			}

			ghostery.classList.remove('ghostery-collapsed');
			ghostery.classList.add('ghostery-expanding');
			box.addEventListener('transitionend', function a(e) {
				e.target.removeEventListener('transitionend', a);
				ghostery.classList.remove('ghostery-expanding');
				ghostery.classList.add('ghostery-expanded');

				background.style.height = HEIGHT + "px";
				if (PREV_HEIGHT === HEIGHT && HEIGHT === windowHeight) {
					background.style.setProperty('overflow-y', 'auto');
				}
			});
		}

		setBoxHeights();
	};

	var setBoxHeights = function () {
		var height,
		    windowHeight,
		    listHeight,
		    digits,
		    list = doc.getElementById('ghostery-trackerList'),
		    ghostery = doc.getElementById('ghostery-purple-box'),
		    background = doc.getElementById('ghostery-pb-background'),
		    title = doc.getElementById('ghostery-title'),
		    box = doc.getElementById('ghostery-box'),
		    count = doc.getElementById('ghostery-count');

		listHeight = list.children.length * 18 + 20;
		windowHeight = doc.documentElement.clientHeight * 0.85 - 35;
		height = Math.min(listHeight, windowHeight);
		HEIGHT = height;

		if (ghostery.classList.contains('ghostery-expanded')) {
			background.style.setProperty('height', HEIGHT + 'px');
			if (PREV_HEIGHT !== HEIGHT) {
				background.style.setProperty('overflow-y', 'hidden');
			} else {
				if (HEIGHT === listHeight && list.children.length <= 9) {
					background.style.setProperty('overflow-y', 'hidden');
				} else {
					background.style.setProperty('overflow-y', 'auto');
				}
			}
		}

		if (ghostery.classList.contains('ghostery-expanding') || ghostery.classList.contains('ghostery-expanded')) {
			digits = count.textContent.length;
			if (digits === 1) {
				title.style.setProperty('left', '25px');
			} else if (digits === 2) {
				title.style.setProperty('left', '30px');
			} else if (digits === 3) {
				title.style.setProperty('left', '35px');
			}

			if (count.textContent === "0" && HEIGHT === listHeight) {
				setTimeout(function () {
					title.textContent = count.textContent === '1' ? BOX_TRANSLATIONS.tracker : BOX_TRANSLATIONS.trackers;
					if (BOX_CONF.alert_expanded && count.textContent === "0") {
						ghostery.classList.remove('ghostery-expanded');
						ghostery.classList.add('ghostery-collapsing');
						background.style.setProperty('height', '0px');
						box.addEventListener('transitionend', function a(e) {
							e.target.removeEventListener('transitionend', a);
							ghostery.classList.remove('ghostery-collapsing');
							ghostery.classList.add('ghostery-collapsed');
						});
					}
				}, 3000);
			}

			if (BOX_CONF.alert_bubble_pos.indexOf('l') >= 0) {
				ghostery.classList.remove('ghostery-right');
				ghostery.classList.add('ghostery-left');
			} else {
				ghostery.classList.remove('ghostery-left');
				ghostery.classList.add('ghostery-right');
			}

			if (BOX_CONF.alert_bubble_pos.indexOf('t') >= 0) {
				ghostery.classList.remove('ghostery-bottom');
				ghostery.classList.add('ghostery-top');
			} else {
				ghostery.classList.remove('ghostery-top');
				ghostery.classList.add('ghostery-bottom');
			}
		} else {
			background.style.setProperty('height', '');
			if (BOX_CONF.alert_bubble_pos.indexOf('l') >= 0) {
				ghostery.classList.remove('ghostery-right');
				ghostery.classList.add('ghostery-left');
			} else {
				ghostery.classList.remove('ghostery-left');
				ghostery.classList.add('ghostery-right');
			}

			if (BOX_CONF.alert_bubble_pos.indexOf('t') >= 0) {
				ghostery.classList.remove('ghostery-bottom');
				ghostery.classList.add('ghostery-top');
			} else {
				ghostery.classList.remove('ghostery-top');
				ghostery.classList.add('ghostery-bottom');
			}
		}

		PREV_HEIGHT = height;
	};

	var handleNewTrackers = function (apps) {
		var n,
		    ghostery = doc.getElementById('ghostery-purple-box'),
		    box = doc.getElementById('ghostery-box'),
		    count = doc.getElementById('ghostery-count'),
		    trackersText = doc.getElementById('ghostery-title'),
		    noIcon = createEl('span'),
		    list = doc.getElementById('ghostery-trackerList');

		noIcon.id = "ghostery-no-tracker";
		if (apps.length > 0) {
			clearTrackersNone();
			ghostery.classList.remove('ghostery-none');
			count.textContent = apps.length;
			trackersText.textContent = count.textContent === '1' ? BOX_TRANSLATIONS.tracker : BOX_TRANSLATIONS.trackers;
		} else {
			count.textContent = '0';
		}

		list.textContent = '';
		for (n = 0; n < apps.length; n++) {
			var icon,
			    dup,
			    liDiv = createEl("div"),
			    tracker = createEl('span');

			liDiv.classList.add("ghostery-trackerContainer");
			tracker.classList.add("ghostery-tracker");
			if (apps[n].hasLatencyIssue) {
				icon = document.getElementById('ghostery-slow-tracker');
				icon.style.opacity = "1.0";
			} else if (apps[n].hasCompatibilityIssue) {
				icon = document.getElementById('ghostery-breaking-tracker');
				icon.style.opacity = "1.0";
			} else if (apps[n].hasInsecureIssue) {
				icon = document.getElementById('ghostery-non-secure-tracker');
				icon.style.opacity = "1.0";
			} else if (apps[n].hasInsecureIssue && apps[n].hasLatencyIssue) {
				icon = document.getElementById('ghostery-non-secure-slow-tracker');
			} else {
				icon = noIcon;
			}
			if (icon.id !== "ghostery-no-tracker") {
				box.classList.add('ghostery-icons-found');
			}
			if (apps[n].blocked) {
				liDiv.classList.add('ghostery-tracker-disabled');
			} else {
				liDiv.classList.remove('ghostery-tracker-disabled');
			}
			dup = icon.cloneNode(true);
			dup.classList.remove('ghostery-pb-tracker');
			dup.classList.add('ghostery-pb-tracker-list');
			if (dup.id === 'ghostery-slow-tracker' || dup.id === 'ghostery-non-secure-tracker' || dup.id === 'ghostery-non-secure-slow-tracker') {
				dup.classList.add('ghostery-account-gated');
				if (BOX_CONF.logged_in && BOX_CONF.is_validated) {
					dup.classList.add('ghostery-show');
				}
			}
			if (apps[n]) {
				tracker.textContent = apps[n].name;
			}
			appendChild(liDiv, dup, tracker);
			appendChild(list, liDiv);
		}
		setBoxHeights();
	};

	var clearTrackersNone = function () {
		var count = doc.getElementById('ghostery-count');
		count.style.background = 'none';
		count.style.color = '#ffffff';
	};

	var updateLoginInfo = function () {
		var gatedIcons = doc.getElementsByClassName("ghostery-account-gated");
		for (var i = 0; i < gatedIcons.length; i++) {
			if (BOX_CONF.logged_in && BOX_CONF.is_validated) {
				gatedIcons[i].classList.add('ghostery-show');
			} else {
				gatedIcons[i].classList.remove('ghostery-show');
			}
		}
	};

	var createPurpleBox = function () {
		var ghostery = createEl('div'),
		    box = createEl('div'),
		    count = createEl('div'),
		    pbIcons = createEl('div'),
		    breakingIcon = createEl('span'),
		    slowIcon = createEl('span'),
		    nonSecureIcon = createEl('span'),
		    nonSecureSlowIcon = createEl('span'),
		    title = createEl('div'),
		    minimizeContainer = createEl('div'),
		    minimizeIcon = createEl('span'),
		    close = createEl('span'),
		    background = createEl('div'),
		    list = createEl('div'),
		    style = createEl('style'),
		    trackersCountImage = chrome.extension.getURL('app/images/purple_box/box_ghosty_white.png'),
		    closeIconImage = chrome.extension.getURL('app/images/purple_box/collapse.svg'),
		    breakingIconImage = chrome.extension.getURL('app/images/purple_box/breaking-icon.svg'),
		    slowIconImage = chrome.extension.getURL('app/images/purple_box/slow-icon.svg'),
		    nonSecureIconImage = chrome.extension.getURL('app/images/purple_box/non-secure-icon.svg'),
		    nonSecureSlowIconImage = chrome.extension.getURL('app/images/purple_box/non-secure-slow-icon.svg');

		style.textContent = '@media print {#ghostery-purple-box {display:none !important}}';
		appendChild(doc.getElementsByTagName('head')[0], style);

		ghostery.id = 'ghostery-purple-box';
		ghostery.className = 'ghostery-bottom ghostery-right ghostery-none';
		box.id = 'ghostery-box';
		count.id = 'ghostery-count';
		count.style.background = 'url(' + trackersCountImage + ') no-repeat center';
		count.textContent = '0';
		count.style.color = "transparent";
		pbIcons.id = 'ghostery-pb-icons-container';
		breakingIcon.id = 'ghostery-breaking-tracker';
		breakingIcon.className = 'ghostery-pb-tracker';
		breakingIcon.title = BOX_TRANSLATIONS.box_warning_compatibility;
		breakingIcon.style.background = 'url(' + breakingIconImage + ')';
		breakingIcon.style.opacity = "0.5";
		slowIcon.id = 'ghostery-slow-tracker';
		slowIcon.className = 'ghostery-pb-tracker';
		slowIcon.title = BOX_TRANSLATIONS.box_warning_slow;
		slowIcon.style.background = 'url(' + slowIconImage + ')';
		slowIcon.style.opacity = "0.5";
		nonSecureIcon.id = 'ghostery-non-secure-tracker';
		nonSecureIcon.className = 'ghostery-pb-tracker';
		nonSecureIcon.title = BOX_TRANSLATIONS.box_warning_nonsecure;
		nonSecureIcon.style.background = 'url(' + nonSecureIconImage + ')';
		nonSecureIcon.style.opacity = "0.5";
		nonSecureSlowIcon.id = 'ghostery-non-secure-slow-tracker';
		nonSecureSlowIcon.className = 'ghostery-pb-tracker';
		nonSecureSlowIcon.style.background = 'url(' + nonSecureSlowIconImage + ')';
		title.id = 'ghostery-title';
		title.textContent = BOX_TRANSLATIONS.looking;
		minimizeContainer.id = 'ghostery-minimize';
		minimizeIcon.id = 'ghostery-minimize-icon';
		close.id = 'ghostery-close';
		close.style.background = 'url(' + closeIconImage + ')';
		background.id = 'ghostery-pb-background';
		list.id = 'ghostery-trackerList';

		if (BOX_CONF.alert_expanded && !ghostery.classList.contains('ghostery-expanded')) {
			ghostery.classList.add('ghostery-expanded');
		}

		appendChild(background, list);
		appendChild(minimizeContainer, minimizeIcon);
		appendChild(pbIcons, breakingIcon, slowIcon, nonSecureIcon);
		appendChild(box, count, pbIcons, title, minimizeContainer, close);
		appendChild(ghostery, box, background);

		TIMEOUTS.box_none_timeout = setTimeout(clearTrackersNone, 2000);

		if (doc.getElementsByTagName('body')[0]) {
			appendChild(doc.body, ghostery);
		} else {
			appendChild(doc.getElementsByTagName('html')[0], ghostery);
		}
		if (!BOX_CONF.alert_expanded) {
			ghostery.classList.add('ghostery-collapsed');
			ghostery.classList.remove('ghostery-expanded');
		} else {
			setTimeout(function () {
				var windowHeight = doc.documentElement.clientHeight * 0.85 - 35;

				resetDestroyTimer();
				sendMessage('updateAlertConf', BOX_CONF);
				if (ghostery.classList.contains('ghostery-none')) {
					clearTrackersNone();
				}

				ghostery.classList.add('ghostery-expanded');

				background.style.height = HEIGHT + "px";
				if (PREV_HEIGHT === HEIGHT && HEIGHT === windowHeight) {
					background.style.setProperty('overflow-y', 'auto');
				}
				setBoxHeights();
			}, 100);
		}
		close.addEventListener('click', destroyPurpleBox);
		box.addEventListener('click', handleSizeChangeClick);
		background.addEventListener('click', handleSizeChangeClick);
		setBoxHeights();
	};
	var _initialize = function () {
		onMessage.addListener(function (request, sender, sendResponse) {
			var name = request.name,
			    msg = request.message;

			if (name === 'destroyBox') {
				destroyPurpleBox();
			} else if (name === 'createBox') {
				BOX_TRANSLATIONS = msg.translations;
				BOX_CONF.language = msg.conf.language;
				BOX_CONF.alert_bubble_timeout = msg.conf.alert_bubble_timeout;
				BOX_CONF.logged_in = msg.logged_in;
				BOX_CONF.is_validated = msg.is_validated;
				if (!BOX_CREATED) {
					BOX_CREATED = true;
					BOX_CONF.alert_bubble_pos = msg.conf.alert_bubble_pos;
					BOX_CONF.alert_expanded = msg.conf.alert_expanded ? msg.conf.alert_expanded : false;
					createPurpleBox();
					updateLoginInfo();
				}
				resetDestroyTimer();
			} else if (name === 'updatePbLoginInfo') {
				BOX_CONF.logged_in = msg.logged_in;
				BOX_CONF.is_validated = msg.is_validated;
				if (BOX_CREATED) {
					updateLoginInfo();
				}
			} else if (name === 'updateTimeout') {
				BOX_CONF.alert_bubble_timeout = msg.alert_bubble_timeout;
				if (BOX_CREATED) {
					resetDestroyTimer();
				}
			} else if (name === 'updatePosition') {
				BOX_CONF.alert_bubble_pos = msg.alert_bubble_pos;
				if (BOX_CREATED) {
					clearTimeout(TIMEOUTS.box_position_timeout);
					resetDestroyTimer();
					setBoxHeights();
				}
			} else if (name === 'updateBox') {
				if (BOX_CREATED) {
					handleNewTrackers(msg.apps);
					resetDestroyTimer();
				}
			}

			sendResponse();
			return true;
		});
	};

	return {
		init: function () {
			_initialize();
		}
	};
}(window, document);

Ghostery.init();

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


//# sourceMappingURL=purplebox.js.map
