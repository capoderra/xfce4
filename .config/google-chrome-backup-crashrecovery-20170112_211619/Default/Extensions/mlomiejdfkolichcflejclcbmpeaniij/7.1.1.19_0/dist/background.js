if(typeof browser!=='undefined'){chrome=browser;}
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";module.exports=function(t){var n,l="";return Array.prototype.join,l+='<!doctype html>\n<html>\n<head>\n\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n\t<style>\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t\tp {\n\t\t\tmargin: 3px;\n\t\t\tfont-family: Helvetica, Arial, sans-serif;\n\t\t\tfont-size: 13px;\n\t\t}\n\t\ttable {\n\t\t\tborder-spacing: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttext-align: center;\n\t\t\tvertical-align: middle;\n\t\t}\n\t\ttd {\n\t\t\tpadding: 0;\n\t\t}\n\t</style>\n</head>\n<body>\n\t<table>\n\t\t<tr>\n\t\t\t<td>\n\n\t\t\t\t',t.button?l+='\n\n\t\t\t\t\t<a id="action-once" href="#" onclick="return false">\n\t\t\t\t\t\t<img src="'+(null==(n=t.allow_once_src)?"":n)+'" title="'+(null==(n=t.allow_once_title)?"":n)+'">\n\t\t\t\t\t</a>\n\n\t\t\t\t':(l+="\n\n\t\t\t\t\t","undefined"!=typeof t.click2play_text&&t.click2play_text&&(l+='\n\t\t\t\t\t\t<p id="text">'+(null==(n=t.click2play_text)?"":n)+"</p>\n\t\t\t\t\t"),l+='\n\n\t\t\t\t\t<img id="ghostery-blocked" src="'+(null==(n=t.ghostery_blocked_src)?"":n)+'" title="'+(null==(n=t.ghostery_blocked_title)?"":n)+'">\n\n\t\t\t\t\t<a id="action-once" href="#" onclick="return false"><img src="'+(null==(n=t.allow_once_src)?"":n)+'" title="'+(null==(n=t.allow_once_title)?"":n)+'"></a>\n\n\t\t\t\t\t',t.blacklisted===!1&&(l+='\n\t\t\t\t\t\t<a id="action-always" href="#" onclick="return false"><img src="'+(null==(n=t.allow_always_src)?"":n)+'" title="'+(null==(n=t.allow_always_title)?"":n)+'"></a>\n\t\t\t\t\t'),l+="\n\n\t\t\t\t"),l+="\n\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</body>\n</html>\n"};

},{}],2:[function(require,module,exports){
"use strict";function init(){for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,e=o.length;r<e;++r)lookup[r]=o[r],revLookup[o.charCodeAt(r)]=r;revLookup["-".charCodeAt(0)]=62,revLookup["_".charCodeAt(0)]=63}function toByteArray(o){var r,e,t,u,n,p,a=o.length;if(a%4>0)throw new Error("Invalid string. Length must be a multiple of 4");n="="===o[a-2]?2:"="===o[a-1]?1:0,p=new Arr(3*a/4-n),t=n>0?a-4:a;var k=0;for(r=0,e=0;r<t;r+=4,e+=3)u=revLookup[o.charCodeAt(r)]<<18|revLookup[o.charCodeAt(r+1)]<<12|revLookup[o.charCodeAt(r+2)]<<6|revLookup[o.charCodeAt(r+3)],p[k++]=u>>16&255,p[k++]=u>>8&255,p[k++]=255&u;return 2===n?(u=revLookup[o.charCodeAt(r)]<<2|revLookup[o.charCodeAt(r+1)]>>4,p[k++]=255&u):1===n&&(u=revLookup[o.charCodeAt(r)]<<10|revLookup[o.charCodeAt(r+1)]<<4|revLookup[o.charCodeAt(r+2)]>>2,p[k++]=u>>8&255,p[k++]=255&u),p}function tripletToBase64(o){return lookup[o>>18&63]+lookup[o>>12&63]+lookup[o>>6&63]+lookup[63&o]}function encodeChunk(o,r,e){for(var t,u=[],n=r;n<e;n+=3)t=(o[n]<<16)+(o[n+1]<<8)+o[n+2],u.push(tripletToBase64(t));return u.join("")}function fromByteArray(o){for(var r,e=o.length,t=e%3,u="",n=[],p=16383,a=0,k=e-t;a<k;a+=p)n.push(encodeChunk(o,a,a+p>k?k:a+p));return 1===t?(r=o[e-1],u+=lookup[r>>2],u+=lookup[r<<4&63],u+="=="):2===t&&(r=(o[e-2]<<8)+o[e-1],u+=lookup[r>>10],u+=lookup[r>>4&63],u+=lookup[r<<2&63],u+="="),n.push(u),n.join("")}exports.toByteArray=toByteArray,exports.fromByteArray=fromByteArray;var lookup=[],revLookup=[],Arr="undefined"!=typeof Uint8Array?Uint8Array:Array;init();

},{}],3:[function(require,module,exports){
(function (global){
"use strict";function typedArraySupport(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function kMaxLength(){return Buffer.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function createBuffer(t,e){if(kMaxLength()<e)throw new RangeError("Invalid typed array length");return Buffer.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=Buffer.prototype):(null===t&&(t=new Buffer(e)),t.length=e),t}function Buffer(t,e,r){if(!(Buffer.TYPED_ARRAY_SUPPORT||this instanceof Buffer))return new Buffer(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return allocUnsafe(this,t)}return from(this,t,e,r)}function from(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?fromArrayBuffer(t,e,r,n):"string"==typeof e?fromString(t,e,r):fromObject(t,e)}function assertSize(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function alloc(t,e,r,n){return assertSize(e),e<=0?createBuffer(t,e):void 0!==r?"string"==typeof n?createBuffer(t,e).fill(r,n):createBuffer(t,e).fill(r):createBuffer(t,e)}function allocUnsafe(t,e){if(assertSize(e),t=createBuffer(t,e<0?0:0|checked(e)),!Buffer.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function fromString(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!Buffer.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|byteLength(e,r);t=createBuffer(t,n);var f=t.write(e,r);return f!==n&&(t=t.slice(0,f)),t}function fromArrayLike(t,e){var r=e.length<0?0:0|checked(e.length);t=createBuffer(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function fromArrayBuffer(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),Buffer.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=Buffer.prototype):t=fromArrayLike(t,e),t}function fromObject(t,e){if(Buffer.isBuffer(e)){var r=0|checked(e.length);return t=createBuffer(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||isnan(e.length)?createBuffer(t,0):fromArrayLike(t,e);if("Buffer"===e.type&&isArray(e.data))return fromArrayLike(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function checked(t){if(t>=kMaxLength())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+kMaxLength().toString(16)+" bytes");return 0|t}function SlowBuffer(t){return+t!=t&&(t=0),Buffer.alloc(+t)}function byteLength(t,e){if(Buffer.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return utf8ToBytes(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return base64ToBytes(t).length;default:if(n)return utf8ToBytes(t).length;e=(""+e).toLowerCase(),n=!0}}function slowToString(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return hexSlice(this,e,r);case"utf8":case"utf-8":return utf8Slice(this,e,r);case"ascii":return asciiSlice(this,e,r);case"latin1":case"binary":return latin1Slice(this,e,r);case"base64":return base64Slice(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return utf16leSlice(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function swap(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function bidirectionalIndexOf(t,e,r,n,f){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=f?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(f)return-1;r=t.length-1}else if(r<0){if(!f)return-1;r=0}if("string"==typeof e&&(e=Buffer.from(e,n)),Buffer.isBuffer(e))return 0===e.length?-1:arrayIndexOf(t,e,r,n,f);if("number"==typeof e)return e=255&e,Buffer.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?f?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):arrayIndexOf(t,[e],r,n,f);throw new TypeError("val must be string, number or Buffer")}function arrayIndexOf(t,e,r,n,f){function i(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}var o=1,u=t.length,s=e.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;o=2,u/=2,s/=2,r/=2}var a;if(f){var h=-1;for(a=r;a<u;a++)if(i(t,a)===i(e,h===-1?0:a-h)){if(h===-1&&(h=a),a-h+1===s)return h*o}else h!==-1&&(a-=a-h),h=-1}else for(r+s>u&&(r=u-s),a=r;a>=0;a--){for(var c=!0,l=0;l<s;l++)if(i(t,a+l)!==i(e,l)){c=!1;break}if(c)return a}return-1}function hexWrite(t,e,r,n){r=Number(r)||0;var f=t.length-r;n?(n=Number(n),n>f&&(n=f)):n=f;var i=e.length;if(i%2!==0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var o=0;o<n;++o){var u=parseInt(e.substr(2*o,2),16);if(isNaN(u))return o;t[r+o]=u}return o}function utf8Write(t,e,r,n){return blitBuffer(utf8ToBytes(e,t.length-r),t,r,n)}function asciiWrite(t,e,r,n){return blitBuffer(asciiToBytes(e),t,r,n)}function latin1Write(t,e,r,n){return asciiWrite(t,e,r,n)}function base64Write(t,e,r,n){return blitBuffer(base64ToBytes(e),t,r,n)}function ucs2Write(t,e,r,n){return blitBuffer(utf16leToBytes(e,t.length-r),t,r,n)}function base64Slice(t,e,r){return 0===e&&r===t.length?base64.fromByteArray(t):base64.fromByteArray(t.slice(e,r))}function utf8Slice(t,e,r){r=Math.min(t.length,r);for(var n=[],f=e;f<r;){var i=t[f],o=null,u=i>239?4:i>223?3:i>191?2:1;if(f+u<=r){var s,a,h,c;switch(u){case 1:i<128&&(o=i);break;case 2:s=t[f+1],128===(192&s)&&(c=(31&i)<<6|63&s,c>127&&(o=c));break;case 3:s=t[f+1],a=t[f+2],128===(192&s)&&128===(192&a)&&(c=(15&i)<<12|(63&s)<<6|63&a,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:s=t[f+1],a=t[f+2],h=t[f+3],128===(192&s)&&128===(192&a)&&128===(192&h)&&(c=(15&i)<<18|(63&s)<<12|(63&a)<<6|63&h,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),f+=u}return decodeCodePointsArray(n)}function decodeCodePointsArray(t){var e=t.length;if(e<=MAX_ARGUMENTS_LENGTH)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=MAX_ARGUMENTS_LENGTH));return r}function asciiSlice(t,e,r){var n="";r=Math.min(t.length,r);for(var f=e;f<r;++f)n+=String.fromCharCode(127&t[f]);return n}function latin1Slice(t,e,r){var n="";r=Math.min(t.length,r);for(var f=e;f<r;++f)n+=String.fromCharCode(t[f]);return n}function hexSlice(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var f="",i=e;i<r;++i)f+=toHex(t[i]);return f}function utf16leSlice(t,e,r){for(var n=t.slice(e,r),f="",i=0;i<n.length;i+=2)f+=String.fromCharCode(n[i]+256*n[i+1]);return f}function checkOffset(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function checkInt(t,e,r,n,f,i){if(!Buffer.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>f||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function objectWriteUInt16(t,e,r,n){e<0&&(e=65535+e+1);for(var f=0,i=Math.min(t.length-r,2);f<i;++f)t[r+f]=(e&255<<8*(n?f:1-f))>>>8*(n?f:1-f)}function objectWriteUInt32(t,e,r,n){e<0&&(e=4294967295+e+1);for(var f=0,i=Math.min(t.length-r,4);f<i;++f)t[r+f]=e>>>8*(n?f:3-f)&255}function checkIEEE754(t,e,r,n,f,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function writeFloat(t,e,r,n,f){return f||checkIEEE754(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),ieee754.write(t,e,r,n,23,4),r+4}function writeDouble(t,e,r,n,f){return f||checkIEEE754(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),ieee754.write(t,e,r,n,52,8),r+8}function base64clean(t){if(t=stringtrim(t).replace(INVALID_BASE64_RE,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function stringtrim(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function toHex(t){return t<16?"0"+t.toString(16):t.toString(16)}function utf8ToBytes(t,e){e=e||1/0;for(var r,n=t.length,f=null,i=[],o=0;o<n;++o){if(r=t.charCodeAt(o),r>55295&&r<57344){if(!f){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(o+1===n){(e-=3)>-1&&i.push(239,191,189);continue}f=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),f=r;continue}r=(f-55296<<10|r-56320)+65536}else f&&(e-=3)>-1&&i.push(239,191,189);if(f=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function asciiToBytes(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function utf16leToBytes(t,e){for(var r,n,f,i=[],o=0;o<t.length&&!((e-=2)<0);++o)r=t.charCodeAt(o),n=r>>8,f=r%256,i.push(f),i.push(n);return i}function base64ToBytes(t){return base64.toByteArray(base64clean(t))}function blitBuffer(t,e,r,n){for(var f=0;f<n&&!(f+r>=e.length||f>=t.length);++f)e[f+r]=t[f];return f}function isnan(t){return t!==t}var base64=require("base64-js"),ieee754=require("ieee754"),isArray=require("isarray");exports.Buffer=Buffer,exports.SlowBuffer=SlowBuffer,exports.INSPECT_MAX_BYTES=50,Buffer.TYPED_ARRAY_SUPPORT=void 0!==global.TYPED_ARRAY_SUPPORT?global.TYPED_ARRAY_SUPPORT:typedArraySupport(),exports.kMaxLength=kMaxLength(),Buffer.poolSize=8192,Buffer._augment=function(t){return t.__proto__=Buffer.prototype,t},Buffer.from=function(t,e,r){return from(null,t,e,r)},Buffer.TYPED_ARRAY_SUPPORT&&(Buffer.prototype.__proto__=Uint8Array.prototype,Buffer.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Buffer[Symbol.species]===Buffer&&Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:!0})),Buffer.alloc=function(t,e,r){return alloc(null,t,e,r)},Buffer.allocUnsafe=function(t){return allocUnsafe(null,t)},Buffer.allocUnsafeSlow=function(t){return allocUnsafe(null,t)},Buffer.isBuffer=function(t){return!(null==t||!t._isBuffer)},Buffer.compare=function(t,e){if(!Buffer.isBuffer(t)||!Buffer.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,f=0,i=Math.min(r,n);f<i;++f)if(t[f]!==e[f]){r=t[f],n=e[f];break}return r<n?-1:n<r?1:0},Buffer.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(t,e){if(!isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Buffer.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=Buffer.allocUnsafe(e),f=0;for(r=0;r<t.length;++r){var i=t[r];if(!Buffer.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,f),f+=i.length}return n},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)swap(this,e,e+1);return this},Buffer.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)swap(this,e,e+3),swap(this,e+1,e+2);return this},Buffer.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)swap(this,e,e+7),swap(this,e+1,e+6),swap(this,e+2,e+5),swap(this,e+3,e+4);return this},Buffer.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?utf8Slice(this,0,t):slowToString.apply(this,arguments)},Buffer.prototype.equals=function(t){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Buffer.compare(this,t)},Buffer.prototype.inspect=function(){var t="",e=exports.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},Buffer.prototype.compare=function(t,e,r,n,f){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===f&&(f=this.length),e<0||r>t.length||n<0||f>this.length)throw new RangeError("out of range index");if(n>=f&&e>=r)return 0;if(n>=f)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,f>>>=0,this===t)return 0;for(var i=f-n,o=r-e,u=Math.min(i,o),s=this.slice(n,f),a=t.slice(e,r),h=0;h<u;++h)if(s[h]!==a[h]){i=s[h],o=a[h];break}return i<o?-1:o<i?1:0},Buffer.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},Buffer.prototype.indexOf=function(t,e,r){return bidirectionalIndexOf(this,t,e,r,!0)},Buffer.prototype.lastIndexOf=function(t,e,r){return bidirectionalIndexOf(this,t,e,r,!1)},Buffer.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e=0|e,isFinite(r)?(r=0|r,void 0===n&&(n="utf8")):(n=r,r=void 0)}var f=this.length-e;if((void 0===r||r>f)&&(r=f),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return hexWrite(this,t,e,r);case"utf8":case"utf-8":return utf8Write(this,t,e,r);case"ascii":return asciiWrite(this,t,e,r);case"latin1":case"binary":return latin1Write(this,t,e,r);case"base64":return base64Write(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ucs2Write(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var MAX_ARGUMENTS_LENGTH=4096;Buffer.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);var n;if(Buffer.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=Buffer.prototype;else{var f=e-t;n=new Buffer(f,void 0);for(var i=0;i<f;++i)n[i]=this[i+t]}return n},Buffer.prototype.readUIntLE=function(t,e,r){t=0|t,e=0|e,r||checkOffset(t,e,this.length);for(var n=this[t],f=1,i=0;++i<e&&(f*=256);)n+=this[t+i]*f;return n},Buffer.prototype.readUIntBE=function(t,e,r){t=0|t,e=0|e,r||checkOffset(t,e,this.length);for(var n=this[t+--e],f=1;e>0&&(f*=256);)n+=this[t+--e]*f;return n},Buffer.prototype.readUInt8=function(t,e){return e||checkOffset(t,1,this.length),this[t]},Buffer.prototype.readUInt16LE=function(t,e){return e||checkOffset(t,2,this.length),this[t]|this[t+1]<<8},Buffer.prototype.readUInt16BE=function(t,e){return e||checkOffset(t,2,this.length),this[t]<<8|this[t+1]},Buffer.prototype.readUInt32LE=function(t,e){return e||checkOffset(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Buffer.prototype.readUInt32BE=function(t,e){return e||checkOffset(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Buffer.prototype.readIntLE=function(t,e,r){t=0|t,e=0|e,r||checkOffset(t,e,this.length);for(var n=this[t],f=1,i=0;++i<e&&(f*=256);)n+=this[t+i]*f;return f*=128,n>=f&&(n-=Math.pow(2,8*e)),n},Buffer.prototype.readIntBE=function(t,e,r){t=0|t,e=0|e,r||checkOffset(t,e,this.length);for(var n=e,f=1,i=this[t+--n];n>0&&(f*=256);)i+=this[t+--n]*f;return f*=128,i>=f&&(i-=Math.pow(2,8*e)),i},Buffer.prototype.readInt8=function(t,e){return e||checkOffset(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},Buffer.prototype.readInt16LE=function(t,e){e||checkOffset(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},Buffer.prototype.readInt16BE=function(t,e){e||checkOffset(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},Buffer.prototype.readInt32LE=function(t,e){return e||checkOffset(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Buffer.prototype.readInt32BE=function(t,e){return e||checkOffset(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Buffer.prototype.readFloatLE=function(t,e){return e||checkOffset(t,4,this.length),ieee754.read(this,t,!0,23,4)},Buffer.prototype.readFloatBE=function(t,e){return e||checkOffset(t,4,this.length),ieee754.read(this,t,!1,23,4)},Buffer.prototype.readDoubleLE=function(t,e){return e||checkOffset(t,8,this.length),ieee754.read(this,t,!0,52,8)},Buffer.prototype.readDoubleBE=function(t,e){return e||checkOffset(t,8,this.length),ieee754.read(this,t,!1,52,8)},Buffer.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e=0|e,r=0|r,!n){var f=Math.pow(2,8*r)-1;checkInt(this,t,e,r,f,0)}var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},Buffer.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e=0|e,r=0|r,!n){var f=Math.pow(2,8*r)-1;checkInt(this,t,e,r,f,0)}var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},Buffer.prototype.writeUInt8=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,1,255,0),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},Buffer.prototype.writeUInt16LE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):objectWriteUInt16(this,t,e,!0),e+2},Buffer.prototype.writeUInt16BE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):objectWriteUInt16(this,t,e,!1),e+2},Buffer.prototype.writeUInt32LE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):objectWriteUInt32(this,t,e,!0),e+4},Buffer.prototype.writeUInt32BE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):objectWriteUInt32(this,t,e,!1),e+4},Buffer.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e=0|e,!n){var f=Math.pow(2,8*r-1);checkInt(this,t,e,r,f-1,-f)}var i=0,o=1,u=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/o>>0)-u&255;return e+r},Buffer.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e=0|e,!n){var f=Math.pow(2,8*r-1);checkInt(this,t,e,r,f-1,-f)}var i=r-1,o=1,u=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/o>>0)-u&255;return e+r},Buffer.prototype.writeInt8=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,1,127,-128),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},Buffer.prototype.writeInt16LE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):objectWriteUInt16(this,t,e,!0),e+2},Buffer.prototype.writeInt16BE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):objectWriteUInt16(this,t,e,!1),e+2},Buffer.prototype.writeInt32LE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,4,2147483647,-2147483648),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):objectWriteUInt32(this,t,e,!0),e+4},Buffer.prototype.writeInt32BE=function(t,e,r){return t=+t,e=0|e,r||checkInt(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),Buffer.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):objectWriteUInt32(this,t,e,!1),e+4},Buffer.prototype.writeFloatLE=function(t,e,r){return writeFloat(this,t,e,!0,r)},Buffer.prototype.writeFloatBE=function(t,e,r){return writeFloat(this,t,e,!1,r)},Buffer.prototype.writeDoubleLE=function(t,e,r){return writeDouble(this,t,e,!0,r)},Buffer.prototype.writeDoubleBE=function(t,e,r){return writeDouble(this,t,e,!1,r)},Buffer.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var f,i=n-r;if(this===t&&r<e&&e<n)for(f=i-1;f>=0;--f)t[f+e]=this[f+r];else if(i<1e3||!Buffer.TYPED_ARRAY_SUPPORT)for(f=0;f<i;++f)t[f+e]=this[f+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},Buffer.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var f=t.charCodeAt(0);f<256&&(t=f)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Buffer.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t=255&t);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var i;if("number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var o=Buffer.isBuffer(t)?t:utf8ToBytes(new Buffer(t,n).toString()),u=o.length;for(i=0;i<r-e;++i)this[i+e]=o[i%u]}return this};var INVALID_BASE64_RE=/[^+\/0-9A-Za-z-_]/g;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"base64-js":2,"ieee754":4,"isarray":5}],4:[function(require,module,exports){
exports.read=function(a,o,t,r,h){var M,p,w=8*h-r-1,f=(1<<w)-1,e=f>>1,i=-7,N=t?h-1:0,n=t?-1:1,s=a[o+N];for(N+=n,M=s&(1<<-i)-1,s>>=-i,i+=w;i>0;M=256*M+a[o+N],N+=n,i-=8);for(p=M&(1<<-i)-1,M>>=-i,i+=r;i>0;p=256*p+a[o+N],N+=n,i-=8);if(0===M)M=1-e;else{if(M===f)return p?NaN:(s?-1:1)*(1/0);p+=Math.pow(2,r),M-=e}return(s?-1:1)*p*Math.pow(2,M-r)},exports.write=function(a,o,t,r,h,M){var p,w,f,e=8*M-h-1,i=(1<<e)-1,N=i>>1,n=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,s=r?0:M-1,u=r?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,p=i):(p=Math.floor(Math.log(o)/Math.LN2),o*(f=Math.pow(2,-p))<1&&(p--,f*=2),o+=p+N>=1?n/f:n*Math.pow(2,1-N),o*f>=2&&(p++,f/=2),p+N>=i?(w=0,p=i):p+N>=1?(w=(o*f-1)*Math.pow(2,h),p+=N):(w=o*Math.pow(2,N-1)*Math.pow(2,h),p=0));h>=8;a[t+s]=255&w,s+=u,w/=256,h-=8);for(p=p<<h|w,e+=h;e>0;a[t+s]=255&p,s+=u,p/=256,e-=8);a[t+s-u]|=128*l};

},{}],5:[function(require,module,exports){
var toString={}.toString;module.exports=Array.isArray||function(r){return"[object Array]"==toString.call(r)};

},{}],6:[function(require,module,exports){
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):e.moment=a()}(this,function(){"use strict";function e(){return tn.apply(null,arguments)}function a(e){tn=e}function t(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function s(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function n(e,a){var t,s=[];for(t=0;t<e.length;++t)s.push(a(e[t],t));return s}function _(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function r(e,a){for(var t in a)_(a,t)&&(e[t]=a[t]);return _(a,"toString")&&(e.toString=a.toString),_(a,"valueOf")&&(e.valueOf=a.valueOf),e}function d(e,a,t,s){return Ee(e,a,t,s,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function o(e){return null==e._pf&&(e._pf=i()),e._pf}function m(e){if(null==e._isValid){var a=o(e),t=sn.call(a.parsedDateParts,function(e){return null!=e});e._isValid=!isNaN(e._d.getTime())&&a.overflow<0&&!a.empty&&!a.invalidMonth&&!a.invalidWeekday&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&t),e._strict&&(e._isValid=e._isValid&&0===a.charsLeftOver&&0===a.unusedTokens.length&&void 0===a.bigHour)}return e._isValid}function u(e){var a=d(NaN);return null!=e?r(o(a),e):o(a).userInvalidated=!0,a}function l(e){return void 0===e}function M(e,a){var t,s,n;if(l(a._isAMomentObject)||(e._isAMomentObject=a._isAMomentObject),l(a._i)||(e._i=a._i),l(a._f)||(e._f=a._f),l(a._l)||(e._l=a._l),l(a._strict)||(e._strict=a._strict),l(a._tzm)||(e._tzm=a._tzm),l(a._isUTC)||(e._isUTC=a._isUTC),l(a._offset)||(e._offset=a._offset),l(a._pf)||(e._pf=o(a)),l(a._locale)||(e._locale=a._locale),nn.length>0)for(t in nn)s=nn[t],n=a[s],l(n)||(e[s]=n);return e}function h(a){M(this,a),this._d=new Date(null!=a._d?a._d.getTime():NaN),_n===!1&&(_n=!0,e.updateOffset(this),_n=!1)}function L(e){return e instanceof h||null!=e&&null!=e._isAMomentObject}function c(e){return 0>e?Math.ceil(e):Math.floor(e)}function Y(e){var a=+e,t=0;return 0!==a&&isFinite(a)&&(t=c(a)),t}function y(e,a,t){var s,n=Math.min(e.length,a.length),_=Math.abs(e.length-a.length),r=0;for(s=0;n>s;s++)(t&&e[s]!==a[s]||!t&&Y(e[s])!==Y(a[s]))&&r++;return r+_}function p(a){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,t){var s=!0;return r(function(){return null!=e.deprecationHandler&&e.deprecationHandler(null,a),s&&(p(a+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),s=!1),t.apply(this,arguments)},t)}function k(a,t){null!=e.deprecationHandler&&e.deprecationHandler(a,t),rn[a]||(p(t),rn[a]=!0)}function D(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function T(e){return"[object Object]"===Object.prototype.toString.call(e)}function g(e){var a,t;for(t in e)a=e[t],D(a)?this[t]=a:this["_"+t]=a;this._config=e,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function w(e,a){var t,s=r({},e);for(t in a)_(a,t)&&(T(e[t])&&T(a[t])?(s[t]={},r(s[t],e[t]),r(s[t],a[t])):null!=a[t]?s[t]=a[t]:delete s[t]);return s}function v(e){null!=e&&this.set(e)}function S(e){return e?e.toLowerCase().replace("_","-"):e}function H(e){for(var a,t,s,n,_=0;_<e.length;){for(n=S(e[_]).split("-"),a=n.length,t=S(e[_+1]),t=t?t.split("-"):null;a>0;){if(s=b(n.slice(0,a).join("-")))return s;if(t&&t.length>=a&&y(n,t,!0)>=a-1)break;a--}_++}return null}function b(e){var a=null;if(!un[e]&&"undefined"!=typeof module&&module&&module.exports)try{a=on._abbr,require("./locale/"+e),j(a)}catch(e){}return un[e]}function j(e,a){var t;return e&&(t=l(a)?W(e):x(e,a),t&&(on=t)),on._abbr}function x(e,a){return null!==a?(a.abbr=e,null!=un[e]?(k("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),a=w(un[e]._config,a)):null!=a.parentLocale&&(null!=un[a.parentLocale]?a=w(un[a.parentLocale]._config,a):k("parentLocaleUndefined","specified parentLocale is not defined yet")),un[e]=new v(a),j(e),un[e]):(delete un[e],null)}function P(e,a){if(null!=a){var t;null!=un[e]&&(a=w(un[e]._config,a)),t=new v(a),t.parentLocale=un[e],un[e]=t,j(e)}else null!=un[e]&&(null!=un[e].parentLocale?un[e]=un[e].parentLocale:null!=un[e]&&delete un[e]);return un[e]}function W(e){var a;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return on;if(!t(e)){if(a=b(e))return a;e=[e]}return H(e)}function A(){return dn(un)}function E(e,a){var t=e.toLowerCase();ln[t]=ln[t+"s"]=ln[a]=e}function F(e){return"string"==typeof e?ln[e]||ln[e.toLowerCase()]:void 0}function z(e){var a,t,s={};for(t in e)_(e,t)&&(a=F(t),a&&(s[a]=e[t]));return s}function O(a,t){return function(s){return null!=s?(C(this,a,s),e.updateOffset(this,t),this):J(this,a)}}function J(e,a){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+a]():NaN}function C(e,a,t){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+a](t)}function G(e,a){var t;if("object"==typeof e)for(t in e)this.set(t,e[t]);else if(e=F(e),D(this[e]))return this[e](a);return this}function R(e,a,t){var s=""+Math.abs(e),n=a-s.length,_=e>=0;return(_?t?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+s}function I(e,a,t,s){var n=s;"string"==typeof s&&(n=function(){return this[s]()}),e&&(cn[e]=n),a&&(cn[a[0]]=function(){return R(n.apply(this,arguments),a[1],a[2])}),t&&(cn[t]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function N(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function U(e){var a,t,s=e.match(Mn);for(a=0,t=s.length;t>a;a++)cn[s[a]]?s[a]=cn[s[a]]:s[a]=N(s[a]);return function(a){var n,_="";for(n=0;t>n;n++)_+=s[n]instanceof Function?s[n].call(a,e):s[n];return _}}function V(e,a){return e.isValid()?(a=K(a,e.localeData()),Ln[a]=Ln[a]||U(a),Ln[a](e)):e.localeData().invalidDate()}function K(e,a){function t(e){return a.longDateFormat(e)||e}var s=5;for(hn.lastIndex=0;s>=0&&hn.test(e);)e=e.replace(hn,t),hn.lastIndex=0,s-=1;return e}function Z(e,a,t){An[e]=D(a)?a:function(e,s){return e&&t?t:a}}function $(e,a){return _(An,e)?An[e](a._strict,a._locale):new RegExp(q(e))}function q(e){return B(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,a,t,s,n){return a||t||s||n}))}function B(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(e,a){var t,s=a;for("string"==typeof e&&(e=[e]),"number"==typeof a&&(s=function(e,t){t[a]=Y(e)}),t=0;t<e.length;t++)En[e[t]]=s}function X(e,a){Q(e,function(e,t,s,n){s._w=s._w||{},a(e,s._w,s,n)})}function ee(e,a,t){null!=a&&_(En,e)&&En[e](a,t._a,t,e)}function ae(e,a){return new Date(Date.UTC(e,a+1,0)).getUTCDate()}function te(e,a){return t(this._months)?this._months[e.month()]:this._months[Un.test(a)?"format":"standalone"][e.month()]}function se(e,a){return t(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Un.test(a)?"format":"standalone"][e.month()]}function ne(e,a,t){var s,n,_,r=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;12>s;++s)_=d([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(_,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(_,"").toLocaleLowerCase();return t?"MMM"===a?(n=mn.call(this._shortMonthsParse,r),-1!==n?n:null):(n=mn.call(this._longMonthsParse,r),-1!==n?n:null):"MMM"===a?(n=mn.call(this._shortMonthsParse,r),-1!==n?n:(n=mn.call(this._longMonthsParse,r),-1!==n?n:null)):(n=mn.call(this._longMonthsParse,r),-1!==n?n:(n=mn.call(this._shortMonthsParse,r),-1!==n?n:null))}function _e(e,a,t){var s,n,_;if(this._monthsParseExact)return ne.call(this,e,a,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;12>s;s++){if(n=d([2e3,s]),t&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),t||this._monthsParse[s]||(_="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(_.replace(".",""),"i")),t&&"MMMM"===a&&this._longMonthsParse[s].test(e))return s;if(t&&"MMM"===a&&this._shortMonthsParse[s].test(e))return s;if(!t&&this._monthsParse[s].test(e))return s}}function re(e,a){var t;if(!e.isValid())return e;if("string"==typeof a)if(/^\d+$/.test(a))a=Y(a);else if(a=e.localeData().monthsParse(a),"number"!=typeof a)return e;return t=Math.min(e.date(),ae(e.year(),a)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](a,t),e}function de(a){return null!=a?(re(this,a),e.updateOffset(this,!0),this):J(this,"Month")}function ie(){return ae(this.year(),this.month())}function oe(e){return this._monthsParseExact?(_(this,"_monthsRegex")||ue.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex}function me(e){return this._monthsParseExact?(_(this,"_monthsRegex")||ue.call(this),e?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex}function ue(){function e(e,a){return a.length-e.length}var a,t,s=[],n=[],_=[];for(a=0;12>a;a++)t=d([2e3,a]),s.push(this.monthsShort(t,"")),n.push(this.months(t,"")),_.push(this.months(t,"")),_.push(this.monthsShort(t,""));for(s.sort(e),n.sort(e),_.sort(e),a=0;12>a;a++)s[a]=B(s[a]),n[a]=B(n[a]),_[a]=B(_[a]);this._monthsRegex=new RegExp("^("+_.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function le(e){var a,t=e._a;return t&&-2===o(e).overflow&&(a=t[zn]<0||t[zn]>11?zn:t[On]<1||t[On]>ae(t[Fn],t[zn])?On:t[Jn]<0||t[Jn]>24||24===t[Jn]&&(0!==t[Cn]||0!==t[Gn]||0!==t[Rn])?Jn:t[Cn]<0||t[Cn]>59?Cn:t[Gn]<0||t[Gn]>59?Gn:t[Rn]<0||t[Rn]>999?Rn:-1,o(e)._overflowDayOfYear&&(Fn>a||a>On)&&(a=On),o(e)._overflowWeeks&&-1===a&&(a=In),o(e)._overflowWeekday&&-1===a&&(a=Nn),o(e).overflow=a),e}function Me(e){var a,t,s,n,_,r,d=e._i,i=qn.exec(d)||Bn.exec(d);if(i){for(o(e).iso=!0,a=0,t=Xn.length;t>a;a++)if(Xn[a][1].exec(i[1])){n=Xn[a][0],s=Xn[a][2]!==!1;break}if(null==n)return void(e._isValid=!1);if(i[3]){for(a=0,t=e_.length;t>a;a++)if(e_[a][1].exec(i[3])){_=(i[2]||" ")+e_[a][0];break}if(null==_)return void(e._isValid=!1)}if(!s&&null!=_)return void(e._isValid=!1);if(i[4]){if(!Qn.exec(i[4]))return void(e._isValid=!1);r="Z"}e._f=n+(_||"")+(r||""),He(e)}else e._isValid=!1}function he(a){var t=a_.exec(a._i);return null!==t?void(a._d=new Date(+t[1])):(Me(a),void(a._isValid===!1&&(delete a._isValid,e.createFromInputFallback(a))))}function Le(e,a,t,s,n,_,r){var d=new Date(e,a,t,s,n,_,r);return 100>e&&e>=0&&isFinite(d.getFullYear())&&d.setFullYear(e),d}function ce(e){var a=new Date(Date.UTC.apply(null,arguments));return 100>e&&e>=0&&isFinite(a.getUTCFullYear())&&a.setUTCFullYear(e),a}function Ye(e){return ye(e)?366:365}function ye(e){return e%4===0&&e%100!==0||e%400===0}function pe(){return ye(this.year())}function fe(e,a,t){var s=7+a-t,n=(7+ce(e,0,s).getUTCDay()-a)%7;return-n+s-1}function ke(e,a,t,s,n){var _,r,d=(7+t-s)%7,i=fe(e,s,n),o=1+7*(a-1)+d+i;return 0>=o?(_=e-1,r=Ye(_)+o):o>Ye(e)?(_=e+1,r=o-Ye(e)):(_=e,r=o),{year:_,dayOfYear:r}}function De(e,a,t){var s,n,_=fe(e.year(),a,t),r=Math.floor((e.dayOfYear()-_-1)/7)+1;return 1>r?(n=e.year()-1,s=r+Te(n,a,t)):r>Te(e.year(),a,t)?(s=r-Te(e.year(),a,t),n=e.year()+1):(n=e.year(),s=r),{week:s,year:n}}function Te(e,a,t){var s=fe(e,a,t),n=fe(e+1,a,t);return(Ye(e)-s+n)/7}function ge(e,a,t){return null!=e?e:null!=a?a:t}function we(a){var t=new Date(e.now());return a._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function ve(e){var a,t,s,n,_=[];if(!e._d){for(s=we(e),e._w&&null==e._a[On]&&null==e._a[zn]&&Se(e),e._dayOfYear&&(n=ge(e._a[Fn],s[Fn]),e._dayOfYear>Ye(n)&&(o(e)._overflowDayOfYear=!0),t=ce(n,0,e._dayOfYear),e._a[zn]=t.getUTCMonth(),e._a[On]=t.getUTCDate()),a=0;3>a&&null==e._a[a];++a)e._a[a]=_[a]=s[a];for(;7>a;a++)e._a[a]=_[a]=null==e._a[a]?2===a?1:0:e._a[a];24===e._a[Jn]&&0===e._a[Cn]&&0===e._a[Gn]&&0===e._a[Rn]&&(e._nextDay=!0,e._a[Jn]=0),e._d=(e._useUTC?ce:Le).apply(null,_),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Jn]=24)}}function Se(e){var a,t,s,n,_,r,d,i;a=e._w,null!=a.GG||null!=a.W||null!=a.E?(_=1,r=4,t=ge(a.GG,e._a[Fn],De(Fe(),1,4).year),s=ge(a.W,1),n=ge(a.E,1),(1>n||n>7)&&(i=!0)):(_=e._locale._week.dow,r=e._locale._week.doy,t=ge(a.gg,e._a[Fn],De(Fe(),_,r).year),s=ge(a.w,1),null!=a.d?(n=a.d,(0>n||n>6)&&(i=!0)):null!=a.e?(n=a.e+_,(a.e<0||a.e>6)&&(i=!0)):n=_),1>s||s>Te(t,_,r)?o(e)._overflowWeeks=!0:null!=i?o(e)._overflowWeekday=!0:(d=ke(t,s,n,_,r),e._a[Fn]=d.year,e._dayOfYear=d.dayOfYear)}function He(a){if(a._f===e.ISO_8601)return void Me(a);a._a=[],o(a).empty=!0;var t,s,n,_,r,d=""+a._i,i=d.length,m=0;for(n=K(a._f,a._locale).match(Mn)||[],t=0;t<n.length;t++)_=n[t],s=(d.match($(_,a))||[])[0],s&&(r=d.substr(0,d.indexOf(s)),r.length>0&&o(a).unusedInput.push(r),d=d.slice(d.indexOf(s)+s.length),m+=s.length),cn[_]?(s?o(a).empty=!1:o(a).unusedTokens.push(_),ee(_,s,a)):a._strict&&!s&&o(a).unusedTokens.push(_);o(a).charsLeftOver=i-m,d.length>0&&o(a).unusedInput.push(d),o(a).bigHour===!0&&a._a[Jn]<=12&&a._a[Jn]>0&&(o(a).bigHour=void 0),o(a).parsedDateParts=a._a.slice(0),o(a).meridiem=a._meridiem,a._a[Jn]=be(a._locale,a._a[Jn],a._meridiem),ve(a),le(a)}function be(e,a,t){var s;return null==t?a:null!=e.meridiemHour?e.meridiemHour(a,t):null!=e.isPM?(s=e.isPM(t),s&&12>a&&(a+=12),s||12!==a||(a=0),a):a}function je(e){var a,t,s,n,_;if(0===e._f.length)return o(e).invalidFormat=!0,void(e._d=new Date(NaN));for(n=0;n<e._f.length;n++)_=0,a=M({},e),null!=e._useUTC&&(a._useUTC=e._useUTC),a._f=e._f[n],He(a),m(a)&&(_+=o(a).charsLeftOver,_+=10*o(a).unusedTokens.length,o(a).score=_,(null==s||s>_)&&(s=_,t=a));r(e,t||a)}function xe(e){if(!e._d){var a=z(e._i);e._a=n([a.year,a.month,a.day||a.date,a.hour,a.minute,a.second,a.millisecond],function(e){return e&&parseInt(e,10)}),ve(e)}}function Pe(e){var a=new h(le(We(e)));return a._nextDay&&(a.add(1,"d"),a._nextDay=void 0),a}function We(e){var a=e._i,n=e._f;return e._locale=e._locale||W(e._l),null===a||void 0===n&&""===a?u({nullInput:!0}):("string"==typeof a&&(e._i=a=e._locale.preparse(a)),L(a)?new h(le(a)):(t(n)?je(e):n?He(e):s(a)?e._d=a:Ae(e),m(e)||(e._d=null),e))}function Ae(a){var _=a._i;void 0===_?a._d=new Date(e.now()):s(_)?a._d=new Date(_.valueOf()):"string"==typeof _?he(a):t(_)?(a._a=n(_.slice(0),function(e){return parseInt(e,10)}),ve(a)):"object"==typeof _?xe(a):"number"==typeof _?a._d=new Date(_):e.createFromInputFallback(a)}function Ee(e,a,t,s,n){var _={};return"boolean"==typeof t&&(s=t,t=void 0),_._isAMomentObject=!0,_._useUTC=_._isUTC=n,_._l=t,_._i=e,_._f=a,_._strict=s,Pe(_)}function Fe(e,a,t,s){return Ee(e,a,t,s,!1)}function ze(e,a){var s,n;if(1===a.length&&t(a[0])&&(a=a[0]),!a.length)return Fe();for(s=a[0],n=1;n<a.length;++n)(!a[n].isValid()||a[n][e](s))&&(s=a[n]);return s}function Oe(){var e=[].slice.call(arguments,0);return ze("isBefore",e)}function Je(){var e=[].slice.call(arguments,0);return ze("isAfter",e)}function Ce(e){var a=z(e),t=a.year||0,s=a.quarter||0,n=a.month||0,_=a.week||0,r=a.day||0,d=a.hour||0,i=a.minute||0,o=a.second||0,m=a.millisecond||0;this._milliseconds=+m+1e3*o+6e4*i+1e3*d*60*60,this._days=+r+7*_,this._months=+n+3*s+12*t,this._data={},this._locale=W(),this._bubble()}function Ge(e){return e instanceof Ce}function Re(e,a){I(e,0,0,function(){var e=this.utcOffset(),t="+";return 0>e&&(e=-e,t="-"),t+R(~~(e/60),2)+a+R(~~e%60,2)})}function Ie(e,a){var t=(a||"").match(e)||[],s=t[t.length-1]||[],n=(s+"").match(r_)||["-",0,0],_=+(60*n[1])+Y(n[2]);return"+"===n[0]?_:-_}function Ne(a,t){var n,_;return t._isUTC?(n=t.clone(),_=(L(a)||s(a)?a.valueOf():Fe(a).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+_),e.updateOffset(n,!1),n):Fe(a).local()}function Ue(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Ve(a,t){var s,n=this._offset||0;return this.isValid()?null!=a?("string"==typeof a?a=Ie(xn,a):Math.abs(a)<16&&(a=60*a),!this._isUTC&&t&&(s=Ue(this)),this._offset=a,this._isUTC=!0,null!=s&&this.add(s,"m"),n!==a&&(!t||this._changeInProgress?oa(this,sa(a-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?n:Ue(this):null!=a?this:NaN}function Ke(e,a){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,a),this):-this.utcOffset()}function Ze(e){return this.utcOffset(0,e)}function $e(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ue(this),"m")),this}function qe(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ie(jn,this._i)),this}function Be(e){return!!this.isValid()&&(e=e?Fe(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function Qe(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Xe(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(M(e,this),e=We(e),e._a){var a=e._isUTC?d(e._a):Fe(e._a);this._isDSTShifted=this.isValid()&&y(e._a,a.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function ea(){return!!this.isValid()&&!this._isUTC}function aa(){return!!this.isValid()&&this._isUTC}function ta(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function sa(e,a){var t,s,n,r=e,d=null;return Ge(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(r={},a?r[a]=e:r.milliseconds=e):(d=d_.exec(e))?(t="-"===d[1]?-1:1,r={y:0,d:Y(d[On])*t,h:Y(d[Jn])*t,m:Y(d[Cn])*t,s:Y(d[Gn])*t,ms:Y(d[Rn])*t}):(d=i_.exec(e))?(t="-"===d[1]?-1:1,r={y:na(d[2],t),M:na(d[3],t),w:na(d[4],t),d:na(d[5],t),h:na(d[6],t),m:na(d[7],t),s:na(d[8],t)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(n=ra(Fe(r.from),Fe(r.to)),r={},r.ms=n.milliseconds,r.M=n.months),s=new Ce(r),Ge(e)&&_(e,"_locale")&&(s._locale=e._locale),s}function na(e,a){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*a}function _a(e,a){var t={milliseconds:0,months:0};return t.months=a.month()-e.month()+12*(a.year()-e.year()),e.clone().add(t.months,"M").isAfter(a)&&--t.months,t.milliseconds=+a-+e.clone().add(t.months,"M"),t}function ra(e,a){var t;return e.isValid()&&a.isValid()?(a=Ne(a,e),e.isBefore(a)?t=_a(e,a):(t=_a(a,e),t.milliseconds=-t.milliseconds,t.months=-t.months),t):{milliseconds:0,months:0}}function da(e){return 0>e?-1*Math.round(-1*e):Math.round(e)}function ia(e,a){return function(t,s){var n,_;return null===s||isNaN(+s)||(k(a,"moment()."+a+"(period, number) is deprecated. Please use moment()."+a+"(number, period)."),_=t,t=s,s=_),t="string"==typeof t?+t:t,n=sa(t,s),oa(this,n,e),this}}function oa(a,t,s,n){var _=t._milliseconds,r=da(t._days),d=da(t._months);a.isValid()&&(n=null==n||n,_&&a._d.setTime(a._d.valueOf()+_*s),r&&C(a,"Date",J(a,"Date")+r*s),d&&re(a,J(a,"Month")+d*s),n&&e.updateOffset(a,r||d))}function ma(e,a){var t=e||Fe(),s=Ne(t,this).startOf("day"),n=this.diff(s,"days",!0),_=-6>n?"sameElse":-1>n?"lastWeek":0>n?"lastDay":1>n?"sameDay":2>n?"nextDay":7>n?"nextWeek":"sameElse",r=a&&(D(a[_])?a[_]():a[_]);return this.format(r||this.localeData().calendar(_,this,Fe(t)))}function ua(){return new h(this)}function la(e,a){var t=L(e)?e:Fe(e);return!(!this.isValid()||!t.isValid())&&(a=F(l(a)?"millisecond":a),"millisecond"===a?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(a).valueOf())}function Ma(e,a){var t=L(e)?e:Fe(e);return!(!this.isValid()||!t.isValid())&&(a=F(l(a)?"millisecond":a),"millisecond"===a?this.valueOf()<t.valueOf():this.clone().endOf(a).valueOf()<t.valueOf())}function ha(e,a,t,s){return s=s||"()",("("===s[0]?this.isAfter(e,t):!this.isBefore(e,t))&&(")"===s[1]?this.isBefore(a,t):!this.isAfter(a,t))}function La(e,a){var t,s=L(e)?e:Fe(e);return!(!this.isValid()||!s.isValid())&&(a=F(a||"millisecond"),"millisecond"===a?this.valueOf()===s.valueOf():(t=s.valueOf(),this.clone().startOf(a).valueOf()<=t&&t<=this.clone().endOf(a).valueOf()))}function ca(e,a){return this.isSame(e,a)||this.isAfter(e,a)}function Ya(e,a){return this.isSame(e,a)||this.isBefore(e,a)}function ya(e,a,t){var s,n,_,r;return this.isValid()?(s=Ne(e,this),s.isValid()?(n=6e4*(s.utcOffset()-this.utcOffset()),a=F(a),"year"===a||"month"===a||"quarter"===a?(r=pa(this,s),"quarter"===a?r/=3:"year"===a&&(r/=12)):(_=this-s,r="second"===a?_/1e3:"minute"===a?_/6e4:"hour"===a?_/36e5:"day"===a?(_-n)/864e5:"week"===a?(_-n)/6048e5:_),t?r:c(r)):NaN):NaN}function pa(e,a){var t,s,n=12*(a.year()-e.year())+(a.month()-e.month()),_=e.clone().add(n,"months");return 0>a-_?(t=e.clone().add(n-1,"months"),s=(a-_)/(_-t)):(t=e.clone().add(n+1,"months"),s=(a-_)/(t-_)),-(n+s)||0}function fa(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ka(){var e=this.clone().utc();return 0<e.year()&&e.year()<=9999?D(Date.prototype.toISOString)?this.toDate().toISOString():V(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):V(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function Da(a){a||(a=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var t=V(this,a);return this.localeData().postformat(t)}function Ta(e,a){return this.isValid()&&(L(e)&&e.isValid()||Fe(e).isValid())?sa({to:this,from:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()}function ga(e){return this.from(Fe(),e)}function wa(e,a){return this.isValid()&&(L(e)&&e.isValid()||Fe(e).isValid())?sa({from:this,to:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()}function va(e){return this.to(Fe(),e)}function Sa(e){var a;return void 0===e?this._locale._abbr:(a=W(e),null!=a&&(this._locale=a),this)}function Ha(){return this._locale}function ba(e){switch(e=F(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function ja(e){return e=F(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function xa(){return this._d.valueOf()-6e4*(this._offset||0)}function Pa(){return Math.floor(this.valueOf()/1e3)}function Wa(){return this._offset?new Date(this.valueOf()):this._d}function Aa(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Ea(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Fa(){return this.isValid()?this.toISOString():null}function za(){return m(this)}function Oa(){return r({},o(this))}function Ja(){return o(this).overflow}function Ca(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ga(e,a){I(0,[e,e.length],0,a)}function Ra(e){return Va.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Ia(e){return Va.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Na(){return Te(this.year(),1,4)}function Ua(){var e=this.localeData()._week;return Te(this.year(),e.dow,e.doy)}function Va(e,a,t,s,n){var _;return null==e?De(this,s,n).year:(_=Te(e,s,n),a>_&&(a=_),Ka.call(this,e,a,t,s,n))}function Ka(e,a,t,s,n){var _=ke(e,a,t,s,n),r=ce(_.year,0,_.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}function Za(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function $a(e){return De(e,this._week.dow,this._week.doy).week}function qa(){return this._week.dow}function Ba(){return this._week.doy}function Qa(e){var a=this.localeData().week(this);return null==e?a:this.add(7*(e-a),"d")}function Xa(e){var a=De(this,1,4).week;return null==e?a:this.add(7*(e-a),"d")}function et(e,a){return"string"!=typeof e?e:isNaN(e)?(e=a.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function at(e,a){return t(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(a)?"format":"standalone"][e.day()]}function tt(e){return this._weekdaysShort[e.day()]}function st(e){return this._weekdaysMin[e.day()]}function nt(e,a,t){var s,n,_,r=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;7>s;++s)_=d([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(_,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(_,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(_,"").toLocaleLowerCase();return t?"dddd"===a?(n=mn.call(this._weekdaysParse,r),-1!==n?n:null):"ddd"===a?(n=mn.call(this._shortWeekdaysParse,r),-1!==n?n:null):(n=mn.call(this._minWeekdaysParse,r),-1!==n?n:null):"dddd"===a?(n=mn.call(this._weekdaysParse,r),-1!==n?n:(n=mn.call(this._shortWeekdaysParse,r),-1!==n?n:(n=mn.call(this._minWeekdaysParse,r),-1!==n?n:null))):"ddd"===a?(n=mn.call(this._shortWeekdaysParse,r),-1!==n?n:(n=mn.call(this._weekdaysParse,r),-1!==n?n:(n=mn.call(this._minWeekdaysParse,r),-1!==n?n:null))):(n=mn.call(this._minWeekdaysParse,r),-1!==n?n:(n=mn.call(this._weekdaysParse,r),-1!==n?n:(n=mn.call(this._shortWeekdaysParse,r),-1!==n?n:null)))}function _t(e,a,t){var s,n,_;if(this._weekdaysParseExact)return nt.call(this,e,a,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;7>s;s++){if(n=d([2e3,1]).day(s),t&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(_="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(_.replace(".",""),"i")),t&&"dddd"===a&&this._fullWeekdaysParse[s].test(e))return s;if(t&&"ddd"===a&&this._shortWeekdaysParse[s].test(e))return s;if(t&&"dd"===a&&this._minWeekdaysParse[s].test(e))return s;if(!t&&this._weekdaysParse[s].test(e))return s}}function rt(e){if(!this.isValid())return null!=e?this:NaN;var a=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=et(e,this.localeData()),this.add(e-a,"d")):a}function dt(e){if(!this.isValid())return null!=e?this:NaN;var a=(this.day()+7-this.localeData()._week.dow)%7;return null==e?a:this.add(e-a,"d")}function it(e){return this.isValid()?null==e?this.day()||7:this.day(this.day()%7?e:e-7):null!=e?this:NaN}function ot(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||lt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex}function mt(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||lt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}function ut(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||lt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}function lt(){function e(e,a){return a.length-e.length}var a,t,s,n,_,r=[],i=[],o=[],m=[];for(a=0;7>a;a++)t=d([2e3,1]).day(a),s=this.weekdaysMin(t,""),n=this.weekdaysShort(t,""),_=this.weekdays(t,""),r.push(s),i.push(n),o.push(_),m.push(s),m.push(n),m.push(_);for(r.sort(e),i.sort(e),o.sort(e),m.sort(e),a=0;7>a;a++)i[a]=B(i[a]),o[a]=B(o[a]),m[a]=B(m[a]);this._weekdaysRegex=new RegExp("^("+m.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Mt(e){var a=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?a:this.add(e-a,"d")}function ht(){return this.hours()%12||12}function Lt(){return this.hours()||24}function ct(e,a){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),a)})}function Yt(e,a){return a._meridiemParse}function yt(e){return"p"===(e+"").toLowerCase().charAt(0)}function pt(e,a,t){return e>11?t?"pm":"PM":t?"am":"AM"}function ft(e,a){a[Rn]=Y(1e3*("0."+e))}function kt(){return this._isUTC?"UTC":""}function Dt(){return this._isUTC?"Coordinated Universal Time":""}function Tt(e){return Fe(1e3*e)}function gt(){return Fe.apply(null,arguments).parseZone()}function wt(e,a,t){var s=this._calendar[e];return D(s)?s.call(a,t):s}function vt(e){var a=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return a||!t?a:(this._longDateFormat[e]=t.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function St(){return this._invalidDate}function Ht(e){return this._ordinal.replace("%d",e)}function bt(e){return e}function jt(e,a,t,s){var n=this._relativeTime[t];return D(n)?n(e,a,t,s):n.replace(/%d/i,e)}function xt(e,a){var t=this._relativeTime[e>0?"future":"past"];return D(t)?t(a):t.replace(/%s/i,a)}function Pt(e,a,t,s){var n=W(),_=d().set(s,a);return n[t](_,e)}function Wt(e,a,t){if("number"==typeof e&&(a=e,e=void 0),e=e||"",null!=a)return Pt(e,a,t,"month");var s,n=[];for(s=0;12>s;s++)n[s]=Pt(e,s,t,"month");return n}function At(e,a,t,s){"boolean"==typeof e?("number"==typeof a&&(t=a,a=void 0),a=a||""):(a=e,t=a,e=!1,"number"==typeof a&&(t=a,a=void 0),a=a||"");var n=W(),_=e?n._week.dow:0;if(null!=t)return Pt(a,(t+_)%7,s,"day");var r,d=[];for(r=0;7>r;r++)d[r]=Pt(a,(r+_)%7,s,"day");return d}function Et(e,a){return Wt(e,a,"months")}function Ft(e,a){return Wt(e,a,"monthsShort")}function zt(e,a,t){return At(e,a,t,"weekdays")}function Ot(e,a,t){return At(e,a,t,"weekdaysShort")}function Jt(e,a,t){return At(e,a,t,"weekdaysMin")}function Ct(){var e=this._data;return this._milliseconds=E_(this._milliseconds),this._days=E_(this._days),this._months=E_(this._months),e.milliseconds=E_(e.milliseconds),e.seconds=E_(e.seconds),e.minutes=E_(e.minutes),e.hours=E_(e.hours),e.months=E_(e.months),e.years=E_(e.years),this}function Gt(e,a,t,s){var n=sa(a,t);return e._milliseconds+=s*n._milliseconds,e._days+=s*n._days,e._months+=s*n._months,e._bubble()}function Rt(e,a){return Gt(this,e,a,1)}function It(e,a){return Gt(this,e,a,-1)}function Nt(e){return 0>e?Math.floor(e):Math.ceil(e)}function Ut(){var e,a,t,s,n,_=this._milliseconds,r=this._days,d=this._months,i=this._data;return _>=0&&r>=0&&d>=0||0>=_&&0>=r&&0>=d||(_+=864e5*Nt(Kt(d)+r),r=0,d=0),i.milliseconds=_%1e3,e=c(_/1e3),i.seconds=e%60,a=c(e/60),i.minutes=a%60,t=c(a/60),i.hours=t%24,r+=c(t/24),n=c(Vt(r)),d+=n,r-=Nt(Kt(n)),s=c(d/12),d%=12,i.days=r,i.months=d,i.years=s,this}function Vt(e){return 4800*e/146097}function Kt(e){return 146097*e/4800}function Zt(e){var a,t,s=this._milliseconds;if(e=F(e),"month"===e||"year"===e)return a=this._days+s/864e5,t=this._months+Vt(a),"month"===e?t:t/12;switch(a=this._days+Math.round(Kt(this._months)),e){case"week":return a/7+s/6048e5;case"day":return a+s/864e5;case"hour":return 24*a+s/36e5;case"minute":return 1440*a+s/6e4;case"second":return 86400*a+s/1e3;case"millisecond":return Math.floor(864e5*a)+s;default:throw new Error("Unknown unit "+e)}}function $t(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*Y(this._months/12)}function qt(e){return function(){return this.as(e)}}function Bt(e){
return e=F(e),this[e+"s"]()}function Qt(e){return function(){return this._data[e]}}function Xt(){return c(this.days()/7)}function es(e,a,t,s,n){return n.relativeTime(a||1,!!t,e,s)}function as(e,a,t){var s=sa(e).abs(),n=B_(s.as("s")),_=B_(s.as("m")),r=B_(s.as("h")),d=B_(s.as("d")),i=B_(s.as("M")),o=B_(s.as("y")),m=n<Q_.s&&["s",n]||1>=_&&["m"]||_<Q_.m&&["mm",_]||1>=r&&["h"]||r<Q_.h&&["hh",r]||1>=d&&["d"]||d<Q_.d&&["dd",d]||1>=i&&["M"]||i<Q_.M&&["MM",i]||1>=o&&["y"]||["yy",o];return m[2]=a,m[3]=+e>0,m[4]=t,es.apply(null,m)}function ts(e,a){return void 0!==Q_[e]&&(void 0===a?Q_[e]:(Q_[e]=a,!0))}function ss(e){var a=this.localeData(),t=as(this,!e,a);return e&&(t=a.pastFuture(+this,t)),a.postformat(t)}function ns(){var e,a,t,s=X_(this._milliseconds)/1e3,n=X_(this._days),_=X_(this._months);e=c(s/60),a=c(e/60),s%=60,e%=60,t=c(_/12),_%=12;var r=t,d=_,i=n,o=a,m=e,u=s,l=this.asSeconds();return l?(0>l?"-":"")+"P"+(r?r+"Y":"")+(d?d+"M":"")+(i?i+"D":"")+(o||m||u?"T":"")+(o?o+"H":"")+(m?m+"M":"")+(u?u+"S":""):"P0D"}function _s(e,a){var t=e.split("_");return a%10===1&&a%100!==11?t[0]:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?t[1]:t[2]}function rs(e,a,t){var s={mm:a?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:a?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===t?a?"хвіліна":"хвіліну":"h"===t?a?"гадзіна":"гадзіну":e+" "+_s(s[t],+e)}function ds(e,a,t){var s={mm:"munutenn",MM:"miz",dd:"devezh"};return e+" "+ms(s[t],e)}function is(e){switch(os(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}function os(e){return e>9?os(e%10):e}function ms(e,a){return 2===a?us(e):e}function us(e){var a={m:"v",b:"v",d:"z"};return void 0===a[e.charAt(0)]?e:a[e.charAt(0)]+e.substring(1)}function ls(e,a,t){var s=e+" ";switch(t){case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function Ms(e){return e>1&&5>e&&1!==~~(e/10)}function hs(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"pár sekund":"pár sekundami";case"m":return a?"minuta":s?"minutu":"minutou";case"mm":return a||s?n+(Ms(e)?"minuty":"minut"):n+"minutami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(Ms(e)?"hodiny":"hodin"):n+"hodinami";case"d":return a||s?"den":"dnem";case"dd":return a||s?n+(Ms(e)?"dny":"dní"):n+"dny";case"M":return a||s?"měsíc":"měsícem";case"MM":return a||s?n+(Ms(e)?"měsíce":"měsíců"):n+"měsíci";case"y":return a||s?"rok":"rokem";case"yy":return a||s?n+(Ms(e)?"roky":"let"):n+"lety"}}function Ls(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function cs(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function Ys(e,a,t,s){var n={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return a?n[t][2]?n[t][2]:n[t][1]:s?n[t][0]:n[t][1]}function ys(e,a,t,s){var n="";switch(t){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"m":return s?"minuutin":"minuutti";case"mm":n=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":n=s?"tunnin":"tuntia";break;case"d":return s?"päivän":"päivä";case"dd":n=s?"päivän":"päivää";break;case"M":return s?"kuukauden":"kuukausi";case"MM":n=s?"kuukauden":"kuukautta";break;case"y":return s?"vuoden":"vuosi";case"yy":n=s?"vuoden":"vuotta"}return n=ps(e,s)+" "+n}function ps(e,a){return 10>e?a?gr[e]:Tr[e]:e}function fs(e,a,t){var s=e+" ";switch(t){case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function ks(e,a,t,s){var n=e;switch(t){case"s":return s||a?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(s||a?" perc":" perce");case"mm":return n+(s||a?" perc":" perce");case"h":return"egy"+(s||a?" óra":" órája");case"hh":return n+(s||a?" óra":" órája");case"d":return"egy"+(s||a?" nap":" napja");case"dd":return n+(s||a?" nap":" napja");case"M":return"egy"+(s||a?" hónap":" hónapja");case"MM":return n+(s||a?" hónap":" hónapja");case"y":return"egy"+(s||a?" év":" éve");case"yy":return n+(s||a?" év":" éve")}return""}function Ds(e){return(e?"":"[múlt] ")+"["+Ar[this.day()]+"] LT[-kor]"}function Ts(e){return e%100===11||e%10!==1}function gs(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nokkrar sekúndur":"nokkrum sekúndum";case"m":return a?"mínúta":"mínútu";case"mm":return Ts(e)?n+(a||s?"mínútur":"mínútum"):a?n+"mínúta":n+"mínútu";case"hh":return Ts(e)?n+(a||s?"klukkustundir":"klukkustundum"):n+"klukkustund";case"d":return a?"dagur":s?"dag":"degi";case"dd":return Ts(e)?a?n+"dagar":n+(s?"daga":"dögum"):a?n+"dagur":n+(s?"dag":"degi");case"M":return a?"mánuður":s?"mánuð":"mánuði";case"MM":return Ts(e)?a?n+"mánuðir":n+(s?"mánuði":"mánuðum"):a?n+"mánuður":n+(s?"mánuð":"mánuði");case"y":return a||s?"ár":"ári";case"yy":return Ts(e)?n+(a||s?"ár":"árum"):n+(a||s?"ár":"ári")}}function ws(e,a,t,s){var n={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return a?n[t][0]:n[t][1]}function vs(e){var a=e.substr(0,e.indexOf(" "));return Hs(a)?"a "+e:"an "+e}function Ss(e){var a=e.substr(0,e.indexOf(" "));return Hs(a)?"viru "+e:"virun "+e}function Hs(e){if(e=parseInt(e,10),isNaN(e))return!1;if(0>e)return!0;if(10>e)return e>=4&&7>=e;if(100>e){var a=e%10,t=e/10;return Hs(0===a?t:a)}if(1e4>e){for(;e>=10;)e/=10;return Hs(e)}return e/=1e3,Hs(e)}function bs(e,a,t,s){return a?"kelios sekundės":s?"kelių sekundžių":"kelias sekundes"}function js(e,a,t,s){return a?Ps(t)[0]:s?Ps(t)[1]:Ps(t)[2]}function xs(e){return e%10===0||e>10&&20>e}function Ps(e){return zr[e].split("_")}function Ws(e,a,t,s){var n=e+" ";return 1===e?n+js(e,a,t[0],s):a?n+(xs(e)?Ps(t)[1]:Ps(t)[0]):s?n+Ps(t)[1]:n+(xs(e)?Ps(t)[1]:Ps(t)[2])}function As(e,a,t){return t?a%10===1&&11!==a?e[2]:e[3]:a%10===1&&11!==a?e[0]:e[1]}function Es(e,a,t){return e+" "+As(Or[t],e,a)}function Fs(e,a,t){return As(Or[t],e,a)}function zs(e,a){return a?"dažas sekundes":"dažām sekundēm"}function Os(e,a,t,s){var n="";if(a)switch(t){case"s":n="काही सेकंद";break;case"m":n="एक मिनिट";break;case"mm":n="%d मिनिटे";break;case"h":n="एक तास";break;case"hh":n="%d तास";break;case"d":n="एक दिवस";break;case"dd":n="%d दिवस";break;case"M":n="एक महिना";break;case"MM":n="%d महिने";break;case"y":n="एक वर्ष";break;case"yy":n="%d वर्षे"}else switch(t){case"s":n="काही सेकंदां";break;case"m":n="एका मिनिटा";break;case"mm":n="%d मिनिटां";break;case"h":n="एका तासा";break;case"hh":n="%d तासां";break;case"d":n="एका दिवसा";break;case"dd":n="%d दिवसां";break;case"M":n="एका महिन्या";break;case"MM":n="%d महिन्यां";break;case"y":n="एका वर्षा";break;case"yy":n="%d वर्षां"}return n.replace(/%d/i,e)}function Js(e){return 5>e%10&&e%10>1&&~~(e/10)%10!==1}function Cs(e,a,t){var s=e+" ";switch(t){case"m":return a?"minuta":"minutę";case"mm":return s+(Js(e)?"minuty":"minut");case"h":return a?"godzina":"godzinę";case"hh":return s+(Js(e)?"godziny":"godzin");case"MM":return s+(Js(e)?"miesiące":"miesięcy");case"yy":return s+(Js(e)?"lata":"lat")}}function Gs(e,a,t){var s={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},n=" ";return(e%100>=20||e>=100&&e%100===0)&&(n=" de "),e+n+s[t]}function Rs(e,a){var t=e.split("_");return a%10===1&&a%100!==11?t[0]:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?t[1]:t[2]}function Is(e,a,t){var s={mm:a?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===t?a?"минута":"минуту":e+" "+Rs(s[t],+e)}function Ns(e){return e>1&&5>e}function Us(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"pár sekúnd":"pár sekundami";case"m":return a?"minúta":s?"minútu":"minútou";case"mm":return a||s?n+(Ns(e)?"minúty":"minút"):n+"minútami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(Ns(e)?"hodiny":"hodín"):n+"hodinami";case"d":return a||s?"deň":"dňom";case"dd":return a||s?n+(Ns(e)?"dni":"dní"):n+"dňami";case"M":return a||s?"mesiac":"mesiacom";case"MM":return a||s?n+(Ns(e)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return a||s?"rok":"rokom";case"yy":return a||s?n+(Ns(e)?"roky":"rokov"):n+"rokmi"}}function Vs(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nekaj sekund":"nekaj sekundami";case"m":return a?"ena minuta":"eno minuto";case"mm":return n+=1===e?a?"minuta":"minuto":2===e?a||s?"minuti":"minutama":5>e?a||s?"minute":"minutami":a||s?"minut":"minutami";case"h":return a?"ena ura":"eno uro";case"hh":return n+=1===e?a?"ura":"uro":2===e?a||s?"uri":"urama":5>e?a||s?"ure":"urami":a||s?"ur":"urami";case"d":return a||s?"en dan":"enim dnem";case"dd":return n+=1===e?a||s?"dan":"dnem":2===e?a||s?"dni":"dnevoma":a||s?"dni":"dnevi";case"M":return a||s?"en mesec":"enim mesecem";case"MM":return n+=1===e?a||s?"mesec":"mesecem":2===e?a||s?"meseca":"mesecema":5>e?a||s?"mesece":"meseci":a||s?"mesecev":"meseci";case"y":return a||s?"eno leto":"enim letom";case"yy":return n+=1===e?a||s?"leto":"letom":2===e?a||s?"leti":"letoma":5>e?a||s?"leta":"leti":a||s?"let":"leti"}}function Ks(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"leS":-1!==e.indexOf("jar")?a.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?a.slice(0,-3)+"nem":a+" pIq"}function Zs(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"Hu’":-1!==e.indexOf("jar")?a.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?a.slice(0,-3)+"ben":a+" ret"}function $s(e,a,t,s){var n=qs(e);switch(t){case"mm":return n+" tup";case"hh":return n+" rep";case"dd":return n+" jaj";case"MM":return n+" jar";case"yy":return n+" DIS"}}function qs(e){var a=Math.floor(e%1e3/100),t=Math.floor(e%100/10),s=e%10,n="";return a>0&&(n+=_d[a]+"vatlh"),t>0&&(n+=(""!==n?" ":"")+_d[t]+"maH"),s>0&&(n+=(""!==n?" ":"")+_d[s]),""===n?"pagh":n}function Bs(e,a,t,s){var n={s:["viensas secunds","'iensas secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",""+e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",""+e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",""+e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",""+e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",""+e+" ars"]};return s?n[t][0]:a?n[t][0]:n[t][1]}function Qs(e,a){var t=e.split("_");return a%10===1&&a%100!==11?t[0]:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?t[1]:t[2]}function Xs(e,a,t){var s={mm:a?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:a?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===t?a?"хвилина":"хвилину":"h"===t?a?"година":"годину":e+" "+Qs(s[t],+e)}function en(e,a){var t={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},s=/(\[[ВвУу]\]) ?dddd/.test(a)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(a)?"genitive":"nominative";return t[s][e.day()]}function an(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}var tn,sn;sn=Array.prototype.some?Array.prototype.some:function(e){for(var a=Object(this),t=a.length>>>0,s=0;t>s;s++)if(s in a&&e.call(this,a[s],s,a))return!0;return!1};var nn=e.momentProperties=[],_n=!1,rn={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var dn;dn=Object.keys?Object.keys:function(e){var a,t=[];for(a in e)_(e,a)&&t.push(a);return t};var on,mn,un={},ln={},Mn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,hn=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ln={},cn={},Yn=/\d/,yn=/\d\d/,pn=/\d{3}/,fn=/\d{4}/,kn=/[+-]?\d{6}/,Dn=/\d\d?/,Tn=/\d\d\d\d?/,gn=/\d\d\d\d\d\d?/,wn=/\d{1,3}/,vn=/\d{1,4}/,Sn=/[+-]?\d{1,6}/,Hn=/\d+/,bn=/[+-]?\d+/,jn=/Z|[+-]\d\d:?\d\d/gi,xn=/Z|[+-]\d\d(?::?\d\d)?/gi,Pn=/[+-]?\d+(\.\d{1,3})?/,Wn=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,An={},En={},Fn=0,zn=1,On=2,Jn=3,Cn=4,Gn=5,Rn=6,In=7,Nn=8;mn=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var a;for(a=0;a<this.length;++a)if(this[a]===e)return a;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),E("month","M"),Z("M",Dn),Z("MM",Dn,yn),Z("MMM",function(e,a){return a.monthsShortRegex(e)}),Z("MMMM",function(e,a){return a.monthsRegex(e)}),Q(["M","MM"],function(e,a){a[zn]=Y(e)-1}),Q(["MMM","MMMM"],function(e,a,t,s){var n=t._locale.monthsParse(e,s,t._strict);null!=n?a[zn]=n:o(t).invalidMonth=e});var Un=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Vn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Kn="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Zn=Wn,$n=Wn,qn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Bn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Qn=/Z|[+-]\d\d(?::?\d\d)?/,Xn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],e_=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],a_=/^\/?Date\((\-?\d+)/i;e.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),I("Y",0,0,function(){var e=this.year();return 9999>=e?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),E("year","y"),Z("Y",bn),Z("YY",Dn,yn),Z("YYYY",vn,fn),Z("YYYYY",Sn,kn),Z("YYYYYY",Sn,kn),Q(["YYYYY","YYYYYY"],Fn),Q("YYYY",function(a,t){t[Fn]=2===a.length?e.parseTwoDigitYear(a):Y(a)}),Q("YY",function(a,t){t[Fn]=e.parseTwoDigitYear(a)}),Q("Y",function(e,a){a[Fn]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return Y(e)+(Y(e)>68?1900:2e3)};var t_=O("FullYear",!0);e.ISO_8601=function(){};var s_=f("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var e=Fe.apply(null,arguments);return this.isValid()&&e.isValid()?this>e?this:e:u()}),n_=f("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var e=Fe.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:u()}),__=function(){return Date.now?Date.now():+new Date};Re("Z",":"),Re("ZZ",""),Z("Z",xn),Z("ZZ",xn),Q(["Z","ZZ"],function(e,a,t){t._useUTC=!0,t._tzm=Ie(xn,e)});var r_=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var d_=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,i_=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;sa.fn=Ce.prototype;var o_=ia(1,"add"),m_=ia(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var u_=f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ga("gggg","weekYear"),Ga("ggggg","weekYear"),Ga("GGGG","isoWeekYear"),Ga("GGGGG","isoWeekYear"),E("weekYear","gg"),E("isoWeekYear","GG"),Z("G",bn),Z("g",bn),Z("GG",Dn,yn),Z("gg",Dn,yn),Z("GGGG",vn,fn),Z("gggg",vn,fn),Z("GGGGG",Sn,kn),Z("ggggg",Sn,kn),X(["gggg","ggggg","GGGG","GGGGG"],function(e,a,t,s){a[s.substr(0,2)]=Y(e)}),X(["gg","GG"],function(a,t,s,n){t[n]=e.parseTwoDigitYear(a)}),I("Q",0,"Qo","quarter"),E("quarter","Q"),Z("Q",Yn),Q("Q",function(e,a){a[zn]=3*(Y(e)-1)}),I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),E("week","w"),E("isoWeek","W"),Z("w",Dn),Z("ww",Dn,yn),Z("W",Dn),Z("WW",Dn,yn),X(["w","ww","W","WW"],function(e,a,t,s){a[s.substr(0,1)]=Y(e)});var l_={dow:0,doy:6};I("D",["DD",2],"Do","date"),E("date","D"),Z("D",Dn),Z("DD",Dn,yn),Z("Do",function(e,a){return e?a._ordinalParse:a._ordinalParseLenient}),Q(["D","DD"],On),Q("Do",function(e,a){a[On]=Y(e.match(Dn)[0],10)});var M_=O("Date",!0);I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),E("day","d"),E("weekday","e"),E("isoWeekday","E"),Z("d",Dn),Z("e",Dn),Z("E",Dn),Z("dd",function(e,a){return a.weekdaysMinRegex(e)}),Z("ddd",function(e,a){return a.weekdaysShortRegex(e)}),Z("dddd",function(e,a){return a.weekdaysRegex(e)}),X(["dd","ddd","dddd"],function(e,a,t,s){var n=t._locale.weekdaysParse(e,s,t._strict);null!=n?a.d=n:o(t).invalidWeekday=e}),X(["d","e","E"],function(e,a,t,s){a[s]=Y(e)});var h_="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),L_="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),c_="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Y_=Wn,y_=Wn,p_=Wn;I("DDD",["DDDD",3],"DDDo","dayOfYear"),E("dayOfYear","DDD"),Z("DDD",wn),Z("DDDD",pn),Q(["DDD","DDDD"],function(e,a,t){t._dayOfYear=Y(e)}),I("H",["HH",2],0,"hour"),I("h",["hh",2],0,ht),I("k",["kk",2],0,Lt),I("hmm",0,0,function(){return""+ht.apply(this)+R(this.minutes(),2)}),I("hmmss",0,0,function(){return""+ht.apply(this)+R(this.minutes(),2)+R(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+R(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+R(this.minutes(),2)+R(this.seconds(),2)}),ct("a",!0),ct("A",!1),E("hour","h"),Z("a",Yt),Z("A",Yt),Z("H",Dn),Z("h",Dn),Z("HH",Dn,yn),Z("hh",Dn,yn),Z("hmm",Tn),Z("hmmss",gn),Z("Hmm",Tn),Z("Hmmss",gn),Q(["H","HH"],Jn),Q(["a","A"],function(e,a,t){t._isPm=t._locale.isPM(e),t._meridiem=e}),Q(["h","hh"],function(e,a,t){a[Jn]=Y(e),o(t).bigHour=!0}),Q("hmm",function(e,a,t){var s=e.length-2;a[Jn]=Y(e.substr(0,s)),a[Cn]=Y(e.substr(s)),o(t).bigHour=!0}),Q("hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[Jn]=Y(e.substr(0,s)),a[Cn]=Y(e.substr(s,2)),a[Gn]=Y(e.substr(n)),o(t).bigHour=!0}),Q("Hmm",function(e,a,t){var s=e.length-2;a[Jn]=Y(e.substr(0,s)),a[Cn]=Y(e.substr(s))}),Q("Hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[Jn]=Y(e.substr(0,s)),a[Cn]=Y(e.substr(s,2)),a[Gn]=Y(e.substr(n))});var f_=/[ap]\.?m?\.?/i,k_=O("Hours",!0);I("m",["mm",2],0,"minute"),E("minute","m"),Z("m",Dn),Z("mm",Dn,yn),Q(["m","mm"],Cn);var D_=O("Minutes",!1);I("s",["ss",2],0,"second"),E("second","s"),Z("s",Dn),Z("ss",Dn,yn),Q(["s","ss"],Gn);var T_=O("Seconds",!1);I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),E("millisecond","ms"),Z("S",wn,Yn),Z("SS",wn,yn),Z("SSS",wn,pn);var g_;for(g_="SSSS";g_.length<=9;g_+="S")Z(g_,Hn);for(g_="S";g_.length<=9;g_+="S")Q(g_,ft);var w_=O("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var v_=h.prototype;v_.add=o_,v_.calendar=ma,v_.clone=ua,v_.diff=ya,v_.endOf=ja,v_.format=Da,v_.from=Ta,v_.fromNow=ga,v_.to=wa,v_.toNow=va,v_.get=G,v_.invalidAt=Ja,v_.isAfter=la,v_.isBefore=Ma,v_.isBetween=ha,v_.isSame=La,v_.isSameOrAfter=ca,v_.isSameOrBefore=Ya,v_.isValid=za,v_.lang=u_,v_.locale=Sa,v_.localeData=Ha,v_.max=n_,v_.min=s_,v_.parsingFlags=Oa,v_.set=G,v_.startOf=ba,v_.subtract=m_,v_.toArray=Aa,v_.toObject=Ea,v_.toDate=Wa,v_.toISOString=ka,v_.toJSON=Fa,v_.toString=fa,v_.unix=Pa,v_.valueOf=xa,v_.creationData=Ca,v_.year=t_,v_.isLeapYear=pe,v_.weekYear=Ra,v_.isoWeekYear=Ia,v_.quarter=v_.quarters=Za,v_.month=de,v_.daysInMonth=ie,v_.week=v_.weeks=Qa,v_.isoWeek=v_.isoWeeks=Xa,v_.weeksInYear=Ua,v_.isoWeeksInYear=Na,v_.date=M_,v_.day=v_.days=rt,v_.weekday=dt,v_.isoWeekday=it,v_.dayOfYear=Mt,v_.hour=v_.hours=k_,v_.minute=v_.minutes=D_,v_.second=v_.seconds=T_,v_.millisecond=v_.milliseconds=w_,v_.utcOffset=Ve,v_.utc=Ze,v_.local=$e,v_.parseZone=qe,v_.hasAlignedHourOffset=Be,v_.isDST=Qe,v_.isDSTShifted=Xe,v_.isLocal=ea,v_.isUtcOffset=aa,v_.isUtc=ta,v_.isUTC=ta,v_.zoneAbbr=kt,v_.zoneName=Dt,v_.dates=f("dates accessor is deprecated. Use date instead.",M_),v_.months=f("months accessor is deprecated. Use month instead",de),v_.years=f("years accessor is deprecated. Use year instead",t_),v_.zone=f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Ke);var S_=v_,H_={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},b_={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},j_="Invalid date",x_="%d",P_=/\d{1,2}/,W_={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},A_=v.prototype;A_._calendar=H_,A_.calendar=wt,A_._longDateFormat=b_,A_.longDateFormat=vt,A_._invalidDate=j_,A_.invalidDate=St,A_._ordinal=x_,A_.ordinal=Ht,A_._ordinalParse=P_,A_.preparse=bt,A_.postformat=bt,A_._relativeTime=W_,A_.relativeTime=jt,A_.pastFuture=xt,A_.set=g,A_.months=te,A_._months=Vn,A_.monthsShort=se,A_._monthsShort=Kn,A_.monthsParse=_e,A_._monthsRegex=$n,A_.monthsRegex=me,A_._monthsShortRegex=Zn,A_.monthsShortRegex=oe,A_.week=$a,A_._week=l_,A_.firstDayOfYear=Ba,A_.firstDayOfWeek=qa,A_.weekdays=at,A_._weekdays=h_,A_.weekdaysMin=st,A_._weekdaysMin=c_,A_.weekdaysShort=tt,A_._weekdaysShort=L_,A_.weekdaysParse=_t,A_._weekdaysRegex=Y_,A_.weekdaysRegex=ot,A_._weekdaysShortRegex=y_,A_.weekdaysShortRegex=mt,A_._weekdaysMinRegex=p_,A_.weekdaysMinRegex=ut,A_.isPM=yt,A_._meridiemParse=f_,A_.meridiem=pt,j("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10,t=1===Y(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t}}),e.lang=f("moment.lang is deprecated. Use moment.locale instead.",j),e.langData=f("moment.langData is deprecated. Use moment.localeData instead.",W);var E_=Math.abs,F_=qt("ms"),z_=qt("s"),O_=qt("m"),J_=qt("h"),C_=qt("d"),G_=qt("w"),R_=qt("M"),I_=qt("y"),N_=Qt("milliseconds"),U_=Qt("seconds"),V_=Qt("minutes"),K_=Qt("hours"),Z_=Qt("days"),$_=Qt("months"),q_=Qt("years"),B_=Math.round,Q_={s:45,m:45,h:22,d:26,M:11},X_=Math.abs,er=Ce.prototype;er.abs=Ct,er.add=Rt,er.subtract=It,er.as=Zt,er.asMilliseconds=F_,er.asSeconds=z_,er.asMinutes=O_,er.asHours=J_,er.asDays=C_,er.asWeeks=G_,er.asMonths=R_,er.asYears=I_,er.valueOf=$t,er._bubble=Ut,er.get=Bt,er.milliseconds=N_,er.seconds=U_,er.minutes=V_,er.hours=K_,er.days=Z_,er.weeks=Xt,er.months=$_,er.years=q_,er.humanize=ss,er.toISOString=ns,er.toString=ns,er.toJSON=ns,er.locale=Sa,er.localeData=Ha,er.toIsoString=f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ns),er.lang=u_,I("X",0,0,"unix"),I("x",0,0,"valueOf"),Z("x",bn),Z("X",Pn),Q("X",function(e,a,t){t._d=new Date(1e3*parseFloat(e,10))}),Q("x",function(e,a,t){t._d=new Date(Y(e))}),e.version="2.13.0",a(Fe),e.fn=S_,e.min=Oe,e.max=Je,e.now=__,e.utc=d,e.unix=Tt,e.months=Et,e.isDate=s,e.locale=j,e.invalid=u,e.duration=sa,e.isMoment=L,e.weekdays=zt,e.parseZone=gt,e.localeData=W,e.isDuration=Ge,e.monthsShort=Ft,e.weekdaysMin=Jt,e.defineLocale=x,e.updateLocale=P,e.locales=A,e.weekdaysShort=Ot,e.normalizeUnits=F,e.relativeTimeThreshold=ts,e.prototype=S_;var ar=e,tr=(ar.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,a,t){return 12>e?t?"vm":"VM":t?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),ar.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}}),{1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"}),sr={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},nr=(ar.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return 12>e?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return sr[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return tr[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),ar.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}}),{1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"}),_r={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},rr=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5},dr={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},ir=function(e){return function(a,t,s,n){var _=rr(a),r=dr[e][rr(a)];return 2===_&&(r=r[t?0:1]),r.replace(/%d/i,a)}},or=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"],mr=(ar.defineLocale("ar",{months:or,monthsShort:or,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return 12>e?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:ir("s"),m:ir("m"),mm:ir("m"),h:ir("h"),hh:ir("h"),d:ir("d"),dd:ir("d"),M:ir("M"),MM:ir("M"),y:ir("y"),yy:ir("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return _r[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){
return nr[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),{1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"}),ur=(ar.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,a,t){return 4>e?"gecə":12>e?"səhər":17>e?"gündüz":"axşam"},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var a=e%10,t=e%100-a,s=e>=100?100:null;return e+(mr[a]||mr[t]||mr[s])},week:{dow:1,doy:7}}),ar.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:rs,mm:rs,h:rs,hh:rs,d:"дзень",dd:rs,M:"месяц",MM:rs,y:"год",yy:rs},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,a,t){return 4>e?"ночы":12>e?"раніцы":17>e?"дня":"вечара"},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e%10!==2&&e%10!==3||e%100===12||e%100===13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}}),ar.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-ев":0===t?e+"-ен":t>10&&20>t?e+"-ти":1===a?e+"-ви":2===a?e+"-ри":7===a||8===a?e+"-ми":e+"-ти"},week:{dow:1,doy:7}}),{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"}),lr={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},Mr=(ar.defineLocale("bn",{months:"জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),weekdaysMin:"রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return lr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return ur[e]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,a){return 12===e&&(e=0),"রাত"===a&&e>=4||"দুপুর"===a&&5>e||"বিকাল"===a?e+12:e},meridiem:function(e,a,t){return 4>e?"রাত":10>e?"সকাল":17>e?"দুপুর":20>e?"বিকাল":"রাত"},week:{dow:0,doy:6}}),{1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"}),hr={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"},Lr=(ar.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return hr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Mr[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,a){return 12===e&&(e=0),"མཚན་མོ"===a&&e>=4||"ཉིན་གུང"===a&&5>e||"དགོང་དག"===a?e+12:e},meridiem:function(e,a,t){return 4>e?"མཚན་མོ":10>e?"ཞོགས་ཀས":17>e?"ཉིན་གུང":20>e?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}}),ar.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:ds,h:"un eur",hh:"%d eur",d:"un devezh",dd:ds,M:"ur miz",MM:ds,y:"ur bloaz",yy:is},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){var a=1===e?"añ":"vet";return e+a},week:{dow:1,doy:4}}),ar.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:ls,mm:ls,h:ls,hh:ls,d:"dan",dd:ls,M:"mjesec",MM:ls,y:"godinu",yy:ls},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),ar.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,a){var t=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return("w"===a||"W"===a)&&(t="a"),e+t},week:{dow:1,doy:4}}),"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")),cr="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),Yr=(ar.defineLocale("cs",{months:Lr,monthsShort:cr,monthsParse:function(e,a){var t,s=[];for(t=0;12>t;t++)s[t]=new RegExp("^"+e[t]+"$|^"+a[t]+"$","i");return s}(Lr,cr),shortMonthsParse:function(e){var a,t=[];for(a=0;12>a;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(cr),longMonthsParse:function(e){var a,t=[];for(a=0;12>a;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(Lr),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:hs,m:hs,mm:hs,h:hs,hh:hs,d:hs,dd:hs,M:hs,MM:hs,y:hs,yy:hs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){var a=/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран";return e+a},past:"%s каялла",s:"пӗр-ик ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},ordinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}}),ar.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var a=e,t="",s=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return a>20?t=40===a||50===a||60===a||80===a||100===a?"fed":"ain":a>0&&(t=s[a]),e+t},week:{dow:1,doy:4}}),ar.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY HH:mm"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Ls,mm:"%d Minuten",h:Ls,hh:"%d Stunden",d:Ls,dd:Ls,M:Ls,MM:Ls,y:Ls,yy:Ls},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:cs,mm:"%d Minuten",h:cs,hh:"%d Stunden",d:cs,dd:cs,M:cs,MM:cs,y:cs,yy:cs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"]),yr=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],pr=(ar.defineLocale("dv",{months:Yr,monthsShort:Yr,weekdays:yr,weekdaysShort:yr,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,a,t){return 12>e?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,doy:12}}),ar.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,a){return/D/.test(a.substring(0,a.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,a,t){return e>11?t?"μμ":"ΜΜ":t?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,a){var t=this._calendarEl[e],s=a&&a.hours();return D(t)&&(t=t.apply(a)),t.replace("{}",s%12===1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}}),ar.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),ar.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t}}),ar.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),ar.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),ar.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),ar.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-an de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,a,t){return e>11?t?"p.t.m.":"P.T.M.":t?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}}),"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),fr="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),kr=(ar.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?fr[e.month()]:pr[e.month()]},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),ar.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:Ys,m:Ys,mm:Ys,h:Ys,hh:Ys,d:Ys,dd:"%d päeva",M:Ys,MM:Ys,y:Ys,yy:Ys},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"}),Dr={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"},Tr=(ar.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,a,t){return 12>e?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return Dr[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return kr[e]}).replace(/,/g,"،")},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}}),"nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),gr=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",Tr[7],Tr[8],Tr[9]],wr=(ar.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),
longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:ys,m:ys,mm:ys,h:ys,hh:ys,d:ys,dd:ys,M:ys,MM:ys,y:ys,yy:ys},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")}}),ar.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")},week:{dow:1,doy:4}}),ar.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(e){return e+(1===e?"er":"")},week:{dow:1,doy:4}}),"jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),vr="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),Sr=(ar.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?vr[e.month()]:wr[e.month()]},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"]),Hr=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],br=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],jr=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],xr=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],Pr=(ar.defineLocale("gd",{months:Sr,monthsShort:Hr,monthsParseExact:!0,weekdays:br,weekdaysShort:jr,weekdaysMin:xr,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},ordinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){var a=1===e?"d":e%10===2?"na":"mh";return e+a},week:{dow:1,doy:4}}),ar.defineLocale("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),monthsParseExact:!0,weekdays:"Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return"uns segundos"===e?"nuns segundos":"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:7}}),ar.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10===0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,a,t){return 5>e?"לפנות בוקר":10>e?"בבוקר":12>e?t?'לפנה"צ':"לפני הצהריים":18>e?t?'אחה"צ':"אחרי הצהריים":"בערב"}}),{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"}),Wr={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},Ar=(ar.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return Wr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Pr[e]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,a){return 12===e&&(e=0),"रात"===a?4>e?e:e+12:"सुबह"===a?e:"दोपहर"===a?e>=10?e:e+12:"शाम"===a?e+12:void 0},meridiem:function(e,a,t){return 4>e?"रात":10>e?"सुबह":17>e?"दोपहर":20>e?"शाम":"रात"},week:{dow:0,doy:6}}),ar.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:fs,mm:fs,h:fs,hh:fs,d:"dan",dd:fs,M:"mjesec",MM:fs,y:"godinu",yy:fs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),"vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")),Er=(ar.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,a,t){return 12>e?t===!0?"de":"DE":t===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return Ds.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return Ds.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:ks,m:ks,mm:ks,h:ks,hh:ks,d:ks,dd:ks,M:ks,MM:ks,y:ks,yy:ks},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),ar.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return 4>e?"գիշերվա":12>e?"առավոտվա":17>e?"ցերեկվա":"երեկոյան"},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,a){switch(a){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,doy:7}}),ar.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"siang"===a?e>=11?e:e+12:"sore"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return 11>e?"pagi":15>e?"siang":19>e?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),ar.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:gs,m:gs,mm:gs,h:"klukkustund",hh:gs,d:gs,dd:gs,M:gs,MM:gs,y:gs,yy:gs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),ar.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"Ah時m分s秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah時m分",LLLL:"YYYY年M月D日Ah時m分 dddd"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,a,t){return 12>e?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},ordinalParse:/\d{1,2}日/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}}),ar.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,a){return 12===e&&(e=0),"enjing"===a?e:"siyang"===a?e>=11?e:e+12:"sonten"===a||"ndalu"===a?e+12:void 0},meridiem:function(e,a,t){return 11>e?"enjing":15>e?"siyang":19>e?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}}),ar.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":20>e||100>=e&&e%20===0||e%100===0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}}),{0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"}),Fr=(ar.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){var a=e%10,t=e>=100?100:null;return e+(Er[e]||Er[a]||Er[t])},week:{dow:1,doy:7}}),ar.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}}),ar.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h시 m분",LLLL:"YYYY년 MMMM D일 dddd A h시 m분"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"일분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,a,t){return 12>e?"오전":"오후"}}),{0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"}),zr=(ar.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кече саат] LT",lastWeek:"[Өткен аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(e){var a=e%10,t=e>=100?100:null;return e+(Fr[e]||Fr[a]||Fr[t])},week:{dow:1,doy:7}}),ar.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:vs,past:Ss,s:"e puer Sekonnen",m:ws,mm:"%d Minutten",h:ws,hh:"%d Stonnen",d:ws,dd:"%d Deeg",M:ws,MM:"%d Méint",y:ws,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(e){return"ຕອນແລງ"===e},meridiem:function(e,a,t){return 12>e?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},ordinalParse:/(ທີ່)\d{1,2}/,ordinal:function(e){return"ທີ່"+e}}),{m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"}),Or=(ar.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_")},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:bs,m:js,mm:Ws,h:js,hh:Ws,d:js,dd:Ws,M:js,MM:Ws,y:js,yy:Ws},ordinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}}),{m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")}),Jr=(ar.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:zs,m:Fs,mm:Es,h:Fs,hh:Es,d:Fs,dd:Es,M:Fs,MM:Es,y:Fs,yy:Es},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&4>=e?a[1]:a[2]},translate:function(e,a,t){var s=Jr.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+Jr.correctGrammaticalCase(e,s)}}),Cr=(ar.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:
case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var e=["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:Jr.translate,mm:Jr.translate,h:Jr.translate,hh:Jr.translate,d:"dan",dd:Jr.translate,M:"mjesec",MM:Jr.translate,y:"godinu",yy:Jr.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),ar.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-ев":0===t?e+"-ен":t>10&&20>t?e+"-ти":1===a?e+"-ви":2===a?e+"-ри":7===a||8===a?e+"-ми":e+"-ти"},week:{dow:1,doy:7}}),ar.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(e,a){return 12===e&&(e=0),"രാത്രി"===a&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===a||"വൈകുന്നേരം"===a?e+12:e},meridiem:function(e,a,t){return 4>e?"രാത്രി":12>e?"രാവിലെ":17>e?"ഉച്ച കഴിഞ്ഞ്":20>e?"വൈകുന്നേരം":"രാത്രി"}}),{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"}),Gr={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},Rr=(ar.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:Os,m:Os,mm:Os,h:Os,hh:Os,d:Os,dd:Os,M:Os,MM:Os,y:Os,yy:Os},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return Gr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Cr[e]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(e,a){return 12===e&&(e=0),"रात्री"===a?4>e?e:e+12:"सकाळी"===a?e:"दुपारी"===a?e>=10?e:e+12:"सायंकाळी"===a?e+12:void 0},meridiem:function(e,a,t){return 4>e?"रात्री":10>e?"सकाळी":17>e?"दुपारी":20>e?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}}),ar.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return 11>e?"pagi":15>e?"tengahari":19>e?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),ar.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return 11>e?"pagi":15>e?"tengahari":19>e?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),{1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"}),Ir={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"},Nr=(ar.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(e){return Ir[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Rr[e]})},week:{dow:1,doy:4}}),ar.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"}),Ur={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},Vr=(ar.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return Ur[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Nr[e]})},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(e,a){return 12===e&&(e=0),"राति"===a?4>e?e:e+12:"बिहान"===a?e:"दिउँसो"===a?e>=10?e:e+12:"साँझ"===a?e+12:void 0},meridiem:function(e,a,t){return 3>e?"राति":12>e?"बिहान":16>e?"दिउँसो":20>e?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}}),"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),Kr="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),Zr=(ar.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?Kr[e.month()]:Vr[e.month()]},monthsParseExact:!0,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),ar.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"}),$r={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"},qr=(ar.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(e){return $r[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Zr[e]})},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(e,a){return 12===e&&(e=0),"ਰਾਤ"===a?4>e?e:e+12:"ਸਵੇਰ"===a?e:"ਦੁਪਹਿਰ"===a?e>=10?e:e+12:"ਸ਼ਾਮ"===a?e+12:void 0},meridiem:function(e,a,t){return 4>e?"ਰਾਤ":10>e?"ਸਵੇਰ":17>e?"ਦੁਪਹਿਰ":20>e?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,doy:6}}),"styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),Br="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),Qr=(ar.defineLocale("pl",{months:function(e,a){return""===a?"("+Br[e.month()]+"|"+qr[e.month()]+")":/D MMMM/.test(a)?Br[e.month()]:qr[e.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:Cs,mm:Cs,h:Cs,hh:Cs,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:Cs,y:"rok",yy:Cs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("pt-br",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"}),ar.defineLocale("pt",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),ar.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:Gs,h:"o oră",hh:Gs,d:"o zi",dd:Gs,M:"o lună",MM:Gs,y:"un an",yy:Gs},week:{dow:1,doy:7}}),[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i]),Xr=(ar.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:Qr,longMonthsParse:Qr,shortMonthsParse:Qr,monthsRegex:/^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,monthsShortRegex:/^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,monthsStrictRegex:/^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|марта?|июн[яь]|июл[яь]|ма[яй])/i,monthsShortStrictRegex:/^(нояб\.|февр\.|сент\.|июль|янв\.|июн[яь]|мар[.т]|авг\.|апр\.|окт\.|дек\.|ма[яй])/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:Is,mm:Is,h:"час",hh:Is,d:"день",dd:Is,M:"месяц",MM:Is,y:"год",yy:Is},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,a,t){return 4>e?"ночи":12>e?"утра":17>e?"дня":"вечера"},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:7}}),ar.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},ordinalParse:/\d{1,2} වැනි/,ordinal:function(e){return e+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(e){return"ප.ව."===e||"පස් වරු"===e},meridiem:function(e,a,t){return e>11?t?"ප.ව.":"පස් වරු":t?"පෙ.ව.":"පෙර වරු"}}),"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")),ed="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),ad=(ar.defineLocale("sk",{months:Xr,monthsShort:ed,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:Us,m:Us,mm:Us,h:Us,hh:Us,d:Us,dd:Us,M:Us,MM:Us,y:Us,yy:Us},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:Vs,m:Vs,mm:Vs,h:Vs,hh:Vs,d:Vs,dd:Vs,M:Vs,MM:Vs,y:Vs,yy:Vs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),ar.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,a,t){return 12>e?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&4>=e?a[1]:a[2]},translate:function(e,a,t){var s=ad.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+ad.correctGrammaticalCase(e,s)}}),td=(ar.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){var e=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:ad.translate,mm:ad.translate,h:ad.translate,hh:ad.translate,d:"дан",dd:ad.translate,M:"месец",MM:ad.translate,y:"годину",yy:ad.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&4>=e?a[1]:a[2]},translate:function(e,a,t){var s=td.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+td.correctGrammaticalCase(e,s)}}),sd=(ar.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var e=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:td.translate,mm:td.translate,h:td.translate,hh:td.translate,d:"dan",dd:td.translate,M:"mesec",MM:td.translate,y:"godinu",yy:td.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),ar.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,a,t){return 11>e?"ekuseni":15>e?"emini":19>e?"entsambama":"ebusuku"},meridiemHour:function(e,a){return 12===e&&(e=0),"ekuseni"===a?e:"emini"===a?e>=11?e:e+12:"entsambama"===a||"ebusuku"===a?0===e?0:e+12:void 0},ordinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}}),ar.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"e":1===a?"a":2===a?"a":"e";return e+t},week:{dow:1,doy:4}}),ar.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}}),{1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"}),nd={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"},_d=(ar.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},preparse:function(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(e){return nd[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return sd[e]})},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,a,t){return 2>e?" யாமம்":6>e?" வைகறை":10>e?" காலை":14>e?" நண்பகல்":18>e?" எற்பாடு":22>e?" மாலை":" யாமம்"},meridiemHour:function(e,a){return 12===e&&(e=0),"யாமம்"===a?2>e?e:e+12:"வைகறை"===a||"காலை"===a?e:"நண்பகல்"===a&&e>=10?e:e+12},week:{dow:0,doy:6}}),ar.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},ordinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(e,a){return 12===e&&(e=0),"రాత్రి"===a?4>e?e:e+12:"ఉదయం"===a?e:"మధ్యాహ్నం"===a?e>=10?e:e+12:"సాయంత్రం"===a?e+12:void 0},meridiem:function(e,a,t){return 4>e?"రాత్రి":10>e?"ఉదయం":17>e?"మధ్యాహ్నం":20>e?"సాయంత్రం":"రాత్రి"},week:{dow:0,doy:6}}),ar.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H นาฬิกา m นาที",LTS:"H นาฬิกา m นาที s วินาที",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H นาฬิกา m นาที",LLLL:"วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,a,t){return 12>e?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}}),ar.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),"pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")),rd=(ar.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:Ks,past:Zs,s:"puS lup",m:"wa’ tup",mm:$s,h:"wa’ rep",hh:$s,d:"wa’ jaj",dd:$s,M:"wa’ jar",MM:$s,y:"wa’ DIS",yy:$s},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"}),dd=(ar.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(e){if(0===e)return e+"'ıncı";var a=e%10,t=e%100-a,s=e>=100?100:null;return e+(rd[a]||rd[t]||rd[s])},week:{dow:1,doy:7}}),ar.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,a,t){return e>11?t?"d'o":"D'O":t?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:Bs,m:Bs,mm:Bs,h:Bs,hh:Bs,d:Bs,dd:Bs,M:Bs,MM:Bs,y:Bs,yy:Bs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),ar.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),ar.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}}),ar.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:en,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:an("[Сьогодні "),nextDay:an("[Завтра "),lastDay:an("[Вчора "),nextWeek:an("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return an("[Минулої] dddd [").call(this);case 1:case 2:case 4:return an("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:Xs,mm:Xs,h:"годину",hh:Xs,d:"день",dd:Xs,M:"місяць",MM:Xs,y:"рік",yy:Xs},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,a,t){return 4>e?"ночі":12>e?"ранку":17>e?"дня":"вечора"},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}}),ar.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}}),ar.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,a,t){return 12>e?t?"sa":"SA":t?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),ar.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),ar.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm分",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah点mm分",llll:"YYYY年MMMD日ddddAh点mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"下午"===a||"晚上"===a?e+12:e>=11?e:e+12},meridiem:function(e,a,t){var s=100*e+a;return 600>s?"凌晨":900>s?"早上":1130>s?"上午":1230>s?"中午":1800>s?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var e,a;return e=ar().startOf("week"),a=this.diff(e,"days")>=7?"[下]":"[本]",0===this.minutes()?a+"dddAh点整":a+"dddAh点mm"},lastWeek:function(){var e,a;return e=ar().startOf("week"),a=this.unix()<e.unix()?"[上]":"[本]",0===this.minutes()?a+"dddAh点整":a+"dddAh点mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}}),ar.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"早上"===a||"上午"===a?e:"中午"===a?e>=11?e:e+12:"下午"===a||"晚上"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return 900>s?"早上":1130>s?"上午":1230>s?"中午":1800>s?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1分鐘",mm:"%d分鐘",h:"1小時",hh:"%d小時",d:"1天",dd:"%d天",M:"1個月",MM:"%d個月",y:"1年",yy:"%d年"}}),ar);return dd.locale("en"),dd});

},{}],7:[function(require,module,exports){
/**
 * UAParser.js v0.7.11
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.11',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function () {

            var result, i = 0, j, k, p, q, matches, match, args = arguments;

            // loop through all regexes maps
            while (i < args.length && !matches) {

                var regex = args[i],       // even sequence (0,2,4,..)
                    props = args[i + 1];   // odd sequence (1,3,5,..)

                // construct object barebones
                if (typeof result === UNDEF_TYPE) {
                    result = {};
                    for (p in props) {
                        if (props.hasOwnProperty(p)){
                            q = props[p];
                            if (typeof q === OBJ_TYPE) {
                                result[q[0]] = undefined;
                            } else {
                                result[q] = undefined;
                            }
                        }
                    }
                }

                // try matching uastring with regexes
                j = k = 0;
                while (j < regex.length && !matches) {
                    matches = regex[j++].exec(this.getUA());
                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        result[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        result[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                result[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            return result;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(OPiOS)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
            ], [NAME, VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
            ], [NAME, VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i      // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(MicroMessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /(qqbrowser)[\/\s]?([\w\.]+)/i                                      // QQBrowser
            ], [NAME, VERSION], [

            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
            /JUC.+(ucweb)[\/\s]?([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /XiaoMi\/MiuiBrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i         // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /FBAV\/([\w\.]+);/i                                                 // Facebook App for iOS
            ], [VERSION, [NAME, 'Facebook']], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]

            /* /////////////////////
            // Media players BEGIN
            ////////////////////////

            , [

            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
            /(coremedia) v((\d+)[\w\._]+)/i
            ], [NAME, VERSION], [

            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
            ], [NAME, VERSION], [

            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
            ], [NAME, VERSION], [

            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
            ], [NAME, VERSION], [
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
            ], [NAME, VERSION], [

            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
            ], [[NAME, 'Flip Player'], VERSION], [

            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [

            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                // Gstreamer
            ], [NAME, VERSION], [

            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                // Java/urllib/requests/wget/cURL
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
            ], [NAME, VERSION], [

            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
            ], [[NAME, /_/g, ' '], VERSION], [

            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                // MPlayer SVN
            ], [NAME, VERSION], [

            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
            ], [NAME, VERSION], [

            /(mplayer)/i,                                                       // MPlayer (no other info)
            /(yourmuze)/i,                                                      // YourMuze
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
            ], [NAME], [

            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
            ], [NAME, VERSION], [

            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
            ], [NAME, VERSION], [

            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
            ], [NAME, VERSION], [

            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
            /(winamp)\s((\d+)[\w\.-]+)/i,
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
            ], [NAME, VERSION], [

            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio
            ], [NAME], [

            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION], [

            /(smp)((\d+)[\d\.]+)/i                                              // SMP
            ], [NAME, VERSION], [

            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
            /(vlc)\/((\d+)[\w\.-]+)/i,
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
            ], [NAME, VERSION], [

            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
            /(windows-media-player)\/((\d+)[\w\.-]+)/i
            ], [[NAME, /-/g, ' '], VERSION], [

            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                // Windows Media Server
            ], [VERSION, [NAME, 'Windows']], [

            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
            ], [NAME, VERSION], [

            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
            ], [[NAME, 'rad.io'], VERSION]

            //////////////////////
            // Media players END
            ////////////////////*/

        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w+)*/i,                                                    // ZTE
            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w+)*/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s[6])/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
            /sie-(\w+)*/i                                                       // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+(\w+)\s+build\/hm\1/i,                                        // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,                   // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

            /\s(tablet)[;\/]/i,                                                 // Unidentifiable Tablet
            /\s(mobile)[;\/]/i                                                  // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL]

            /*//////////////////////////
            // TODO: move to string map
            ////////////////////////////

            /(C6603)/i                                                          // Sony Xperia Z C6603
            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /(C6903)/i                                                          // Sony Xperia Z 1
            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

            /(R1001)/i                                                          // Oppo R1001
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
            /(X9006)/i                                                          // Oppo Find 7a
            ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
            /(R2001)/i                                                          // Oppo YOYO R2001
            ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
            /(R815)/i                                                           // Oppo Clover R815
            ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
             /(U707)/i                                                          // Oppo Find Way S
            ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [

            /(T3C)/i                                                            // Advan Vandroid T3C
            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

            /(V972M)/i                                                          // ZTE V972M
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

            /////////////
            // END TODO
            ///////////*/

        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i                                               // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
            /(haiku)\s(\w+)/i,                                                  // Haiku
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////


    var UAParser = function (uastring, extensions) {

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = mapper.rgx.apply(this, rgxmap.browser);
            browser.major = util.major(browser.version);
            return browser;
        };
        this.getCPU = function () {
            return mapper.rgx.apply(this, rgxmap.cpu);
        };
        this.getDevice = function () {
            return mapper.rgx.apply(this, rgxmap.device);
        };
        this.getEngine = function () {
            return mapper.rgx.apply(this, rgxmap.engine);
        };
        this.getOS = function () {
            return mapper.rgx.apply(this, rgxmap.os);
        };
        this.getResult = function() {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };


    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof(define) === FUNC_TYPE && define.amd) {
            define("ua-parser-js", [], function () {
                return UAParser;
            });
        } else {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window.jQuery || window.Zepto;
    if (typeof $ !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);

},{}],8:[function(require,module,exports){
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&i<o;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&i<a;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,y=c.bind,d=Object.create,g=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;c<a;c++){var f=o[c];t&&void 0!==r[f]||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(d)return d(n);g.prototype=n;var t=new g;return g.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&t<=A};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;if(e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),void 0!==e&&e!==-1)return n[e]},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-(1/0),o=-(1/0);if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-(1/0)&&i===-(1/0))&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e<i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;i<e;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){if(null!=n)return null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){if(null!=n)return null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);o<a;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;f<l;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);o<a;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);e<u;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;o<r&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;e<t;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(y&&n.bind===y)return y.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;o<u;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(t=1;t<e;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,l<=0||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;f<t&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;a<i;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;i<o;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;a<c;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n||(k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length)},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return void 0===n},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return void 0===e&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(n){throw n.source=i,n}var a=function(n){return o.call(this,n,m)},c=t.variable||"obj";return a.source="function("+c+"){\n"+i+"}",a},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setLoginInfo = setLoginInfo;
exports.getLoginInfo = getLoginInfo;
exports.buildUserSettings = buildUserSettings;
exports.pullUserSettings = pullUserSettings;
exports.pushUserSettings = pushUserSettings;
exports.sendVerificationEmail = sendVerificationEmail;
exports.setLoginInfoFromAuthCookie = setLoginInfoFromAuthCookie;
exports.scheduleNextRefresh = scheduleNextRefresh;
exports.cancelRefresh = cancelRefresh;

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _common = require('./common');

var _Conf = require('./classes/Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refreshTimeout;

const GHOSTERY_DOMAIN = _globals2.default.GHOSTERY_DOMAIN,
      API_ROOT_URL = 'https://consumerapi.' + GHOSTERY_DOMAIN + '.com',
      VERIFICATION_URL = 'https://signon.' + GHOSTERY_DOMAIN + '.com/register/verify/',
      REDIRECT_URL = 'https://extension.' + GHOSTERY_DOMAIN + '.com/' + _Conf2.default.language + '/settings/',
      SIGNON_URL = 'https://signon.' + GHOSTERY_DOMAIN + '.com/',
      AUTH_COOKIE = "AUTH",
      REFRESH_OFFSET = 60000,
      LOGOUT_TIMEOUT = 604800000,
      SYNC_SET = new Set(_globals2.default.SYNC_ARRAY);

function setLoginInfo(message, fromCookie) {
	if (message.user_token && message.decoded_user_token) {
		var user_token = message.user_token,
		    decoded_user_token = message.decoded_user_token,
		    is_validated = typeof decoded_user_token.ClaimEmailAddressValidated === "string" && decoded_user_token.ClaimEmailAddressValidated.toLowerCase() === "true" ? true : false,
		    email = decoded_user_token.ClaimEmailAddress;

		_Conf2.default.login_info = {
			'logged_in': true,
			'email': email,
			'user_token': user_token,
			'decoded_user_token': decoded_user_token,
			'is_validated': is_validated,
			'last_refresh_time': 0
		};

		if (!fromCookie) {
			_setAuthCookie(SIGNON_URL, user_token, decoded_user_token);
		}

		return _pullUserSettings(user_token, decoded_user_token).catch(err => {
			(0, _common.log)('setLoginInfo _pullUserSettings warning:', err);
		}).then(settings => {
			pushUserSettings({ conf: buildUserSettings() });
			return _Conf2.default.login_info;
		});
	} else {
		return Promise.resolve(_logOut());
	}
}

function getLoginInfo(current = false) {
	if (current) {
		return Promise.resolve(_Conf2.default.login_info);
	} else {
		if (!_Conf2.default.login_info.is_validated) {
			return _refreshLoginInfo().then(login_info => {
				return login_info;
			});
		} else {
			return Promise.resolve(_Conf2.default.login_info);
		}
	}
}

function buildUserSettings() {
	const settings = {};
	SYNC_SET.forEach(key => {
		settings[key] = _Conf2.default[key];
	});

	return settings;
}

function pullUserSettings() {
	var login_info = _Conf2.default.login_info;
	if (login_info.logged_in) {
		return _pullUserSettings(login_info.user_token, login_info.decoded_user_token);
	} else {
		return Promise.reject("User not logged in");
	}
}

function pushUserSettings(settings) {
	var login_info = _Conf2.default.login_info,
	    logged_in = login_info.logged_in,
	    user_token = login_info.user_token,
	    decoded_user_token = login_info.decoded_user_token,
	    userId = decoded_user_token ? decoded_user_token.UserId : undefined;

	if (logged_in && user_token && userId) {
		var query = '{"SettingsJson":' + '\'' + JSON.stringify(settings.conf) + '\'}';
		(0, _utils.postJson)(API_ROOT_URL + '/api/Sync/' + userId, query, { "Authorization": "Bearer " + user_token }).catch(e => {
			(0, _common.log)('Error: post api/Sync failed in pushUserSettings', e);
		});
	}
}

function sendVerificationEmail() {
	var login_info = _Conf2.default.login_info,
	    decoded_user_token = login_info.decoded_user_token,
	    email = login_info.email,
	    userId = decoded_user_token ? decoded_user_token.UserId : undefined;

	if (userId) {
		var params = {
			UserId: userId,
			RedirectUrlToAddCodeSuffixOn: VERIFICATION_URL,
			FooterUrl: VERIFICATION_URL,
			VerificationContinueUrl: REDIRECT_URL
		};
		var query = JSON.stringify(params);
		return (0, _utils.postJson)(API_ROOT_URL + '/api/Validation/Send', query).then(result => {
			(0, _common.log)('post api/Validation/Send successful', result);
			return {
				success: true,
				email: email
			};
		}).catch(e => {
			(0, _common.log)('Error: post api/Validation/Send failed', e);
			return Promise.reject({
				success: false,
				email: email
			});
		});
	} else {
		(0, _common.log)('post api/Validation/Send do nothing when user is not logged in');
		return Promise.resolve({
			success: false,
			email: email
		});
	}
}

function setLoginInfoFromAuthCookie(url) {
	var urlArray = ["https://extension.ghostery.com", "https://extension.ghosterystage.com", "http://extension.ghosterydev.com", "https://signon.ghostery.com", "https://signon.ghosterystage.com", "https://account.ghostery.com", "https://account.ghosterystage.com"],
	    urlArraySize = urlArray.length,
	    urlArrayIndex = 0;

	function doCookie(cookie) {
		user_token = cookie.value;
		if (user_token) {
			decoded_user_token = (0, _common.decodeJwt)(user_token).payload;
			(0, _common.log)("setLoginInfoFromAuthCookie: AUTH cookie found. Decoded user token:", decoded_user_token);
			var message = {
				user_token: user_token,
				decoded_user_token: decoded_user_token
			};
			return setLoginInfo(message, true);
		}
	}

	function getCookie(url) {
		return new Promise((resolve, reject) => {
			chrome.cookies.get({ url: url, name: AUTH_COOKIE }, cookie => {
				if (cookie) {
					let result = doCookie(cookie);
					reject(result);
				} else {
					resolve();
				}
			});
		});
	}

	function processCookie() {
		if (urlArrayIndex < urlArraySize) {
			return getCookie(urlArray[urlArrayIndex++]).then(() => {
				return processCookie();
			});
		} else {
			return Promise.reject(false);
		}
	}

	var login_info = _Conf2.default.login_info,
	    decoded_user_token = login_info.decoded_user_token,
	    user_token = login_info.user_token,
	    logged_in = login_info.logged_in || false,
	    is_validated = login_info.is_validated || false;

	if (logged_in && is_validated) {
		_setAuthCookie(url, user_token, decoded_user_token);

		return Promise.resolve(false);
	} else {
		return processCookie().catch(result => {
			if (result === false) {
				(0, _common.log)('NO COOKIES');
				return Promise.resolve(false);
			} else {
				(0, _common.log)('COOKIE FOUND', result);
				return Promise.resolve(true);
			}
		});
	}
}

function scheduleNextRefresh() {
	cancelRefresh();

	var login_info = _Conf2.default.login_info;
	if (!login_info.logged_in) {
		return;
	}

	var decoded_user_token = login_info.decoded_user_token,
	    last_refresh_time = login_info.last_refresh_time,
	    tokenExpiration = _getExpirationTimeout(decoded_user_token),
	    currentTime = new Date().getTime(),
	    expiresIn = last_refresh_time ? tokenExpiration - currentTime + last_refresh_time : tokenExpiration;

	(0, _common.log)('scheduleNextRefresh: token expiresIn', expiresIn, 'Last refresh was', new Date(last_refresh_time).toLocaleTimeString());

	if (expiresIn + LOGOUT_TIMEOUT > REFRESH_OFFSET) {
		if (expiresIn > REFRESH_OFFSET) {
			(0, _common.log)('scheduleNextRefresh: creating new refreshTimeout for', expiresIn - REFRESH_OFFSET);
			refreshTimeout = setInterval(() => {
				_refreshLoginInfo().then(() => {
					scheduleNextRefresh();
				});
			}, expiresIn - REFRESH_OFFSET);
		} else {
			(0, _common.log)('scheduleNextRefresh: token refreshing now...');
			_refreshLoginInfo().then(() => {
				scheduleNextRefresh();
			});
		}
	} else {
		(0, _common.log)('_scheduleNextRefresh: token is more than a week old, logging out...');
		(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _logOut());
	}
}

function cancelRefresh() {
	if (refreshTimeout) {
		clearTimeout(refreshTimeout);
		refreshTimeout = undefined;
	}
}

function _logOut() {
	_Conf2.default.login_info = {
		'logged_in': false,
		'email': '',
		'user_token': '',
		'decoded_user_token': {},
		'is_validated': false,
		'last_refresh_time': 0
	};

	_deleteAuthCookie();

	return _Conf2.default.login_info;
}

function _getExpirationTimeout(decoded_user_token) {
	return decoded_user_token.exp >= decoded_user_token.nbf ? (decoded_user_token.exp - decoded_user_token.nbf) * 1000 : 0;
}

function _refreshLoginInfo() {
	var login_info = _Conf2.default.login_info;
	if (!login_info.logged_in) {
		return Promise.resolve(_logOut());
	}

	let decoded_user_token = login_info.decoded_user_token;
	if (!decoded_user_token || !decoded_user_token.RefreshToken) {
		(0, _common.log)("decoded_user_token or decoded_user_token.RefreshToken is null.");
		(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _logOut());
		return Promise.resolve(_Conf2.default.login_info);
	}

	let params = {
		"RefreshToken": decoded_user_token.RefreshToken,
		"ClientId": "1",
		"ClientSecret": "1"
	},
	    query = JSON.stringify(params);

	return (0, _utils.postJson)(API_ROOT_URL + '/api/Login/Refresh', query).then(response => {
		(0, _common.log)('Refresh call succeeded', response);
		var user_token = response.Token;
		if (user_token) {
			decoded_user_token = (0, _common.decodeJwt)(user_token).payload;
			(0, _common.log)("Setting login info in PREFS on Refresh:", decoded_user_token);

			var is_validated = decoded_user_token.ClaimEmailAddressValidated;
			is_validated = typeof is_validated === "string" && is_validated.toLowerCase() === "true" ? true : false;

			_Conf2.default.login_info = {
				'logged_in': true,
				'email': decoded_user_token.ClaimEmailAddress,
				'user_token': user_token,
				'decoded_user_token': decoded_user_token,
				'is_validated': is_validated,
				'last_refresh_time': new Date().getTime()
			};

			(0, _common.log)("GOT REFRESHED LOGIN INFO", _Conf2.default.login_info);

			_setAuthCookie(SIGNON_URL, user_token, decoded_user_token);

			_pullUserSettings(login_info.user_token, login_info.decoded_user_token).catch(err => {
				(0, _common.log)('_refreshLoginInfo _pullUserSettings warning:', err);
			});
		} else {
			(0, _common.log)('Error: Refresh call returned null user_token', response);
			_logOut();
		}
		(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _Conf2.default.login_info);
		return _Conf2.default.login_info;
	}).catch(err => {
		(0, _common.log)('_refreshLoginInfo', err);
		(0, _utils.sendMessageToPanel)('onLoginInfoUpdated', _logOut());
		return _Conf2.default.login_info;
	});
}

function _pullUserSettings(user_token, decoded_user_token) {
	var userId = decoded_user_token ? decoded_user_token.UserId : undefined;
	if (user_token && userId) {
		return (0, _utils.getJson)(API_ROOT_URL + '/api/Sync/' + userId, { "Authorization": "Bearer " + user_token }).then(settings => {
			settings = settings || {};
			settings = settings.SettingsJson;
			try {
				settings = settings ? JSON.parse(settings) : {};
			} catch (e) {
				return Promise.reject('Corrupted settings');
			}
			SYNC_SET.forEach(key => {
				if (settings[key] !== undefined && !_underscore2.default.isEqual(_Conf2.default[key], settings[key])) {
					_Conf2.default[key] = settings[key];
				}
			});
			return settings;
		}).catch(e => {
			return Promise.reject('Error: get api/Sync failed in pullUserSettings');
		});
	} else {
		return Promise.reject('get api/Sync does not do anything if a user is not logged in');
	}
}

function _setAuthCookie(url, user_token, decoded_user_token) {
	var expiration = _getExpirationTimeout(decoded_user_token);
	var epochExpirationTime = Math.floor((new Date().getTime() + expiration) / 1000);

	chrome.cookies.set({
		url: url,
		name: AUTH_COOKIE,
		domain: GHOSTERY_DOMAIN + ".com",
		path: "/",
		value: user_token,
		expirationDate: epochExpirationTime
	}, function (cookie) {
		if (chrome.runtime.lastError) {
			(0, _common.log)("_setAuthCookie error:", chrome.runtime.lastError, url);
		}
	});
}

function _deleteAuthCookie() {
	var urls = ['https://extension.ghostery.com', 'https://extension.ghosterystage.com', 'https://signon.ghostery.com', 'https://signon.ghosterystage.com', 'https://account.ghostery.com', 'https://account.ghosterystage.com', 'http://extension.ghosterydev.com'];
	urls.forEach(function (url) {
		chrome.cookies.remove({
			url: url,
			name: "AUTH"
		}, function (details) {
			if (!details) {
				(0, _common.log)("Could not find AUTH cookie");
			}
		});
	});
}

},{"./classes/Conf":16,"./common":28,"./globals":29,"./utils":32,"underscore":8}],10:[function(require,module,exports){
'use strict';

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _click2play = require('../app/templates/precompiled/click2play');

var _click2play2 = _interopRequireDefault(_click2play);

var _momentWithLocalesMin = require('moment/min/moment-with-locales.min.js');

var _momentWithLocalesMin2 = _interopRequireDefault(_momentWithLocalesMin);

var _BugDb = require('./classes/BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _Click2PlayDb = require('./classes/Click2PlayDb');

var _Click2PlayDb2 = _interopRequireDefault(_Click2PlayDb);

var _CompatibilityDb = require('./classes/CompatibilityDb');

var _CompatibilityDb2 = _interopRequireDefault(_CompatibilityDb);

var _Conf = require('./classes/Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Dispatcher = require('./classes/Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _FoundBugs = require('./classes/FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

var _Latency = require('./classes/Latency');

var _Latency2 = _interopRequireDefault(_Latency);

var _SurrogateDb = require('./classes/SurrogateDb');

var _SurrogateDb2 = _interopRequireDefault(_SurrogateDb);

var _TabInfo = require('./classes/TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _Button = require('./classes/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CMP = require('./classes/CMP');

var _CMP2 = _interopRequireDefault(_CMP);

var _ExtensionWeb = require('./classes/ExtensionWeb');

var _ExtensionWeb2 = _interopRequireDefault(_ExtensionWeb);

var _Ghostrank = require('./classes/Ghostrank');

var _Ghostrank2 = _interopRequireDefault(_Ghostrank);

var _Policy = require('./classes/Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _PurpleBox = require('./classes/PurpleBox');

var _PurpleBox2 = _interopRequireDefault(_PurpleBox);

var _TrackerMap = require('./classes/TrackerMap');

var _TrackerMap2 = _interopRequireDefault(_TrackerMap);

var _accounts = require('./accounts');

var accounts = _interopRequireWildcard(_accounts);

var _common = require('./common');

var common = _interopRequireWildcard(_common);

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _matcher = require('./matcher');

var _metrics = require('./metrics');

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const button = new _Button2.default(),
      t = chrome.i18n.getMessage,
      cmp = new _CMP2.default(),
      extensionweb = new _ExtensionWeb2.default(),
      ghostrank = new _Ghostrank2.default(),
      policy = new _Policy2.default(),
      purplebox = new _PurpleBox2.default(),
      trackermap = new _TrackerMap2.default(),
      log = common.log,
      sendMessage = utils.sendMessage,
      onMessage = chrome.runtime && chrome.runtime.onMessage,
      GHOSTERY_DOMAIN = _globals2.default.GHOSTERY_DOMAIN,
      CDN_SUB_DOMAIN = _globals2.default.CDN_SUB_DOMAIN,
      BROWSER_INFO = common.browserInfo(),
      IS_FIREFOX = BROWSER_INFO.name === 'firefox',
      IS_EDGE = BROWSER_INFO.name === 'edge',
      REDIRECT_MAP = new Map(),
      VERSION_CHECK_URL = "https://" + CDN_SUB_DOMAIN + ".ghostery.com/update/version";

let upgrade_alert_shown = false,
    hotfix_alert_shown = false,
    C2P_LOADED = false,
    NOTIFICATIONS_LOADED = false,
    JUST_INSTALLED = false,
    JUST_UPGRADED = false,
    HOTFIX = false,
    BLOCKED_REDIRECT_DATA = {},
    LET_REDIRECTS_THROUGH = false,
    SYNC_SET = new Set(_globals2.default.SYNC_ARRAY),
    FROM_SETTINGS = false;

log('GHOSTERY_DOMAIN:', GHOSTERY_DOMAIN, 'DEBUG:', _globals2.default.DEBUG);

window.DEBUG = _globals2.default.DEBUG;

function autoUpdateBugDb() {
	if (_Conf2.default.enable_autoupdate) {
		const result = _Conf2.default.bugs_last_updated;
		if (!result || new Date() > new Date(+result + 1000 * 60 * 60 * 12)) {
			checkLibraryVersion();
		}
	}
}

function checkLibraryVersion() {
	return new Promise(function (resolve, reject) {
		const failed = { success: false, updated: false };
		utils.getJson(VERSION_CHECK_URL).then(data => {
			log("Database version retrieval succeeded", data);

			_Click2PlayDb2.default.update(data.click2playVersion);
			_CompatibilityDb2.default.update(data.compatibilityVersion);
			_BugDb2.default.update(data.bugsVersion, result => {
				log('bugDb.update callback called', result);
				resolve(result);
			});
		}).catch(err => {
			log('Error in checkLibraryVersion', err);
			reject(failed);
		});
	});
}

function openNewTab(data) {
	if (IS_FIREFOX) {
		chrome.tabs.create({
			url: data.url,
			active: data.become_active || false
		});
	} else {
		utils.getActiveTab(function (tab) {
			if (tab) {
				chrome.tabs.create({
					url: data.url,
					active: data.become_active || false,
					openerTabId: tab.id,
					index: tab.index + 1
				});
			} else {
				chrome.tabs.create({
					url: data.url,
					active: data.become_active || false
				});
			}
		});
	}
}

function reloadTab(data) {
	if (data && data.tab_id) {
		utils.getTab(data.tab_id, function success(tab) {
			if (tab && tab.url) {
				chrome.tabs.update(tab.id, { url: tab.url });
			}
		}, function error() {
			utils.getActiveTab(function (tab) {
				if (tab && tab.url) {
					chrome.tabs.update(tab.id, { url: tab.url });
				}
			});
		});
	} else {
		utils.getActiveTab(function (tab) {
			if (tab && tab.url) {
				chrome.tabs.update(tab.id, { url: tab.url });
			}
		});
	}
}

function getSiteData() {
	return new Promise(function (resolve, reject) {
		utils.getActiveTab(function (tab) {
			const tab_id = tab ? tab.id : 0,
			      tab_url = tab ? tab.url : '';

			if (!tab) {
				reject(new Error('Tab not found. Cannot gather page data'));
			}

			resolve({
				url: tab_url,
				extensionVersion: _globals2.default.EXTENSION_VERSION,
				browserDisplayName: BROWSER_INFO.displayName,
				browserVersion: BROWSER_INFO.version,
				categories: _FoundBugs2.default.getCategories(tab_id),
				os: BROWSER_INFO.os,
				language: _Conf2.default.language,
				dbVersion: _BugDb2.default.db.version
			});
		});
	});
}

function updatePanelData(data) {
	return new Promise(function (resolve, reject) {
		let needsPush = false;
		Object.keys(data).forEach(key => {
			if (_Conf2.default.hasOwnProperty(key) && !_underscore2.default.isEqual(_Conf2.default[key], data[key])) {
				_Conf2.default[key] = data[key];
				if (SYNC_SET.has(key)) {
					needsPush = true;
				}
			}
		});

		if (data.needsReload) {
			utils.getActiveTab(tab => {
				if (tab && tab.id && _TabInfo2.default.getTabInfo(tab.id)) {
					_TabInfo2.default.setTabInfo(tab.id, 'needsReload', data.needsReload);
				}
			});
		}

		if (needsPush) {
			accounts.pushUserSettings({ conf: accounts.buildUserSettings() });
		}

		resolve(true);
	});
}

function getPanelData() {
	return new Promise(function (resolve, reject) {
		utils.getActiveTab(function (tab) {
			const data = getPanelDataHelper(tab);
			if (data) {
				resolve(data);
			} else {
				reject(new Error('getPanelDataHelper Error'));
			}
		});
	});
}

function getPanelDataHelper(tab) {
	const models = [],
	      tab_id = tab && tab.id,
	      tab_url = tab && tab.url,
	      login_info = _Conf2.default.login_info;

	models.push({
		id: 'panel',
		language: _Conf2.default.language,
		ghostrank: _Conf2.default.ghostrank,
		enable_metrics: _Conf2.default.enable_metrics,
		account_dismissed: _Conf2.default.account_dismissed,
		reload_banner_status: _Conf2.default.reload_banner_status,
		trackers_banner_status: _Conf2.default.trackers_banner_status,
		upgrade_dismissed: _Conf2.default.upgrade_dismissed,
		paused_blocking: _Conf2.default.paused_blocking || false,
		sitePolicy: tab && policy.getSitePolicy(tab_url) || false,
		needsReload: _TabInfo2.default.getTabInfo(tab_id, 'needsReload') || {},
		logged_in: login_info.logged_in || false,
		is_validated: login_info.is_validated || false,
		email: login_info.email || '',
		install_random_number: _Conf2.default.install_random_number,
		decoded_user_token: login_info.decoded_user_token || {}
	});
	models.push({
		id: 'header',
		language: _Conf2.default.language,
		logged_in: login_info.logged_in || false,
		is_validated: login_info.is_validated || false,
		email: login_info.email || ''
	});
	models.push({
		id: 'summary',
		language: _Conf2.default.language,
		paused_blocking: _Conf2.default.paused_blocking || false,
		site_blacklist: _Conf2.default.site_blacklist || [],
		site_whitelist: _Conf2.default.site_whitelist || [],
		logged_in: login_info.logged_in || false,
		is_validated: login_info.is_validated || false,
		alertCounts: tab && _FoundBugs2.default.getAppsCountByIssues(tab_id, tab_url) || {},
		trackerCounts: tab && _FoundBugs2.default.getAppsCountByBlocked(tab_id) || {},
		trackerCategories: tab && _FoundBugs2.default.getCategories(tab_id) || [],
		pageUrl: tab_url || '',
		pageHost: tab && _TabInfo2.default.getTabInfo(tab_id, 'host') || '',
		siteNotScanned: tab && !_FoundBugs2.default.getApps(tab_id) || false,
		sitePolicy: tab && policy.getSitePolicy(tab_url) || false,
		cta_status: _Conf2.default.cta_status || {}
	});
	models.push({
		id: 'blocking',
		language: _Conf2.default.language,
		pageHost: tab && _TabInfo2.default.getTabInfo(tab_id, 'host') || '',
		toggle_individual_trackers: _Conf2.default.toggle_individual_trackers || false,
		selected_app_ids: _Conf2.default.selected_app_ids || {},
		site_specific_blocks: _Conf2.default.site_specific_blocks || {},
		site_specific_unblocks: _Conf2.default.site_specific_unblocks || {},
		paused_blocking: _Conf2.default.paused_blocking || false,
		logged_in: login_info.logged_in || false,
		is_validated: login_info.is_validated || false,
		show_tracker_urls: _Conf2.default.show_tracker_urls && true,
		trackerList: tab && _FoundBugs2.default.getApps(tab_id, false, tab_url) || [],
		sitePolicy: tab && policy.getSitePolicy(tab_url) || false
	});
	models.push({
		id: 'settings',
		language: _Conf2.default.language,
		enable_autoupdate: _Conf2.default.enable_autoupdate && true,
		show_tracker_urls: _Conf2.default.show_tracker_urls && true,
		enable_click2play: _Conf2.default.enable_click2play && true,
		enable_click2play_social: _Conf2.default.enable_click2play_social && true,
		toggle_individual_trackers: _Conf2.default.toggle_individual_trackers && true,
		ignore_first_party: _Conf2.default.ignore_first_party && true,
		block_by_default: _Conf2.default.block_by_default || false,
		db_last_updated: _Conf2.default.db_last_updated || Number(new Date().getTime()),
		settings_last_imported: _Conf2.default.settings_last_imported || 0,
		settings_last_exported: _Conf2.default.settings_last_exported || 0,

		show_alert: _Conf2.default.show_alert || false,
		alert_bubble_timeout: _Conf2.default.alert_bubble_timeout || 15,
		alert_bubble_pos: _Conf2.default.alert_bubble_pos || 'br',
		hide_alert_trusted: _Conf2.default.hide_alert_trusted || false,

		show_cmp: _Conf2.default.show_cmp || false,
		notify_upgrade_updates: _Conf2.default.notify_upgrade_updates && true,
		notify_hotfix_updates: _Conf2.default.notify_hotfix_updates || false,
		notify_library_updates: _Conf2.default.notify_library_updates || false,
		reload_banner_status: _Conf2.default.reload_banner_status,
		trackers_banner_status: _Conf2.default.trackers_banner_status,
		show_badge: _Conf2.default.show_badge && true,

		ghostrank: _Conf2.default.ghostrank || 2,
		enable_metrics: _Conf2.default.enable_metrics || false,

		logged_in: login_info.logged_in || false,
		is_validated: login_info.is_validated || false,
		email: login_info.email || '',
		first_name: login_info.decoded_user_token && login_info.decoded_user_token.ClaimFirstName || '',
		last_name: login_info.decoded_user_token && login_info.decoded_user_token.ClaimLastName || ''
	});
	models.push({
		id: 'help',
		language: _Conf2.default.language,
		browser: BROWSER_INFO.displayName,
		version: _globals2.default.EXTENSION_VERSION
	});
	return { models: models, logged_in: login_info.logged_in || false };
}

function handleResourceTiming(name, message, tab_id, callback) {
	if (name === 'onGetResourceTiming') {
		let details = message.details;
		if (!message.resourceTiming) {
			_Latency2.default.logLatency(details, false);
		} else {
			details.rtDuration = message.resourceTiming ? message.resourceTiming.duration : -1;
			_Latency2.default.logLatency(details, true);
		}
	}

	return false;
}

function handleSettingsPage(name, message, tab_id, callback) {
	FROM_SETTINGS = true;
	setTimeout(() => {
		FROM_SETTINGS = false;
	}, 500);

	if (name === "getPageSettings") {
		accounts.pullUserSettings().catch(function (err) {
			log('Cannot pull user settings', err);
		}).then(function () {
			const settings = extensionweb.getSettings();
			if (settings) {
				extensionweb.oldConf = JSON.stringify(settings.conf);
				sendMessage(tab_id, 'setPageSettings', settings);
			}
		});
		return false;
	} else if (name === 'update_settings') {
		extensionweb.setSettings(message);
		callback();
		return true;
	} else if (name === 'set_state_global') {
		if (message.blocked) {
			for (let app in _BugDb2.default.db.apps) {
				if (_BugDb2.default.db.apps.hasOwnProperty(app)) {
					_Conf2.default.selected_app_ids[app] = 1;
				}
			}
		} else {
			_Conf2.default.selected_app_ids = {};
		}
		accounts.pushUserSettings(extensionweb.getSettings());
		callback();
		return true;
	} else if (name === 'clear_ss_tracker_settings') {
		_Conf2.default.selected_app_ids = {};
		_Conf2.default.site_specific_unblocks = {};
		_Conf2.default.site_specific_blocks = {};
		accounts.pushUserSettings(extensionweb.getSettings());
		callback();
		return true;
	} else if (name === 'update_database') {
		FROM_SETTINGS = false;
		checkLibraryVersion().then(function (result) {
			const updateSuccess = [],
			      updateRemote = [],
			      settings = extensionweb.getSettings();
			updateSuccess.push(result.success);
			updateRemote.push(result.updated);

			settings.success = updateSuccess.indexOf(false) === -1;
			settings.isNewUpdate = updateRemote.indexOf(true) >= 0;
			callback(settings);
		}).catch(function (err) {
			callback();
			log('handleSettingsPage update_database error', err);
		});
		return true;
	} else if (name === "set_state_category") {
		for (let dbApp in _BugDb2.default.db.apps) {
			if (_BugDb2.default.db.apps[dbApp].cat === message.cat_id) {
				if (message.blocked) {
					_Conf2.default.selected_app_ids[dbApp] = 1;
				} else {
					delete _Conf2.default.selected_app_ids[dbApp];
				}
			}
		}
		accounts.pushUserSettings(extensionweb.getSettings());
		callback();
		return true;
	} else if (name === 'set_state_tracker') {
		_Conf2.default.fromSettings = true;
		if (message.blocked) {
			_Conf2.default.selected_app_ids[message.app_id] = 1;
		} else {
			delete _Conf2.default.selected_app_ids[message.app_id];
		}
		accounts.pushUserSettings(extensionweb.getSettings());
		callback();
		return true;
	} else if (name === 'getTrackerDescription') {
		FROM_SETTINGS = false;
		utils.getJson(message.url).then(function (result) {
			const description = result && result.company_description ? result.company_description : '';
			callback(description);
		});
		return true;
	} else if (name === 'ping') {
		FROM_SETTINGS = false;
		(0, _metrics.ping)(message);
	}

	return false;
}

function handleGhosteryPlatformPages(name, tab_url) {
	if (name === 'platformPageLoaded') {
		accounts.setLoginInfoFromAuthCookie(tab_url).catch(function (err) {
			log('handleGhosteryPlatformPages error', err);
		});
	}
	return false;
}

function handleIntroPage(name, tab_id) {
	if (name === 'introLoaded') {} else if (name === 'tour_start') {
			if (JUST_INSTALLED) {
				(0, _metrics.ping)('tour_start');
			}
		}
	return false;
}

function handleNotifications(name, message, tab_id, callback) {
	if (name === 'dismissCMPMessage') {
		cmp.CMP_DATA.splice(0, 1);
	} else if (name === 'importFile') {
		try {
			const backup = JSON.parse(message);

			if (backup.hash !== common.hashCode(JSON.stringify(backup.settings))) {
				throw "Invalid hash";
			}

			const data = (backup.settings || {}).conf || {};
			data.ghostrank = data.ghostrank ? 1 : 2;
			data.alert_bubble_timeout = data.alert_bubble_timeout > 30 ? 30 : data.alert_bubble_timeout;
			data.settings_last_imported = Number(new Date().getTime());
			updatePanelData(data).then(result => {
				utils.getActiveTab(tab => {
					const tabId = tab ? tab.id : tab_id;
					sendMessage(tabId, 'onFileImported', {
						type: 'message',
						text: t("settings_import_success") + " " + (0, _momentWithLocalesMin2.default)(data.settings_last_imported).format('LLL')
					});
				});
			});
		} catch (err) {
			utils.getActiveTab(tab => {
				const tabId = tab ? tab.id : tab_id;
				sendMessage(tabId, 'onFileImported', {
					type: 'error',
					text: t("settings_import_file_error")
				});
			});
		}
	}
	return false;
}

function handleBlockedRedirect(name, message, tab_id, callback) {
	if (name === 'getBlockedRedirectData') {
		callback(BLOCKED_REDIRECT_DATA);
		return true;
	} else if (name === 'allow_always_page_c2p_tracker') {
		delete _Conf2.default.selected_app_ids[message.app_id];
		chrome.tabs.update(tab_id, { url: message.url });
	} else if (name === 'allow_once_page_c2p_tracker') {
		LET_REDIRECTS_THROUGH = true;
		chrome.tabs.update(tab_id, { url: message.url });
	}

	return false;
}

function handleSettingsRedirect(name, message, tab_id, callback) {
	if (name === 'getSettingsUrl') {
		sendMessage(tab_id, 'gotSettingsUrl', 'https://extension.' + GHOSTERY_DOMAIN + '.com/' + _Conf2.default.language + '/settings#general');
	}

	return false;
}

function handleClick2Play(name, message, tab_id, callback) {
	if (name === 'processC2P') {
		if (message.action === 'always') {
			const tab_host = _TabInfo2.default.getTabInfo(tab_id, 'host');
			message.app_ids.forEach(function (aid) {
				delete _Conf2.default.selected_app_ids[aid];

				if (_Conf2.default.site_specific_blocks.hasOwnProperty(tab_host) && _Conf2.default.site_specific_blocks[tab_host].indexOf(+aid) >= 0) {
					const index = _Conf2.default.site_specific_blocks[tab_host].indexOf(+aid);
					_Conf2.default.site_specific_blocks[tab_host].splice(index);
				}

				if (!_Conf2.default.site_specific_unblocks.hasOwnProperty(tab_host)) {
					_Conf2.default.site_specific_unblocks[tab_host] = [];
				}
				if (_Conf2.default.site_specific_unblocks[tab_host].indexOf(aid) === -1) {
					_Conf2.default.site_specific_unblocks[tab_host].push(aid);
				}
			});
			callback();
			return true;
		} else if (message.action === 'once') {
			_Click2PlayDb2.default.allowOnce(message.app_ids, tab_id);
			callback();
			return true;
		}
	}
}

function handlePurplebox(name, message, tab_id, callback) {
	if (name === 'updateAlertConf') {
		_Conf2.default.alert_expanded = message.alert_expanded;
		_Conf2.default.alert_bubble_pos = message.alert_bubble_pos;
		_Conf2.default.alert_bubble_timeout = message.alert_bubble_timeout;

		accounts.pushUserSettings({ conf: accounts.buildUserSettings() });
	}
	return false;
}

function handleGhosteryDotCom(name, message, tab_id) {
	if (name === 'appsPageLoaded') {
		if (tab_id) {
			sendMessage(tab_id, 'appsPageData', {
				'blocked': _Conf2.default.selected_app_ids[message.id] === 1
			});
		} else {
			utils.getActiveTab(function (tab) {
				if (tab) {
					sendMessage(tab.id, 'appsPageData', {
						'blocked': _Conf2.default.selected_app_ids[message.id] === 1
					});
				}
			});
		}
	} else if (name === 'panelSelectedAppsUpdate') {
		if (message.app_selected) {
			_Conf2.default.selected_app_ids[message.app_id] = 1;
		} else {
			delete _Conf2.default.selected_app_ids[message.app_id];
		}
	}
	return false;
}

function injectNotifications(tab_id, importExport = false) {
	if (NOTIFICATIONS_LOADED) {
		return Promise.resolve(true);
	}
	const tab = _TabInfo2.default.getTabInfo(tab_id);

	if (tab && tab.prefetched === true || tab.path.indexOf("_/chrome/newtab") >= 0 || !importExport && _globals2.default.EXCLUDES.indexOf(tab.host) >= 0) {
		return Promise.resolve(false);
	}

	return utils.injectScript(tab_id, 'dist/notifications.js', '', 'document_start').then(() => {
		NOTIFICATIONS_LOADED = true;
		return true;
	});
}

function injectClickToPlay(tab_id) {
	if (C2P_LOADED) {
		return Promise.resolve(true);
	}

	const tab = _TabInfo2.default.getTabInfo(tab_id);
	if (!tab || tab.prefetched || _globals2.default.EXCLUDES.indexOf(tab.host) >= 0) {
		return Promise.resolve(true);
	}

	return utils.injectScript(tab_id, 'dist/click_to_play.js', '', 'document_end').then(() => {
		C2P_LOADED = true;
		return true;
	});
}

function onMessageHandler(name, message, messageId, origin, tab_id, tab_url, callback) {
	if (IS_EDGE && messageId) {
		if (tab_id) {
			callback = function (result) {
				utils.sendMessage(tab_id, messageId, result);
			};
		} else {
			callback = function (result) {
				utils.sendMessageToPanel(messageId, result);
			};
		}
	}

	if (origin === 'intro') {
		return handleIntroPage(name, tab_id);
	} else if (origin === 'settings') {
		return handleSettingsPage(name, message, tab_id, callback);
	} else if (origin === 'platform_pages') {
		return handleGhosteryPlatformPages(name, tab_url);
	} else if (origin === 'purplebox') {
		return handlePurplebox(name, message, tab_id, callback);
	} else if (origin === 'ghostery_dot_com') {
		return handleGhosteryDotCom(name, message, tab_id);
	} else if (origin === 'page_performance' && name === 'recordPageInfo') {
		ghostrank.recordPageInfo(message.domain, message.latency, _TabInfo2.default.getTabInfo(tab_id, 'timestamp'), message.spots, _TabInfo2.default.getTabInfo(tab_id, 'contentLength'), message.performanceAPI, _TabInfo2.default.getNumReqUntilLoad(tab_id, message.loadEventEnd));
		return false;
	} else if (origin === 'notifications') {
		return handleNotifications(name, message, tab_id);
	} else if (origin === 'click_to_play') {
		return handleClick2Play(name, message, tab_id, callback);
	} else if (origin === 'blocked_redirect') {
		return handleBlockedRedirect(name, message, tab_id, callback);
	} else if (origin === 'settings_redirect') {
		return handleSettingsRedirect(name, message, tab_id, callback);
	} else if (origin === 'resource_timing') {
		return handleResourceTiming(name, message, tab_id, callback);
	}

	if (name === 'getPanelData') {
		getPanelData().then(result => {
			callback(result);
		});
		return true;
	} else if (name === 'updatePanelData') {
		log("UPDATE PANEL DATA", message);
		updatePanelData(message).then(result => {
			callback(result);
		});
		return true;
	} else if (name === 'pullUserSettings') {
		accounts.pullUserSettings().then(settings => {
			callback(settings);
		}).catch(err => {
			callback();
		});
		return true;
	} else if (name === 'getTrackerDescription') {
		utils.getJson(message.url).then(result => {
			const description = result && result.company_description ? result.company_description : '';
			callback(description);
		});
		return true;
	} else if (name === 'getLoginInfo') {
		accounts.getLoginInfo().then(result => {
			utils.sendMessageToPanel('onLoginInfoUpdated', result);

			callback(result);
			if (!tab_id) {
				utils.getActiveTab(function (tab) {
					if (tab) {
						purplebox.updateLoginInfo(tab.id, result);
					}
				});
			} else {
				purplebox.updateLoginInfo(tab_id, result);
			}
		}).catch(err => {
			callback();
			log("GET LOGIN INFO ERROR:", err);
		});
		return true;
	} else if (name === 'setLoginInfo') {
		accounts.setLoginInfo(message, false).then(result => {
			callback(result);
			if (!tab_id) {
				utils.getActiveTab(function (tab) {
					if (tab) {
						purplebox.updateLoginInfo(tab.id, result);
					}
				});
			} else {
				purplebox.updateLoginInfo(tab_id, result);
			}
		}).catch(err => {
			callback();
			log("SET LOGIN INFO ERROR");
		});
		return true;
	} else if (name === 'update_database') {
		checkLibraryVersion().then(result => {
			callback(result);
		});
		return true;
	} else if (name === 'getSiteData') {
		getSiteData().then(function (result) {
			callback(result);
		});
		return true;
	} else if (name === 'openNewTab') {
		openNewTab(message);
		return false;
	} else if (name === 'reloadTab') {
		reloadTab(message);
		return false;
	} else if (name === 'getSettingsForExport') {
		utils.getActiveTab(tab => {
			if (tab && tab.id && tab.url.startsWith('http')) {
				const settings = accounts.buildUserSettings();
				try {
					const hash = common.hashCode(JSON.stringify({ conf: settings })),
					      backup = JSON.stringify({ hash: hash, settings: { conf: settings } });
					injectNotifications(tab.id, true).then(() => {
						sendMessage(tab.id, 'exportFile', backup);
					});
					callback(true);
				} catch (e) {
					callback(false);
				}
			} else {
				callback(false);
			}
		});
		return true;
	} else if (name === 'sendVerificationEmail') {
		accounts.sendVerificationEmail().then(function (result) {
			callback(result);
		});
		return true;
	} else if (name === 'openTrackerMap') {
		trackermap.setTrackerMapCookie(message, _globals2.default.EXTENSION_VERSION, BROWSER_INFO.version).then(cookie => {
			const trackerMapUrl = 'https://marketing.' + GHOSTERY_DOMAIN + '.com/trackermap';
			openNewTab({
				url: trackerMapUrl,
				become_active: true
			});
		});
		return false;
	} else if (name === 'ping') {
		(0, _metrics.ping)(message);
		return false;
	} else if (name === 'showBrowseWindow') {
		utils.getActiveTab(tab => {
			if (tab && tab.id && tab.url.startsWith('http')) {
				injectNotifications(tab.id, true).then(result => {
					if (result) {
						sendMessage(tab.id, 'showBrowseWindow', {
							translations: {
								browse_button_label: t('browse_button_label'),
								select_file_for_import: t('select_file_for_import'),
								file_was_not_selected: t('file_was_not_selected') }
						}, result => {
							if (chrome.runtime.lastError) {
								callback(t('refresh_and_try_again'));
							} else {
								callback();
							}
						});
					}
				});
			} else {
				callback(t('not_http_page'));
			}
		});
		return true;
	} else if (name === 'timing') {
		log("TIMING", message);
		return false;
	}
}

function processBug(details) {
	const bug_id = details.bug_id,
	      app_id = details.app_id,
	      type = details.type,
	      url = details.url,
	      block = details.block,
	      tab_id = details.tab_id,
	      tab = _TabInfo2.default.getTabInfo(tab_id);

	let num_apps_old;

	log(block ? 'Blocked' : 'Found', type, url);
	log('^^^ Pattern ID ' + bug_id + ' on tab ID ' + tab_id);

	if (_Conf2.default.show_alert) {
		num_apps_old = _FoundBugs2.default.getAppsCount(tab_id);
	}

	_FoundBugs2.default.update(tab_id, bug_id, url, block, type);

	button.update(tab_id);

	if (block && (_Conf2.default.enable_click2play || _Conf2.default.enable_click2playSocial)) {
		buildCP2(tab_id, app_id);
	}

	if (_Conf2.default.show_alert && tab && !tab.prefetched && tab.purplebox) {
		if (_FoundBugs2.default.getAppsCount(tab_id) > num_apps_old || _Click2PlayDb2.default.allowedOnce(tab_id, app_id)) {
			purplebox.updateBox(tab_id);
		}
	}
}

function buildCP2(tab_id, app_id) {
	let c2pApp = _Click2PlayDb2.default.db.apps[app_id];

	if (!c2pApp) {
		return;
	}

	if (!_Conf2.default.enable_click2play_social) {
		c2pApp = _underscore2.default.reject(c2pApp, function (c2pAppDef) {
			return !!c2pAppDef.button;
		});
	}

	if (!c2pApp.length) {
		return;
	}
	const app_name = _BugDb2.default.db.apps[app_id].name,
	      c2pHtml = [],
	      tab_host = _TabInfo2.default.getTabInfo(tab_id, 'host'),
	      blacklisted = policy.blacklisted(tab_host) ? true : false,
	      promises = [];

	function getImage(imgURL) {
		return new Promise((resolve, reject) => {
			const url = chrome.extension.getURL(imgURL);
			const conf_prop = url.slice(url.lastIndexOf('/') + 1).replace('.', '_');
			if (!_Conf2.default[conf_prop]) {
				utils.fetchResource(url).then(result => {
					_Conf2.default[conf_prop] = result;
					resolve();
				}).catch(err => {
					reject(new Error(err));
				});
			} else {
				resolve();
			}
		});
	}

	for (let i = 0; i < c2pApp.length; i++) {
		if (c2pApp[i].button) {
			let url = 'app/images/click2play/' + c2pApp[i].button;
			url = url.replace('.png', '.data');
			promises.push(getImage(url));
		}
	}

	promises.push(getImage('app/images/click2play/ghosty_blocked.data'));
	promises.push(getImage('app/images/click2play/allow_unblock.data'));
	promises.push(getImage('app/images/click2play/allow_once.data'));

	Promise.all(promises).catch(err => {
		log("buildCP2 error", err);
		return;
	}).then(() => {
		c2pApp.forEach(function (c2pAppDef) {
			const tplData = {
				blacklisted: blacklisted,
				button: !!c2pAppDef.button,
				ghostery_blocked_src: _Conf2.default.ghosty_blocked_data,
				allow_always_src: _Conf2.default.allow_unblock_data,
				allow_always_title: t('click2play_allow_always_tooltip')
			};

			if (c2pAppDef.button) {
				tplData.allow_once_title = t('click2play_allow_once_button_tooltip', app_name);
				let url = 'app/images/click2play/' + c2pAppDef.button;
				url = url.replace('.png', '.data');
				const conf_prop = url.slice(url.lastIndexOf('/') + 1).replace('.', '_');
				tplData.allow_once_src = _Conf2.default[conf_prop];
			} else {
				tplData.allow_once_title = t('click2play_allow_once_tooltip');
				tplData.allow_once_src = _Conf2.default.allow_once_data;

				tplData.ghostery_blocked_title = t('click2play_blocked', app_name);

				if (c2pAppDef.type) {
					tplData.click2play_text = t('click2play_' + c2pAppDef.type + '_form', app_name);
				}
			}

			c2pHtml.push((0, _click2play2.default)(tplData));
		});

		injectClickToPlay(tab_id).then(result => {
			if (result) {
				sendMessage(tab_id, 'c2p', {
					app_id: app_id,
					data: c2pApp,
					html: c2pHtml
				});
			}
		});
	});
}

function buildRedirectCP2(requestId, redirectUrls, app_id) {
	BLOCKED_REDIRECT_DATA = {};
	BLOCKED_REDIRECT_DATA.app_id = app_id;
	BLOCKED_REDIRECT_DATA.url = redirectUrls.redirectUrl;

	const app_name = _BugDb2.default.db.apps[app_id].name;
	BLOCKED_REDIRECT_DATA.translations = {
		blocked_redirect_page_title: t('blocked_redirect_page_title'),
		blocked_redirect_prevent: t('blocked_redirect_prevent', [utils.processUrl(redirectUrls.url).host, utils.processUrl(redirectUrls.redirectUrl).host, app_name, 'http://www.ghostery.com/apps/' + encodeURIComponent(app_name.replace(/\s+/g, '_').toLowerCase())]),

		blocked_redirect_action_always_title: t('blocked_redirect_action_always_title'),
		blocked_redirect_action_through_once_title: t('blocked_redirect_action_through_once_title'),
		blocked_redirect_url_content: t('blocked_redirect_url_content', [redirectUrls.redirectUrl, app_name])
	};

	return chrome.extension.getURL('app/blocked_redirect.html');
}

function onBeforeRequest(details) {
	const tab_id = details.tabId,
	      request_id = details.requestId;

	if (tab_id <= 0) {
		return;
	}
	if (!_TabInfo2.default.getTabInfo(tab_id)) {
		log("tabInfo not found for tab " + tab_id + ", initializing...");

		_TabInfo2.default.create(tab_id);

		utils.getTab(tab_id, function (tab) {
			const ti = _TabInfo2.default.getTabInfo(tab_id);
			if (ti && ti.partialScan) {
				_TabInfo2.default.setTabInfo(tab_id, 'url', tab.url);
				_TabInfo2.default.setTabInfo(tab_id, 'incognito', tab.incognito);
				_TabInfo2.default.setTabInfo(tab_id, 'timestamp', Number(new Date().getTime()));
			}
		});
	}

	const fromRedirect = REDIRECT_MAP.has(request_id);
	if (details.type === 'main_frame' && !fromRedirect) {
		return {
			cancel: false
		};
	}

	_TabInfo2.default.getTabInfo(tab_id, 'requests').push(details.timeStamp);

	const page_url = _TabInfo2.default.getTabInfo(tab_id, 'url'),
	      bug_id = page_url ? (0, _matcher.isBug)(details.url, page_url) : (0, _matcher.isBug)(details.url);

	if (!bug_id) {
		return;
	}

	const app_id = _BugDb2.default.db.bugs[bug_id].aid,
	      cat_id = _BugDb2.default.db.apps[app_id].cat,
	      incognito = _TabInfo2.default.getTabInfo(tab_id, 'incognito'),
	      tab_host = _TabInfo2.default.getTabInfo(tab_id, 'host');

	let block = policy.shouldBlock(app_id, cat_id, tab_id, tab_host, page_url);

	if (fromRedirect && LET_REDIRECTS_THROUGH) {
		block = false;
	}

	if (!block) {
		_Latency2.default.latencies[request_id] = _Latency2.default.latencies[request_id] || {};

		_Latency2.default.latencies[request_id][details.url] = {
			start_time: Math.round(details.timeStamp),
			bug_id: bug_id,

			page_url: page_url,
			incognito: incognito
		};
	}

	setTimeout(function () {
		processBug({
			bug_id: bug_id,
			app_id: app_id,
			type: details.type,
			url: details.url,
			block: block,
			tab_id: tab_id,
			from_frame: details.parentFrameId !== -1
		});

		if (block && _Conf2.default.ghostrank === 1) {
			utils.getTab(tab_id, function (tab) {
				if (tab.incognito) {
					return;
				}

				ghostrank.recordStats(tab.url, details.url, bug_id, true, -1, -1, -1, -1, -1, _TabInfo2.default.getTabInfo(tab_id, 'timestamp'), -1, -1);
			});
		}
	}, 1);

	if (block) {
		if (details.type === 'sub_frame') {
			return {
				redirectUrl: 'about:blank'
			};
		} else if (details.type === 'image') {
			return {
				redirectUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=='
			};
		} else if (details.type === 'script') {
			const ti = _TabInfo2.default.getTabInfo(tab_id),
			      surrogates = _SurrogateDb2.default.getForTracker(details.url, app_id, bug_id, ti.host);

			if (surrogates.length > 0) {
				const code = _underscore2.default.reduce(surrogates, function (memo, s) {
					memo += s.code;
					return memo;
				}, '');

				const dataUrl = "data:application/javascript;base64," + btoa(code);
				log("NEW SURROGATE", app_id);
				return {
					redirectUrl: dataUrl
				};
			}
		} else if (fromRedirect) {
			const url = buildRedirectCP2(request_id, REDIRECT_MAP.get(request_id), app_id);
			REDIRECT_MAP.delete(request_id);
			return {
				redirectUrl: url
			};
		} else {
			return {
				cancel: false
			};
		}
	}

	return {
		cancel: block
	};
}

function onBeforeNavigate(details) {
	if (details.frameId === 0) {
		const tab_id = details.tabId;

		log("❤ ❤ ❤ Tab " + tab_id + " navigating to " + details.url + " ❤ ❤ ❤");

		utils.clearTabData(tab_id);
		C2P_LOADED = NOTIFICATIONS_LOADED = false;

		_TabInfo2.default.create(tab_id, details.url, Number(new Date().getTime()));

		utils.getTab(tab_id, function success(tab) {
			if (tab) {
				_TabInfo2.default.setTabInfo(tab_id, 'incognito', tab.incognito);
			}
		}, function error() {
			utils.getActiveTab(function (tab) {
				if (tab) {
					_TabInfo2.default.setTabInfo(tab_id, 'incognito', tab.incognito);
				}
				_TabInfo2.default.setTabInfo(tab_id, 'prefetched', true);
			});
		});

		ghostrank.onNavigate(details.url);

		setTimeout(function () {
			utils.getTab(tab_id, null, function error() {
				log('Clearing orphan tab data for tab', tab_id);
				utils.clearTabData(tab_id);
				C2P_LOADED = NOTIFICATIONS_LOADED = false;
			});
		}, 120000);
	}
}

function onDOMContentLoaded(tab_id) {
	utils.getActiveTab(function (tab) {
		if (!tab || tab.id !== tab_id || tab.incognito) {
			return;
		}
		const alert_messages = ['dismiss', 'notification_reminder1', 'notification_reminder2', 'notification_reminder_link', 'notification_update', 'notification_update_link', 'notification_upgrade', 'notification_upgrade_link'];

		if (cmp.CMP_DATA.length !== 0 && _Conf2.default.show_cmp) {
			injectNotifications(tab.id).then(result => {
				if (result) {
					sendMessage(tab_id, 'showCMPMessage', {
						data: cmp.CMP_DATA
					}, function () {
						cmp.CMP_DATA[0].Dismiss--;
						if (cmp.CMP_DATA[0].Dismiss <= 0) {
							cmp.CMP_DATA.splice(0, 1);
						}
					});
				}
			});
		} else if (HOTFIX && !hotfix_alert_shown && _Conf2.default.notify_hotfix_updates || JUST_UPGRADED && !upgrade_alert_shown && _Conf2.default.notify_upgrade_updates) {
			injectNotifications(tab.id).then(result => {
				if (result) {
					sendMessage(tab_id, 'showUpgradeAlert', {
						translations: _underscore2.default.object(_underscore2.default.map(alert_messages, function (key) {
							return [key, t(key)];
						})),
						language: _Conf2.default.language
					});
				}
			});

			upgrade_alert_shown = true;
			if (HOTFIX) {
				hotfix_alert_shown = true;
			}
		} else if (_BugDb2.default.db.JUST_UPDATED_WITH_NEW_TRACKERS) {
			if (_Conf2.default.notify_library_updates) {
				injectNotifications(tab.id).then(result => {
					if (result) {
						sendMessage(tab_id, 'showUpdateAlert', {
							translations: _underscore2.default.object(_underscore2.default.map(alert_messages, function (key) {
								return [key, t(key)];
							})),
							language: _Conf2.default.language
						}, function () {
							_BugDb2.default.db.JUST_UPDATED_WITH_NEW_TRACKERS = false;
						});
					}
				});
			} else {
				_BugDb2.default.db.JUST_UPDATED_WITH_NEW_TRACKERS = false;
			}
		}
	});
}

function onNavigation(details) {
	const tab_id = details.tabId;

	if (!utils.isValidTopLevelNavigation(details)) {
		if (details.url.indexOf('https://chrome.google.com/webstore/') === 0) {
			utils.clearTabData(tab_id);
			C2P_LOADED = NOTIFICATIONS_LOADED = false;
		}

		return;
	}

	_Click2PlayDb2.default.reset(tab_id);
	REDIRECT_MAP.clear();
	LET_REDIRECTS_THROUGH = false;

	purplebox.createBox(tab_id).then(result => {
		_FoundBugs2.default.update(tab_id);
		button.update(tab_id);
	}).catch(err => {
		log("onNavigation purplebox creation failed:", err);
	});
}

function onNavigationCompleted(tab_id) {
	log("Ghostrank: " + _Conf2.default.ghostrank + ", foundBugs: " + _FoundBugs2.default.getAppsCount(tab_id) + ", tab_id: " + tab_id);
	if (_Conf2.default.ghostrank === 1 && _FoundBugs2.default.getAppsCount(tab_id) > 0) {
		utils.getTab(tab_id, function (tab) {
			if (tab && !tab.incognito && ghostrank.isValidUrl(utils.processUrl(tab.url))) {
				chrome.tabs.executeScript(tab.id, {
					file: 'dist/page_performance.js',
					runAt: 'document_idle'
				});
			}
		});
	}
}

function initializeDispatcher() {
	_Dispatcher2.default.on('conf.save.selected_app_ids', function (appIds) {
		const num_selected = _underscore2.default.size(appIds),
		      db = _BugDb2.default.db;
		db.noneSelected = num_selected === 0;

		db.allSelected = !!num_selected && _underscore2.default.every(db.apps, function (app, app_id) {
			return appIds.hasOwnProperty(app_id);
		});
	});
	_Dispatcher2.default.on('conf.save.site_whitelist', function () {
		button.update();
		utils.flushChromeMemoryCache();
	});
	_Dispatcher2.default.on('conf.save.paused_blocking', function () {
		button.update();
		utils.flushChromeMemoryCache();
	});
	_Dispatcher2.default.on('conf.save.login_info', function (loginInfo) {
		if (loginInfo.logged_in) {
			accounts.scheduleNextRefresh();
		} else {
			accounts.cancelRefresh();
		}
		utils.broadcastMessage('onLoginInfoUpdated', loginInfo);
	});
	_Dispatcher2.default.on('conf.changed.settings', _underscore2.default.debounce(key => {
		const settings = extensionweb.getSettings();

		if (settings && settings.conf) {
			extensionweb.oldConf = JSON.stringify(settings.conf);
			utils.broadcastMessage('onPageSettingsUpdated', settings, FROM_SETTINGS);
		}

		FROM_SETTINGS = false;
	}, 200));
}

function initializePopup() {
	chrome.browserAction.setPopup({
		popup: 'app/panel.html'
	});
}

function initializeVersioning() {
	log("INITIALIZE VERSIONING. CURRENT VERSION IS:", _globals2.default.EXTENSION_VERSION);
	let previousVersion = _Conf2.default.previous_version;
	const currentVersion = _globals2.default.EXTENSION_VERSION.split(".");

	if (!previousVersion) {
		log("PREVIOUS VERSION DOES NOT EXIST");
		_Conf2.default.previous_version = _globals2.default.EXTENSION_VERSION;

		var legacyVersion = localStorage && localStorage.getItem('previousVersion');
		if (!legacyVersion) {
			log("NEW INSTALL");

			JUST_INSTALLED = true;
			_Conf2.default.upgrade_dismissed = true;
		} else {
			log("UPGRADE FROM CHROME OR OPERA < 7.0. PREVIOUS VERSION IS:", legacyVersion);
			JUST_UPGRADED = true;
			_Conf2.default.upgrade_dismissed = false;
			localStorage.removeItem(legacyVersion);

			Object.keys(localStorage).forEach(key => {
				let value = localStorage.getItem(key);
				try {
					value = value && JSON.parse(value);
				} catch (e) {
					log("FAILED TO PARSE THE VALUE FOR KEY", key);
					return;
				}

				if (!_Conf2.default.hasOwnProperty(key)) {
					if (key === 'selected_bug_ids') {
						log("THIS KEY IS TRANSFERRED", key);
						_Conf2.default.selected_app_ids = value;
					}
					log("THIS KEY IS NOT TRANSFERRED", key);
				} else {
					if (key !== 'bugs' && key !== 'click2play' && key !== 'compatibility' && key !== 'surrogates' && key !== 'tags') {

						log("THIS KEY IS TRANSFERRED", key);

						if (key === 'ghostrank') {
							_Conf2.default[key] = value ? 1 : 2;
						} else if (key === 'alert_bubble_timeout') {
							value = Number(value);
							_Conf2.default[key] = value > 30 ? 30 : value;
						} else {
							_Conf2.default[key] = value;
						}
					}
				}

				localStorage.removeItem(key);
			});
		}
	} else {
		log("PREVIOUS VERSION EXISTS", previousVersion);
		JUST_INSTALLED = false;
		JUST_UPGRADED = previousVersion !== _globals2.default.EXTENSION_VERSION;
		if (JUST_UPGRADED) {
			log("THIS IS AN UPGRADE");

			_Conf2.default.previous_version = _globals2.default.EXTENSION_VERSION;
			const prevVersion = previousVersion.split(".");
			if (prevVersion[0] === currentVersion[0] && prevVersion[1] === currentVersion[1]) {
				HOTFIX = true;
			}

			if (!HOTFIX) {
				_Conf2.default.upgrade_dismissed = false;
				if (!_Conf2.default.ghostrank) {
					_Conf2.default.ghostrank = 2;
				}
			}
		} else {
			log("SAME VERSION OR NOT THE FIRST RUN");
		}
	}
}

function initializeGhosteryModules() {
	if (JUST_UPGRADED) {
		(0, _metrics.ping)('upgrade');
	} else if (JUST_INSTALLED) {
		const date = new Date(),
		      year = date.getFullYear().toString(),
		      month = ("0" + (date.getMonth() + 1)).slice(-2).toString(),
		      day = ("0" + date.getDate()).slice(-2).toString(),
		      dateString = year + '-' + month + '-' + day,
		      randomNumber = Math.floor(Math.random() * 100) + 1;

		_Conf2.default.install_random_number = randomNumber;
		_Conf2.default.install_date = dateString;

		(0, _metrics.setUninstallUrl)();

		(0, _metrics.ping)('install_success');

		setTimeout(function () {
			if (_Conf2.default.ghostrank === 2) {
				(0, _metrics.ping)('install');
			}
		}, 300000);

		chrome.tabs.create({
			url: 'https://extension.' + GHOSTERY_DOMAIN + '.com/' + _Conf2.default.language + '/settings',
			active: true
		});
	} else {
		(0, _metrics.ping)('install');
	}

	(0, _metrics.ping)('active');

	cmp.fetchCMPData();

	setInterval(function () {
		cmp.fetchCMPData();

		autoUpdateBugDb();
	}, 1800000);

	cmp.updateCTAStatus("mapthesetrackers", 1800000);

	initializeDispatcher();

	utils.getActiveTab(function (tab) {
		let tabId = 0;
		if (tab) {
			tabId = tab.id;
		}
		button.update(tabId);
	});

	accounts.scheduleNextRefresh();

	return Promise.all([_BugDb2.default.init(JUST_UPGRADED), _Click2PlayDb2.default.init(JUST_UPGRADED), _CompatibilityDb2.default.init(JUST_UPGRADED), _SurrogateDb2.default.init(JUST_UPGRADED)]);
}

function initializeEventListeners() {
	chrome.webNavigation.onBeforeNavigate.addListener(onBeforeNavigate);

	chrome.webNavigation.onCommitted.addListener(function (details) {
		onNavigation(details);
	});

	chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {
		const tab_id = details.tabId;
		if (!utils.isValidTopLevelNavigation(details)) {
			return;
		}
		onDOMContentLoaded(tab_id);
	});

	chrome.webNavigation.onCompleted.addListener(function (details) {
		const tab_id = details.tabId;

		if (!utils.isValidTopLevelNavigation(details)) {
			return;
		}

		onNavigationCompleted(tab_id);

		if (details.frameId === 0) {
			_Click2PlayDb2.default.reset(tab_id);
			REDIRECT_MAP.clear();
			LET_REDIRECTS_THROUGH = false;
		}
	});

	chrome.webNavigation.onReferenceFragmentUpdated.addListener(onNavigation);
	if (chrome.webNavigation.onHistoryStateUpdated) {
		chrome.webNavigation.onHistoryStateUpdated.addListener(onNavigation);
	}

	chrome.webNavigation.onErrorOccurred.addListener(function (details) {
		const tab_id = details.tabId;

		if (!utils.isValidTopLevelNavigation(details)) {
			if (details.url.indexOf('https://chrome.google.com/webstore/') === 0) {
				utils.clearTabData(tab_id);
				C2P_LOADED = NOTIFICATIONS_LOADED = false;
			}

			return;
		}

		if (details.frameId === 0) {
			_Click2PlayDb2.default.reset(tab_id);
			REDIRECT_MAP.clear();
			LET_REDIRECTS_THROUGH = false;
		}
	});

	chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, {
		urls: ['http://*/*', 'https://*/*']
	}, ['blocking']);

	chrome.webRequest.onHeadersReceived.addListener(function (details) {
		if (details.statusCode >> 8 === 1) {
			return;
		}


		if (details.type === "main_frame") {
			for (let i in details.responseHeaders) {
				if (details.responseHeaders.hasOwnProperty(i)) {
					const h = details.responseHeaders[i];
					if (h.name.toLowerCase() === 'content-length') {
						_TabInfo2.default.setTabInfo(details.tabId, 'contentLength', h.value);
						break;
					}
				}
			}
		} else {
			_Latency2.default.logLatency(details, true, "onHeadersReceived");
		}
	}, {
		urls: ['http://*/*', 'https://*/*']
	}, ['responseHeaders']);

	chrome.webRequest.onBeforeRedirect.addListener(function (details) {
		if (details.type === "main_frame") {
			_TabInfo2.default.setTabInfo(details.tabId, 'url', details.url);
			REDIRECT_MAP.set(details.requestId, { url: details.url, redirectUrl: details.redirectUrl });
		}
		_Latency2.default.logLatency(details, true);
	}, {
		urls: ['http://*/*', 'https://*/*']
	});

	chrome.webRequest.onCompleted.addListener(function (details) {
		if (!details || details.tabId <= 0) {
			return;
		}

		utils.sendMessageToFrame(details.tabId, details.frameId, 'getResourceTiming', { details: details });

		REDIRECT_MAP.delete(details.requestId);
		LET_REDIRECTS_THROUGH = false;
	}, {
		urls: ['http://*/*', 'https://*/*']
	});

	chrome.webRequest.onErrorOccurred.addListener(function (details) {
		_Latency2.default.logLatency(details, false);
		REDIRECT_MAP.delete(details.requestId);
		LET_REDIRECTS_THROUGH = false;
	}, {
		urls: ['http://*/*', 'https://*/*']
	});

	chrome.tabs.onActivated.addListener(function (activeInfo) {
		C2P_LOADED = NOTIFICATIONS_LOADED = false;
		button.update(activeInfo.tabId);
	});

	chrome.tabs.onReplaced.addListener(function (addedTabId, removedTabId) {
		const newTab = _TabInfo2.default.getTabInfo(addedTabId);

		if (newTab.prefetched) {
			newTab.prefetched = false;

			purplebox.createBox(addedTabId).then(result => {
				_FoundBugs2.default.update(addedTabId);
				button.update(addedTabId);
			}).catch(err => {
				log("chrome.tabs.onReplaced purplebox creation failed:", err);
			});
		} else {
			_FoundBugs2.default.update(addedTabId);
			button.update(addedTabId);
		}
		log('chrome.tabs.onReplaced', newTab);
	});

	chrome.tabs.onRemoved.addListener(function (tab_id) {
		const tab = _TabInfo2.default.getTabInfo(tab_id);
		utils.clearTabData();
		C2P_LOADED = NOTIFICATIONS_LOADED = false;
		log("ON TAB REMOVED", tab_id, tab);
	});

	window.addEventListener('beforeunload', function () {});

	onMessage.addListener(function (request, sender, callback) {
		const name = request.name,
		      message = request.message,
		      messageId = request.messageId,
		      origin = request.origin,
		      tab = sender.tab,
		      tab_id = tab && tab.id,
		      tab_url = tab && (tab.url ? tab.url : sender.url ? sender.url : "");

		if (!onMessageHandler(name, message, messageId, origin, tab_id, tab_url, callback)) {
			callback();
		}

		return true;
	});
}

function init() {
	_Conf2.default.init().then(() => {
		initializePopup();
		initializeVersioning();
		initializeEventListeners();
		initializeGhosteryModules().then(result => {
			accounts.pullUserSettings().catch(err => {
				log('init() cannot pull user settings:', err);
			});
		});
	}).catch(err => {
		log('Error in init()', err);
	});
}

init();

},{"../app/templates/precompiled/click2play":1,"./accounts":9,"./classes/BugDb":11,"./classes/Button":12,"./classes/CMP":13,"./classes/Click2PlayDb":14,"./classes/CompatibilityDb":15,"./classes/Conf":16,"./classes/Dispatcher":17,"./classes/ExtensionWeb":18,"./classes/FoundBugs":19,"./classes/Ghostrank":20,"./classes/Latency":21,"./classes/Policy":22,"./classes/PurpleBox":23,"./classes/SurrogateDb":24,"./classes/TabInfo":25,"./classes/TrackerMap":26,"./common":28,"./globals":29,"./matcher":30,"./metrics":31,"./utils":32,"moment/min/moment-with-locales.min.js":6,"underscore":8}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Updatable = require('./Updatable');

var _Updatable2 = _interopRequireDefault(_Updatable);

var _utils = require('../utils');

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BugDb extends _Updatable2.default {
	updateNewAppIds(new_apps, old_apps) {
		(0, _common.log)('updating newAppIds...');

		var new_app_ids = _underscore2.default.difference(_underscore2.default.keys(new_apps), _underscore2.default.keys(old_apps)).map(Number);

		_Conf2.default.new_app_ids = new_app_ids;

		return new_app_ids;
	}

	applyBlockByDefault(new_app_ids) {
		if (_Conf2.default.block_by_default) {
			(0, _common.log)('applying block-by-default...');
			_underscore2.default.each(new_app_ids, function (app_id) {
				_Conf2.default.selected_app_ids[app_id] = 1;
			});
		}
	}

	processList(bugs, skip_cache_flush) {
		var patterns = bugs.patterns,
		    regexes = patterns.regex,
		    db = {
			apps: bugs.apps,
			bugs: bugs.bugs,
			firstPartyExceptions: bugs.firstPartyExceptions,
			patterns: {
				host: patterns.host,
				host_path: patterns.host_path,
				path: patterns.path,

				regex: {}
			},
			version: bugs.version,
			JUST_UPDATED_WITH_NEW_TRACKERS: false
		};

		(0, _common.log)('initializing bugdb regexes...');

		for (var id in regexes) {
			if (regexes.hasOwnProperty(id)) {
				db.patterns.regex[id] = new RegExp(regexes[id], 'i');
			}
		}

		(0, _common.log)('setting bugdb noneSelected/allSelected...');

		var num_selected = _underscore2.default.size(_Conf2.default.selected_app_ids);
		db.noneSelected = num_selected === 0;

		(0, _utils.defineLazyProperty)(db, 'allSelected', function () {
			var num_selected = _underscore2.default.size(_Conf2.default.selected_app_ids);
			return !!num_selected && _underscore2.default.every(db.apps, function (app, app_id) {
				return _Conf2.default.selected_app_ids.hasOwnProperty(app_id);
			});
		});

		(0, _common.log)('processed bugdb...');

		var old_bugs = _Conf2.default.bugs,
		    new_app_ids;

		if (old_bugs) {
			if (old_bugs.hasOwnProperty('version') && bugs.version > old_bugs.version) {
				new_app_ids = this.updateNewAppIds(bugs.apps, old_bugs.apps);

				if (new_app_ids.length) {
					this.applyBlockByDefault(new_app_ids);
					db.JUST_UPDATED_WITH_NEW_TRACKERS = true;
				}
			} else if (old_bugs.hasOwnProperty('bugsVersion') && bugs.version !== old_bugs.bugsVersion) {
					var old_apps = _underscore2.default.reduce(old_bugs.bugs, function (memo, bug) {
						memo[bug.aid] = true;
						return memo;
					}, {});

					new_app_ids = this.updateNewAppIds(bugs.apps, old_apps);

					if (new_app_ids.length) {
						this.applyBlockByDefault(new_app_ids);

						if (bugs.version > old_bugs.bugsVersion) {
							db.JUST_UPDATED_WITH_NEW_TRACKERS = true;
						}
					}
				}
		}

		this.db = db;

		if (!old_bugs || !old_bugs.hasOwnProperty('version') || bugs.version > old_bugs.version) {
			_Conf2.default.bugs = bugs;
		}

		if (!skip_cache_flush) {
			(0, _utils.flushChromeMemoryCache)();
		}

		return true;
	}
}

exports.default = new BugDb('bugs');
module.exports = exports['default'];

},{"../common":28,"../utils":32,"./Conf":16,"./Updatable":27,"underscore":8}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _FoundBugs = require('./FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

var _Policy = require('./Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _utils = require('../utils');

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Button {

	constructor() {
		this.backgrounds = {
			purple: [51, 0, 51, 230],
			alert: [255, 157, 0, 230]
		};
		this.policy = new _Policy2.default();
	}

	update(tabId) {
		if (tabId) {
			(0, _utils.getTab)(tabId, this._getBugCount.bind(this), err => {
				(0, _common.log)("Button.update failed", err);
			});
		} else {
			chrome.tabs.query({
				active: true
			}, tabs => {
				if (chrome.runtime.lastError) {
					(0, _common.log)('chrome.tabs.query', chrome.runtime.lastError.message);
					return;
				}

				tabs.map(this._getBugCount.bind(this));
			});
		}
	}

	_getBugCount(tab) {
		var tabId = tab.id,
		    tabUrl = tab.url,
		    trackerCount = '',
		    alert = false;

		if (_FoundBugs2.default.getBugs(tabId) === false) {
			trackerCount = '';
		} else {
			let apps = _FoundBugs2.default.getAppsCountByIssues(tabId, tabUrl);
			trackerCount = apps.all.toString();
			alert = apps.total > 0;
		}

		if (trackerCount === '') {
			this._setIcon(false, tabId, trackerCount, alert);
		} else {
			this._setIcon(!_Conf2.default.paused_blocking && !this.policy.whitelisted(tab.url), tabId, trackerCount, alert);
		}
	}

	_setIcon(active, tabId, trackerCount, alert) {
		chrome.browserAction.setIcon({
			path: {
				19: 'app/images/icon19' + (active ? '' : '_off') + '.png',
				38: 'app/images/icon38' + (active ? '' : '_off') + '.png'
			},
			tabId: tabId
		}, () => {
			if (chrome.runtime.lastError) {
				(0, _common.log)('chrome.browserAction.setIcon', chrome.runtime.lastError);
			} else {
				(0, _utils.getTab)(tabId, () => {
					if (typeof chrome.browserAction.setTitle === 'function') {
						chrome.browserAction.setTitle({
							title: chrome.i18n.getMessage("browser_button_tooltip"),
							tabId: tabId
						});
					}

					if (_Conf2.default.show_badge) {
						chrome.browserAction.setBadgeText({
							text: trackerCount,
							tabId: tabId
						});

						chrome.browserAction.setBadgeBackgroundColor({
							color: alert ? this.backgrounds.alert : this.backgrounds.purple,
							tabId: tabId
						});
					}
				});
			}
		});
	}
}

exports.default = Button;
module.exports = exports['default'];

},{"../common":28,"../utils":32,"./Conf":16,"./FoundBugs":19,"./Policy":22}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

var _utils = require('../utils');

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CMP_SUB_DOMAIN = _globals2.default.CMP_SUB_DOMAIN,
      BROWSER_INFO = (0, _common.browserInfo)();

class CMP {

	constructor() {
		this.CMP_DATA = [];
	}

	fetchCMPData() {
		if (!_Conf2.default.show_cmp) {
			return Promise.resolve(false);
		}

		var URL = 'https://' + CMP_SUB_DOMAIN + '.ghostery.com/check' + '?os=' + encodeURIComponent(BROWSER_INFO.os) + '&gr=' + encodeURIComponent(_Conf2.default.ghostrank) + '&install_date=' + encodeURIComponent(_Conf2.default.install_date) + '&ir=' + encodeURIComponent(_Conf2.default.install_random_number) + '&gv=' + encodeURIComponent(_globals2.default.EXTENSION_VERSION) + '&si=' + (_Conf2.default.login_info.logged_in ? '1' : '0') + '&ua=' + encodeURIComponent(BROWSER_INFO.name) + '&lc=' + encodeURIComponent(_Conf2.default.last_cmp_date) + '&v=' + encodeURIComponent(_Conf2.default.cmp_version) + '&l=' + encodeURIComponent(_Conf2.default.language);

		return (0, _utils.getJson)(URL).then(data => {
			if (data && (!_Conf2.default.cmp_version || data.Version > _Conf2.default.cmp_version)) {
				data.Campaigns.forEach(campaign => {
					if (campaign.Dismiss === 0) {
						campaign.Dismiss = 10;
					}

					if (!_Conf2.default.last_cmp_date || _Conf2.default.last_cmp_date < campaign.Timestamp) {
						_Conf2.default.last_cmp_date = campaign.Timestamp;
					}
				});

				_Conf2.default.cmp_version = data.Version;
				_Conf2.default.cmp_data = this.CMP_DATA = data.Campaigns;
				return this.CMP_DATA;
			} else {
				(0, _common.log)('No CMP data to fetch at this time');
				_Conf2.default.cmp_data = [];
				return false;
			}
		}).catch(err => {
			(0, _common.log)('Error in fetchCMPData', err);
			return false;
		});
	}

	updateCTAStatus(cta, interval) {
		if (!interval) {
			interval = 1800000;
		}

		if (cta) {
			this._fetchCTAStatus(cta).then(function (response) {
				_Conf2.default.cta_status = response;
			}).catch(function (error) {
				(0, _common.log)("updateCTAStatus error", error);
			});
		} else {
			(0, _common.log)("updateCTAStatus error: CTA is required");
		}

		setTimeout(this.updateCTAStatus.bind(this), interval, cta, interval);
	}

	_fetchCTAStatus(cta) {
		if (cta) {
			var url = 'https://' + CMP_SUB_DOMAIN + '.ghostery.com/cta/' + cta;
			return (0, _utils.getJson)(url);
		}

		return Promise.reject(new Error("FetchCTAStatus Error: CTA name is required."));
	}
}

exports.default = CMP;
module.exports = exports['default'];

},{"../common":28,"../globals":29,"../utils":32,"./Conf":16}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _common = require('../common');

var _Updatable = require('./Updatable');

var _Updatable2 = _interopRequireDefault(_Updatable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Click2PlayDb extends _Updatable2.default {
	constructor(type) {
		super(type);
		this.allowOnceList = {};
	}

	buildDb(entries, version) {
		var apps = {},
		    allow;

		entries.forEach(function (entry) {
			if (!apps.hasOwnProperty(entry.aid)) {
				apps[entry.aid] = [];
			}

			allow = [entry.aid];
			if (entry.alsoAllow) {
				allow = allow.concat(entry.alsoAllow);
			}

			apps[entry.aid].push({
				aid: entry.aid,
				allow: allow,
				frameColor: entry.frameBackground ? entry.frameBackground : '',
				text: entry.text ? entry.text : '',
				button: entry.button ? entry.button : '',
				attach: entry.attach ? entry.attach : false,
				ele: entry.selector ? entry.selector : '',
				type: entry.type ? entry.type : ''
			});
		});

		return {
			apps: apps,
			version: version
		};
	}

	processList(data) {
		var db;

		(0, _common.log)('processing c2p...');

		try {
			db = this.buildDb(data.click2play, data.click2playVersion);
		} catch (e) {
			(0, _common.log)('Click2PlayDb processList() error', e);
			return false;
		}

		if (!db) {
			return false;
		}

		(0, _common.log)('processed c2p...');

		this.db = db;
		_Conf2.default.click2play = data;

		return true;
	}

	reset(tab_id) {
		if (!this.allowOnceList.hasOwnProperty(tab_id)) {
			return;
		}

		var list = this.allowOnceList[tab_id];

		for (var aid in list) {
			if (!list.hasOwnProperty(aid)) {
				continue;
			}
			list[aid]--;
			if (list[aid] <= 0) {
				delete list[aid];
			}
		}

		if (!_underscore2.default.size(list)) {
			delete this.allowOnceList[tab_id];
		}
	}

	allowedOnce(tab_id, aid) {
		return this.allowOnceList.hasOwnProperty(tab_id) && this.allowOnceList[tab_id].hasOwnProperty(aid);
	}

	allowOnce(app_ids, tab_id) {
		if (!this.allowOnceList.hasOwnProperty(tab_id)) {
			this.allowOnceList[tab_id] = {};
		}

		for (var aid in this.allowOnceList[tab_id]) {
			if (this.allowOnceList[tab_id].hasOwnProperty(aid)) {
				this.allowOnceList[tab_id][aid]++;
			}
		}

		app_ids.forEach(app_id => {
			this.allowOnceList[tab_id][app_id] = 2;
		});
	}
}

exports.default = new Click2PlayDb('click2play');
module.exports = exports['default'];

},{"../common":28,"./Conf":16,"./Updatable":27,"underscore":8}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Updatable = require('./Updatable');

var _Updatable2 = _interopRequireDefault(_Updatable);

var _matcher = require('../matcher');

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CompatibilityDb extends _Updatable2.default {
	buildDb(bugs, version) {
		var map = {};

		bugs.forEach(function (s) {
			map[s.aid] = s.urls;
		});

		return {
			list: map,
			version: version
		};
	}

	processList(comp) {
		var db;

		(0, _common.log)('processing comp...');

		try {
			db = this.buildDb(comp.compatibility, comp.compatibilityVersion);
		} catch (e) {
			(0, _common.log)('CompatibilityDb processList() error', e);
			return false;
		}

		if (!db) {
			return false;
		}

		(0, _common.log)('processed comp...');

		this.db = db;
		_Conf2.default.compatibility = comp;

		return true;
	}

	hasIssue(aid, tab_url) {
		return this.db.list.hasOwnProperty(aid) && (0, _matcher.fuzzyUrlMatcher)(tab_url, this.db.list[aid]);
	}
}

exports.default = new CompatibilityDb('compatibility');
module.exports = exports['default'];

},{"../common":28,"../matcher":30,"./Conf":16,"./Updatable":27}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

var _utils = require('../utils');

var _common = require('../common');

var _metrics = require('../metrics');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Conf {

	constructor() {
		this.onInit = false;
		this.SYNC_SET = new Set(_globals2.default.SYNC_ARRAY);
	}

	init() {
		return (0, _common.prefsGet)('alert_bubble_pos', 'alert_bubble_timeout', 'ignore_first_party', 'enable_autoupdate', 'ghostrank', 'account_dismissed', 'upgrade_dismissed', 'tour_alert_dismissed', 'show_alert', 'hide_alert_trusted', 'show_badge', 'alert_expanded', 'block_by_default', 'notify_library_updates', 'notify_upgrade_updates', 'notify_hotfix_updates', 'enable_metrics', 'enable_click2play', 'enable_click2play_social', 'db_last_updated', 'settings_last_imported', 'settings_last_exported', 'show_cmp', 'show_tracker_urls', 'toggle_individual_trackers', 'bugs_last_updated', 'bugs_last_checked', 'import_callout_dismissed', 'previous_version', 'previousVersion', 'install_random_number', 'install_date', 'last_cmp_date', 'cmp_version', 'global_settings_updated', 'metrics', 'cmp_data', 'bugs', 'click2play', 'compatibility', 'surrogates', 'new_app_ids', 'selected_app_ids', 'site_whitelist', 'site_blacklist', 'site_specific_unblocks', 'site_specific_blocks', 'global_settings', 'cta_status', 'login_info', 'reload_banner_status', 'trackers_banner_status').then(data => {
			const nowTime = Number(new Date().getTime());
			data = data || {};

			this.onInit = true;

			const _initProperty = (name, value) => {
				if (null === data[name] || typeof data[name] === 'undefined') {
					data[name] = value;
					(0, _common.pref)(name, value);
				}
				this[name] = data[name];
			};

			_initProperty('alert_bubble_pos', 'br');
			_initProperty('alert_bubble_timeout', 15);
			_initProperty('ignore_first_party', true);
			_initProperty('enable_autoupdate', true);
			_initProperty('ghostrank', 2);
			_initProperty('account_dismissed', false);
			_initProperty('upgrade_dismissed', false);
			_initProperty('tour_alert_dismissed', false);
			_initProperty('show_alert', true);
			_initProperty('hide_alert_trusted', false);
			_initProperty('show_badge', true);
			_initProperty('alert_expanded', false);
			_initProperty('block_by_default', false);
			_initProperty('notify_library_updates', false);
			_initProperty('notify_upgrade_updates', true);
			_initProperty('notify_hotfix_updates', false);
			_initProperty('enable_metrics', false);
			_initProperty('enable_click2play', true);
			_initProperty('enable_click2play_social', true);
			_initProperty('db_last_updated', Number(new Date().getTime()));
			_initProperty('settings_last_imported', 0);
			_initProperty('settings_last_exported', 0);
			_initProperty('show_cmp', true);
			_initProperty('show_tracker_urls', true);
			_initProperty('toggle_individual_trackers', true);
			_initProperty('bugs_last_updated', 0);
			_initProperty('bugs_last_checked', 0);
			_initProperty('import_callout_dismissed', true);
			_initProperty('install_random_number', 0);
			_initProperty('install_date', 0);
			_initProperty('last_cmp_date', 0);
			_initProperty('cmp_version', 0);
			_initProperty('global_settings_updated', 0);

			if (null === data.previous_version) {
				if (data.previousVersion) {
					data.previous_version = data.previousVersion;
				} else {
					data.previous_version = "";
				}
				(0, _common.pref)('previous_version', data.previous_version);
			}
			chrome.storage.local.remove('previousVersion');
			delete data.previousVersion;
			this.previous_version = data.previous_version;

			_initProperty('metrics', {});
			_initProperty('cmp_data', []);
			_initProperty('bugs', {});
			_initProperty('click2play', {});
			_initProperty('compatibility', {});
			_initProperty('surrogates', {});
			_initProperty('new_app_ids', []);
			_initProperty('selected_app_ids', {});
			_initProperty('site_whitelist', []);
			_initProperty('site_blacklist', []);
			_initProperty('site_specific_unblocks', {});
			_initProperty('site_specific_blocks', {});
			_initProperty('global_settings', {});
			_initProperty('cta_status', {});
			_initProperty('login_info', {
				'logged_in': false,
				'email': '',
				'user_token': '',
				'decoded_user_token': {},
				'is_validated': false,
				'last_refresh_time': 0
			});
			_initProperty('reload_banner_status', {
				'dismissals': [],
				'show_time': nowTime,
				'show': true
			});
			_initProperty('trackers_banner_status', {
				'dismissals': [],
				'show_time': nowTime,
				'show': true
			});

			this.paused_blocking = false;
			this.language = this._getDefaultLanguage();

			this.onInit = false;
		});
	}
	_getDefaultLanguage() {
		const SUPPORTED_LANGUAGES = {
			'cs': "čeština",
			'da': "dansk",
			'de': "Deutsch",
			'el': "ελληνικά",
			'en': "English",
			'en_GB': "British English",
			'es': "español",
			'fi': "suomi",
			'fr': "Français",
			'hu': "magyar",
			'it': "Italiano",
			'ja': "日本語",
			'ko': "한국어",
			'nn_NO': "Norsk",
			'nl': "Nederlands",
			'pl': "Polski",
			'pt_BR': "português",
			'ru': "Русский",
			'sv': "Svenska",
			'tr': "Türkçe",
			'zh_CN': "简体中文",
			'zh_TW': "繁體中文"
		};

		var lang = window.navigator.language.replace('-', '_');
		if (SUPPORTED_LANGUAGES.hasOwnProperty(lang)) {
			return lang;
		}

		lang = lang.slice(0, 2);
		if (SUPPORTED_LANGUAGES.hasOwnProperty(lang)) {
			return lang;
		}

		return 'en';
	}
}

var handler = {
	get: function (target, key) {
		const check_if_changed = _underscore2.default.debounce((target, key) => {
			(0, _common.log)('checking old vs. new for', key);
			var value = target[key];
			if (!_underscore2.default.isEqual(value.current, value.old)) {
				this.set(target, key, value.current);
			}
		}, 200);

		var value = target[key];
		if (typeof value !== 'undefined' && value.hasOwnProperty('current')) {
			check_if_changed(target, key);
			return value.current;
		} else {
			return value;
		}
	},

	set: function (target, key, value) {
		var origValue = target[key];
		if (_underscore2.default.isObject(value)) {
			target[key] = { current: value, old: (0, _utils.deepClone)(value) };
		} else {
			target[key] = value;
		}

		var hasChanged = key !== 'login_info' || origValue === undefined || origValue.current.logged_in !== value.logged_in;

		if (!target.onInit && hasChanged) {
			if (key !== 'pause_blocking' && key !== 'language') {
				(0, _common.pref)(key, value);
			}

			_Dispatcher2.default.trigger('conf.save.' + key, value);

			if (target.SYNC_SET.has(key)) {
					_Dispatcher2.default.trigger('conf.changed.settings', key);
				}

			_underscore2.default.debounce(_metrics.setUninstallUrl, 200)(key);
		}

		return true;
	},

	has: function (target, key) {
		return key in target;
	}
};

exports.default = new Proxy(new Conf(), handler);
module.exports = exports['default'];

},{"../common":28,"../globals":29,"../metrics":31,"../utils":32,"./Dispatcher":17,"underscore":8}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = require('../common');

class Dispatcher {
	constructor() {
		this.handlers = [];
	}

	on(event, handler, context) {
		(0, _common.log)("dispatcher.on called from", event);
		if (typeof context === 'undefined') {
			context = handler;
		}
		this.handlers.push({
			event: event,
			handler: handler.bind(context)
		});
	}

	trigger(event, args) {
		(0, _common.log)("dispatcher.trigger called from", event);
		this.handlers.forEach(topic => {
			if (topic.event === event) {
				topic.handler(args);
			}
		});
	}
}

exports.default = new Dispatcher();
module.exports = exports['default'];

},{"../common":28}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _BugDb = require('./BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

var _accounts = require('../accounts');

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SYNC_SET = new Set(_globals2.default.SYNC_ARRAY);
const t = chrome.i18n.getMessage;

class ExtensionWeb {

	constructor() {
		this.oldConf = {};
	}

	getSettings() {
		return {
			translations: this.getTranslations(),
			conf: (0, _accounts.buildUserSettings)(),
			syncSetArray: _globals2.default.SYNC_ARRAY,
			language: _Conf2.default.language,
			prefs: {
				newAppIds: _Conf2.default.new_app_ids,
				bugs_last_updated: _Conf2.default.bugs_last_updated,
				bugs_last_checked: _Conf2.default.bugs_last_checked
			},
			browser: (0, _common.browserInfo)().displayName,
			version: _globals2.default.EXTENSION_VERSION,
			bugs: _BugDb2.default.db
		};
	}

	setSettings(message) {
		SYNC_SET.forEach(key => {
			if (message.conf[key] !== undefined && !_underscore2.default.isEqual(_Conf2.default[key], message.conf[key]) && key !== 'reload_banner_status' && key !== 'trackers_banner_status') {
				_Conf2.default[key] = message.conf[key];
			}
		});

		if (_Conf2.default.reload_banner_status.show !== message.conf.reload_banner_status) {
			_Conf2.default.reload_banner_status = {
				'show_time': 0,
				'dismissals': [],
				'show': message.conf.reload_banner_status
			};
		}
		if (_Conf2.default.trackers_banner_status.show !== message.conf.trackers_banner_status) {
			_Conf2.default.trackers_banner_status = {
				'show_time': 0,
				'dismissals': [],
				'show': message.conf.trackers_banner_status
			};
		}

		_Conf2.default.bugs_last_updated = message.prefs.bugs_last_updated;
		_Conf2.default.bugs_last_checked = message.prefs.bugs_last_checked;

		var settings = this.getSettings();

		(0, _accounts.pushUserSettings)(settings);
	}

	getTranslations() {
		return {
			library_updated_on: t('library_updated_on'),
			library_never_updated: t('library_never_updated'),
			library_update_now_link: t('library_update_now_link'),
			library_update_successful: t('library_update_successful'),
			library_update_failed: t('library_update_failed'),
			library_update_already_updated: t('library_update_already_updated'),
			library_update_in_progress: t('library_update_in_progress'),
			whitelist_error_duplicate_url: t('whitelist_error_duplicate_url'),
			whitelist_error_blacklist_url: t('whitelist_error_blacklist_url'),
			blacklist_error_duplicate_url: t('blacklist_error_duplicate_url'),
			blacklist_error_whitelist_url: t('blacklist_error_whitelist_url'),
			white_black_list_error_invalid_url: t('white_black_list_error_invalid_url'),
			category_uncategorized: t('category_uncategorized'),
			category_advertising: t('category_advertising'),
			category_comments: t('category_comments'),
			category_customer_interaction: t('category_customer_interaction'),
			category_essential: t('category_essential'),
			category_pornvertising: t('category_pornvertising'),
			category_site_analytics: t('category_site_analytics'),
			category_social_media: t('category_social_media'),
			category_audio_video_player: t('category_audio_video_player'),
			category_uncategorized_desc: t('category_uncategorized_desc'),
			category_advertising_desc: t('category_advertising_desc'),
			category_comments_desc: t('category_comments_desc'),
			category_customer_interaction_desc: t('category_customer_interaction_desc'),
			category_essential_desc: t('category_essential_desc'),
			category_pornvertising_desc: t('category_pornvertising_desc'),
			category_site_analytics_desc: t('category_site_analytics_desc'),
			category_social_media_desc: t('category_social_media_desc'),
			category_audio_video_player_desc: t('category_audio_video_player_desc'),
			tracker_description_getting: t('tracker_description_getting'),
			tracker_description_none_found: t('tracker_description_none_found'),
			tracker_description_learn_more: t('tracker_description_learn_more'),
			blocking_options_trackers: t('blocking_options_trackers'),
			blocking_options_blocked: t('blocking_options_blocked'),
			blocking_options_blocked_all: t('blocking_options_blocked_all')
		};
	}
}

exports.default = ExtensionWeb;
module.exports = exports['default'];

},{"../accounts":9,"../common":28,"../globals":29,"./BugDb":11,"./Conf":16,"underscore":8}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _BugDb = require('./BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _CompatibilityDb = require('./CompatibilityDb');

var _CompatibilityDb2 = _interopRequireDefault(_CompatibilityDb);

var _TabInfo = require('./TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LATENCY_ISSUE_THRESHOLD = (0, _common.browserInfo)().name === 'firefox' ? 2000 : 1000;

class FoundBugs {

	constructor() {
		this._foundBugs = {};
	}

	update(tab_id, bug_id, src, blocked, type, request_id) {
		if (!this._foundBugs.hasOwnProperty(tab_id)) {
			this._foundBugs[tab_id] = {};
		}

		if (!bug_id) {
			return;
		}

		if (!this._foundBugs[tab_id].hasOwnProperty(bug_id)) {
			this._foundBugs[tab_id][bug_id] = {
				sources: [],
				hasLatencyIssue: false,
				hasInsecureIssue: false
			};
		}
		this._foundBugs[tab_id][bug_id].sources.push({
			src: src,
			blocked: blocked,
			type: type.toLowerCase()
		});

		if (!this._foundBugs[tab_id][bug_id].hasInsecureIssue) {
			let tab = _TabInfo2.default.getTabInfo(tab_id);
			this._foundBugs[tab_id][bug_id].hasInsecureIssue = tab.protocol === 'https' && src.indexOf('https') !== 0;
		}

		if (this._foundBugs[tab_id][bug_id].blocked !== false) {
			this._foundBugs[tab_id][bug_id].blocked = blocked;
		}
	}

	getBugs(tab_id) {
		return this._foundBugs.hasOwnProperty(tab_id) && this._foundBugs[tab_id];
	}

	getApps(tab_id, sorted, tab_url) {
		var apps_arr = [],
		    apps_obj = {},
		    bugs = this.getBugs(tab_id),
		    db = _BugDb2.default.db,
		    id,
		    aid,
		    latencyIssue = false,
		    insecureIssue = false;

		if (!bugs) {
			return bugs;
		}

		for (id in bugs) {
			if (!bugs.hasOwnProperty(id)) {
				continue;
			}

			aid = db.bugs[id].aid;
			latencyIssue = bugs[id].hasLatencyIssue;
			insecureIssue = bugs[id].hasInsecureIssue;
			if (apps_obj.hasOwnProperty(aid)) {
				apps_obj[aid].sources = apps_obj[aid].sources.concat(bugs[id].sources);

				if (latencyIssue) {
					apps_obj[aid].hasLatencyIssue = latencyIssue;
				}

				if (insecureIssue) {
					apps_obj[aid].hasInsecureIssue = insecureIssue;
				}

				if (apps_obj[aid].blocked !== false) {
					apps_obj[aid].blocked = bugs[id].blocked;
				}
			} else {
				apps_obj[aid] = {
					id: aid,
					name: db.apps[aid].name,
					cat: db.apps[aid].cat,
					blocked: bugs[id].blocked,
					sources: bugs[id].sources,
					hasCompatibilityIssue: tab_url && bugs[id].blocked ? _CompatibilityDb2.default.hasIssue(aid, tab_url) : false,
					hasLatencyIssue: latencyIssue,
					hasInsecureIssue: insecureIssue
				};
			}
		}

		for (id in apps_obj) {
			if (apps_obj.hasOwnProperty(id)) {
				apps_arr.push(apps_obj[id]);
			}
		}

		if (sorted) {
			apps_arr.sort(function (a, b) {
				a = a.name.toLowerCase();
				b = b.name.toLowerCase();
				return a > b ? 1 : a < b ? -1 : 0;
			});
		}

		return apps_arr;
	}

	getCategories(tab_id, sorted) {
		var cats_arr = [],
		    cats_obj = {},
		    bugs = this.getBugs(tab_id),
		    db = _BugDb2.default.db,
		    id,
		    aid,
		    cid;

		if (!bugs) {
			return bugs;
		}

		for (id in bugs) {
			if (!bugs.hasOwnProperty(id)) {
				continue;
			}
			aid = db.bugs[id].aid;
			cid = db.apps[aid].cat;

			if (cats_obj.hasOwnProperty(cid)) {
				if (cats_obj[cid].appIds.indexOf(aid) >= 0) {
					continue;
				}

				cats_obj[cid].appIds.push(aid);
				cats_obj[cid].trackers.push({
					id: aid,
					name: db.apps[aid].name,
					blocked: bugs[id].blocked
				});
				if (bugs[id].blocked) {
					cats_obj[cid].blocked++;
				} else {
					cats_obj[cid].allowed++;
				}
				cats_obj[cid].total++;
			} else {
				cats_obj[cid] = {
					id: cid,
					name: cid,
					appIds: [aid],
					trackers: [{
						id: aid,
						name: db.apps[aid].name,
						blocked: bugs[id].blocked
					}],
					blocked: bugs[id].blocked ? 1 : 0,
					allowed: bugs[id].blocked ? 0 : 1,
					total: 1
				};
			}
		}

		for (cid in cats_obj) {
			if (cats_obj.hasOwnProperty(cid)) {
				cats_arr.push(cats_obj[cid]);
			}
		}

		if (sorted) {
			cats_arr.sort(function (a, b) {
				a = a.name.toLowerCase();
				b = b.name.toLowerCase();
				return a > b ? 1 : a < b ? -1 : 0;
			});
		}

		return cats_arr;
	}

	getAppsCount(tab_id) {
		var apps = this.getApps(tab_id);
		if (apps) {
			return apps.length;
		}
		return 0;
	}

	getAppsCountByIssues(tab_id, tab_url) {
		var apps = this.getApps(tab_id, false, tab_url),
		    compatibility = 0,
		    insecure = 0,
		    latency = 0,
		    total = 0,
		    all = 0;

		if (apps) {
			apps.forEach(function (app) {
				if (app.hasCompatibilityIssue || app.hasInsecureIssue || app.hasLatencyIssue) {
					total++;
				}
				if (app.hasCompatibilityIssue) {
					compatibility++;
				}
				if (app.hasInsecureIssue) {
					insecure++;
				}
				if (app.hasLatencyIssue) {
					latency++;
				}
				all++;
			});
		}

		return {
			compatibility: compatibility,
			insecure: insecure,
			latency: latency,
			total: total,
			all: all
		};
	}

	getAppsCountByBlocked(tab_id) {
		var apps = this.getApps(tab_id),
		    blocked = 0,
		    allowed = 0;

		if (apps) {
			apps.forEach(function (app) {
				if (app.blocked) {
					blocked++;
				} else {
					allowed++;
				}
			});
		}

		return {
			blocked: blocked,
			allowed: allowed
		};
	}

	checkLatencyIssue(tab_id, bug_id, latency) {
		if (latency < LATENCY_ISSUE_THRESHOLD) {
			return;
		}

		if (!this._foundBugs.hasOwnProperty(tab_id) || !this._foundBugs[tab_id][bug_id]) {
			return;
		}

		this._foundBugs[tab_id][bug_id].hasLatencyIssue = true;
	}

	clear(tab_id) {
		delete this._foundBugs[tab_id];
	}
}

exports.default = new FoundBugs();
module.exports = exports['default'];

},{"../common":28,"./BugDb":11,"./CompatibilityDb":15,"./TabInfo":25}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _BugDb = require('./BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

var _utils = require('../utils');

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BROWSER_INFO = (0, _common.browserInfo)(),
      USER_AGENT = BROWSER_INFO.name;

class Ghostrank {

	constructor() {
		Ghostrank.censusCache = {};
		Ghostrank.preCensusCache = {};

		setInterval(this._cleanCaches.bind(this), 1800000);
	}

	onNavigate(url) {
		var today = this._getToday(),
		    parsedURL = (0, _utils.processUrl)(url),
		    host_with_pathname = parsedURL.host_with_path_cleaned;

		if (!Ghostrank.preCensusCache.hasOwnProperty(today) || !Ghostrank.preCensusCache[today].hasOwnProperty(host_with_pathname)) {
			return;
		}

		_underscore2.default.keys(Ghostrank.preCensusCache[today][host_with_pathname]).forEach(bug_id => {
			this._setCache(Ghostrank.censusCache, today, bug_id, host_with_pathname);
		});

		delete Ghostrank.preCensusCache[today][host_with_pathname];
	}

	recordStats(tab_url, bug_url, bug_id, block, latency, rtDuration, response_code, user_error, from_cache, page_timestamp, tracker_timestamp, content_length) {
		var today = this._getToday(),
		    db = _BugDb2.default.db,
		    app_id = db.bugs[bug_id].aid,
		    parsedURL = (0, _utils.processUrl)(tab_url),
		    host_with_pathname = parsedURL.host_with_path_cleaned,
		    blocking_mode = db.noneSelected ? '-1' : db.allSelected ? '1' : '0',
		    blocking_selected = _Conf2.default.selected_app_ids.hasOwnProperty(app_id) ? 'true' : 'false',
		    pt = page_timestamp ? page_timestamp : -1,
		    tt = tracker_timestamp ? tracker_timestamp : -1,
		    cl = content_length ? content_length : -1,
		    census_url,
		    xhr;

		if (!this.isValidUrl(parsedURL)) {
			return;
		}

		if (Ghostrank.censusCache.hasOwnProperty(today) && Ghostrank.censusCache[today].hasOwnProperty(host_with_pathname) && Ghostrank.censusCache[today][host_with_pathname].hasOwnProperty(bug_id)) {
			return;
		}

		census_url = 'https://l.ghostery.com/api/census' + '?bid=' + encodeURIComponent(app_id) + '&apid=' + encodeURIComponent(bug_id) + '&d=' + encodeURIComponent(host_with_pathname) + '&src=' + encodeURIComponent(bug_url) + '&bl=' + (block ? 'true' : 'false') + '&blm=' + blocking_mode + '&bs=' + blocking_selected + '&nl=' + latency + '&rtd=' + rtDuration + '&rc=' + response_code + '&ue=' + user_error + '&fc=' + from_cache + '&bv=' + encodeURIComponent(db.version) + '&cv=2' + '&ua=' + encodeURIComponent(USER_AGENT) + '&pt=' + pt + '&tt=' + tt + '&cl=' + cl + '&v=' + encodeURIComponent(_globals2.default.EXTENSION_VERSION);

		(0, _common.log)(`\nGhostrank Tracker Channel:
			company_app_id: ${ app_id }
			app_pattern_id: ${ bug_id }
			domain: ${ host_with_pathname }
			bug_url: ${ bug_url }
			block: ${ block }
			blocking_mode: ${ blocking_mode }
			blocking_selected: ${ blocking_selected }
			latency: ${ latency }
			response_code: ${ response_code }
			user_err0r: ${ user_error }
			from_cache: ${ from_cache }
			db_version: ${ db.version }
			ua: ${ USER_AGENT }
			page_timestamp: ${ pt }
			tracker_timestamp: ${ tt }
			content_length: ${ cl }
			extension_version: ${ _globals2.default.EXTENSION_VERSION }`);

		xhr = new XMLHttpRequest();
		xhr.open("GET", census_url, true);
		xhr.send();

		this._setCache(Ghostrank.preCensusCache, today, bug_id, host_with_pathname);
	}

	recordPageInfo(domain, page_latency, page_timestamp, ad_spots, content_length, performance_api, requests) {
		if (!_Conf2.default.ghostrank || _Conf2.default.ghostrank === 2) {
			return;
		}

		var xhr,
		    pt = page_timestamp ? page_timestamp : -1,
		    rnd = Math.ceil(9999999 * Math.random()),
		    page_info_url = 'https://l.ghostery.com/api/page/' + '?d=' + encodeURIComponent(domain) + '&l=' + page_latency + '&s=' + ad_spots + '&ua=' + encodeURIComponent(USER_AGENT) + '&pt=' + pt + '&rnd=' + rnd + '&cl=' + content_length + '&rq=' + requests;

		(0, _common.log)(`\nGhostrank Page Info:
			domain: ${ domain }
			page_latency: ${ page_latency }
			ad_spots: ${ ad_spots }
			ua: ${ USER_AGENT }
			page_timestamp: ${ pt }
			random: ${ rnd }
			content_length: ${ content_length }
			performance_api: ${ performance_api }
			requests: ${ requests }`);

		xhr = new XMLHttpRequest();
		xhr.open("GET", page_info_url, true);
		xhr.setRequestHeader("Performance-API", performance_api);
		xhr.send();
	}

	isValidUrl(parsedURL) {
		if (parsedURL.protocol.indexOf('http') === 0 && parsedURL.host.indexOf('.') !== -1 && /[A-Za-z]/.test(parsedURL.host)) {
			return true;
		} else {
			(0, _common.log)('Error: Ghostrank data not sent, invalid URL');
			return false;
		}
	}

	_cleanCaches() {
		var today = this._getToday();

		[Ghostrank.censusCache, Ghostrank.preCensusCache].forEach(function (cache, i) {
			for (var id in cache) {
				if (cache.hasOwnProperty(id)) {
					if (id !== today) {
						(0, _common.log)("Cleaned up", i === 1 ? 'preCensusCache' : 'censusCache');
						delete cache[id];
					}
				}
			}
		});
	}

	_setCache(cache, date, bug_id, url) {
		if (!cache[date]) {
			cache[date] = {};
		}

		if (!cache[date][url]) {
			cache[date][url] = {};
		}

		cache[date][url][bug_id] = 1;
	}

	_getToday() {
		var now = new Date();
		return now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
	}
}

exports.default = Ghostrank;
module.exports = exports['default'];

},{"../common":28,"../globals":29,"../utils":32,"./BugDb":11,"./Conf":16,"underscore":8}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Ghostrank = require('./Ghostrank');

var _Ghostrank2 = _interopRequireDefault(_Ghostrank);

var _TabInfo = require('./TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _utils = require('../utils');

var _FoundBugs = require('./FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Latency {
	constructor() {
		this.latencies = {};
		this.ghostrank = new _Ghostrank2.default();
	}

	logLatency(details, success, event) {
		var request_id = details.requestId,
		    tab_id = details.tabId,
		    bug_id,
		    start_time,
		    page_url,
		    incognito,
		    content_length;

		if (!this.latencies.hasOwnProperty(request_id)) {
			return;
		}

		if (_underscore2.default.isEmpty(this.latencies[request_id])) {
			delete this.latencies[request_id];
			return;
		}

		if (!this.latencies[request_id].hasOwnProperty(details.url)) {
			return;
		}

		if (event === "onHeadersReceived") {
			for (let i in details.responseHeaders) {
				if (details.responseHeaders.hasOwnProperty(i)) {
					let h = details.responseHeaders[i];
					if (h.name.toLowerCase() === 'content-length') {
						this.latencies[request_id][details.url].contentLength = +h.value || -1;
						break;
					}
				}
			}
			return;
		}

		start_time = this.latencies[request_id][details.url].start_time;
		bug_id = this.latencies[request_id][details.url].bug_id;

		page_url = this.latencies[request_id][details.url].page_url;
		incognito = this.latencies[request_id][details.url].incognito;
		content_length = this.latencies[request_id][details.url].contentLength;

		delete this.latencies[request_id][details.url];
		if (_underscore2.default.isEmpty(this.latencies[request_id])) {
			delete this.latencies[request_id];
		}

		var response_code = details.statusCode || -1,
		    latency = Math.round(details.timeStamp - start_time),
		    rt_duration = Math.round(details.rtDuration || -1),
		    from_cache = details.fromCache ? 1 : 0,
		    user_error = success ? 0 : 1,
		    blocked = details.error === "net::ERR_BLOCKED_BY_CLIENT" || details.redirectUrl && details.redirectUrl.indexOf("http") !== 0,
		    page_timestamp = _TabInfo2.default.getTabInfo(tab_id, 'timestamp'),
		    tracker_timestamp = start_time;

		_FoundBugs2.default.checkLatencyIssue(tab_id, bug_id, latency);

		if (_Conf2.default.ghostrank !== 1) {
			return;
		}

		if (blocked) {
			latency = -1;
			user_error = -1;
			from_cache = -1;
		}

		if (page_url !== undefined && incognito !== undefined) {
			if (!incognito) {
				this.ghostrank.recordStats(page_url, details.url, bug_id, false, latency, rt_duration, response_code, user_error, from_cache, page_timestamp, tracker_timestamp, content_length);
			}
		} else {
			(0, _utils.getTab)(tab_id, tab => {
				if (tab && !tab.incognito) {
					this.ghostrank.recordStats(tab.url, details.url, bug_id, false, latency, rt_duration, response_code, user_error, from_cache, page_timestamp, tracker_timestamp, content_length);
				}
			});
		}
	}
}

exports.default = new Latency();
module.exports = exports['default'];

},{"../utils":32,"./Conf":16,"./FoundBugs":19,"./Ghostrank":20,"./TabInfo":25,"underscore":8}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Click2PlayDb = require('./Click2PlayDb');

var _Click2PlayDb2 = _interopRequireDefault(_Click2PlayDb);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Policy {
	getSitePolicy(url) {
		if (this.blacklisted(url)) {
			return 1;
		}
		if (this.whitelisted(url)) {
			return 2;
		}
		return false;
	}

	whitelisted(url) {
		if (url) {
			var sites = _Conf2.default.site_whitelist || [],
			    num_sites = sites.length;

			for (var i = 0; i < num_sites; i++) {
				if (url.indexOf(sites[i]) >= 0) {
					return sites[i];
				}
			}
		}

		return false;
	}

	blacklisted(url) {
		if (url) {
			var sites = _Conf2.default.site_blacklist || [],
			    num_sites = sites.length;

			for (var i = 0; i < num_sites; i++) {
				if (url.indexOf(sites[i]) >= 0) {
					return sites[i];
				}
			}
		}

		return false;
	}

	shouldBlock(app_id, cat_id, tab_id, tab_host, tab_url) {
		if (_Conf2.default.paused_blocking) {
			return false;
		}

		if (_Conf2.default.selected_app_ids.hasOwnProperty(app_id)) {
			if (_Conf2.default.toggle_individual_trackers && _Conf2.default.site_specific_unblocks.hasOwnProperty(tab_host) && _Conf2.default.site_specific_unblocks[tab_host].indexOf(+app_id) >= 0) {
				if (this.blacklisted(tab_url)) {
					return !_Click2PlayDb2.default.allowedOnce(tab_id, app_id);
				} else {
					return false;
				}
			} else {
				if (this.whitelisted(tab_url)) {
					return false;
				} else {
					return !_Click2PlayDb2.default.allowedOnce(tab_id, app_id);
				}
			}
		} else {
			if (_Conf2.default.toggle_individual_trackers && _Conf2.default.site_specific_blocks.hasOwnProperty(tab_host) && _Conf2.default.site_specific_blocks[tab_host].indexOf(+app_id) >= 0) {
				if (this.whitelisted(tab_url)) {
					return false;
				} else {
					return !_Click2PlayDb2.default.allowedOnce(tab_id, app_id);
				}
			} else {
				if (this.blacklisted(tab_url)) {
					return !_Click2PlayDb2.default.allowedOnce(tab_id, app_id);
				} else {
					return false;
				}
			}
		}
	}
}

exports.default = Policy;
module.exports = exports['default'];

},{"./Click2PlayDb":14,"./Conf":16}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _FoundBugs = require('./FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

var _TabInfo = require('./TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _Policy = require('./Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _common = require('../common');

var _accounts = require('../accounts');

var _utils = require('../utils');

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const t = chrome.i18n.getMessage;

class PurpleBox {

	constructor() {
		this.policy = new _Policy2.default();
	}

	createBox(tab_id) {
		var tab = _TabInfo2.default.getTabInfo(tab_id);

		if (!_Conf2.default.show_alert || _Conf2.default.paused_blocking || _Conf2.default.hide_alert_trusted && !!this.policy.whitelisted(tab.url) || !tab || tab.purplebox || tab.prefetched || _globals2.default.EXCLUDES.indexOf(tab.host) >= 0) {
			return Promise.resolve(false);
		}
		return (0, _utils.injectScript)(tab_id, 'dist/purplebox.js', 'dist/css/purplebox.css', 'document_start').then(() => {
			_TabInfo2.default.setTabInfo(tab_id, 'purplebox', true);

			return (0, _accounts.getLoginInfo)(true).then(result => {
				this._sendMessage(tab_id, 'createBox', {
					conf: {
						alert_expanded: _Conf2.default.alert_expanded,
						alert_bubble_pos: _Conf2.default.alert_bubble_pos,
						alert_bubble_timeout: _Conf2.default.alert_bubble_timeout,
						language: _Conf2.default.language
					},
					translations: {
						looking: t('box_looking'),
						trackers: t('box_trackers'),
						box_warning_compatibility: t('box_warning_compatibility'),
						box_warning_slow: t('box_warning_slow'),
						box_warning_nonsecure: t('box_warning_nonsecure'),
						tracker: t('box_tracker'),
						hide: t('box_hide'),
						settings: t('box_settings'),
						options_expanded: t('box_options_expanded'),
						hide_expanded: t('box_hide_expanded'),
						settings_expanded: t('box_settings_expanded'),
						box_dismiss_0s: t('box_dismiss_0s'),
						box_dismiss_5s: t('box_dismiss_5s'),
						box_dismiss_15s: t('box_dismiss_15s'),
						box_dismiss_30s: t('box_dismiss_30s'),
						box_display_br: t('box_display_br'),
						box_display_tr: t('box_display_tr'),
						box_display_tl: t('box_display_tl'),
						box_display_bl: t('box_display_bl')
					},
					logged_in: result.logged_in,
					is_validated: result.is_validated
				}, response => {
					if (chrome.runtime.lastError) {
						(0, _common.log)("createBox _sendMessage error", chrome.runtime.lastError, tab_id);
						return new Error(chrome.runtime.lastError);
					} else {
						this.updateBox(tab_id);
						return true;
					}
				});
			});
		});
	}

	updateBox(tab_id) {
		var tab = _TabInfo2.default.getTabInfo(tab_id);
		var apps = _FoundBugs2.default.getApps(tab_id, true, tab.url);

		if (!apps || apps.length === 0 || _globals2.default.EXCLUDES.indexOf(tab.host) >= 0) {
			return;
		}

		this._sendMessage(tab_id, 'updateBox', {
			apps: apps
		}, function (response) {
			if (chrome.runtime.lastError) {
				(0, _common.log)("updateBox _sendMessage failed", chrome.runtime.lastError, tab);
			}
		});
	}

	updateLoginInfo(tab_id, msg) {
		var tab = _TabInfo2.default.getTabInfo(tab_id);
		if (!tab || tab.prefetched || _globals2.default.EXCLUDES.indexOf(tab.host) >= 0) {
			return;
		}
		this._sendMessage(tab_id, 'updatePbLoginInfo', {
			logged_in: msg.logged_in,
			is_validated: msg.is_validated
		}, function (response) {
			if (chrome.runtime.lastError) {
				(0, _common.log)("updateLoginInfo _sendMessage error", chrome.runtime.lastError, tab);
			}
		});
	}

	destroyBox(tab_id) {
		var tab = _TabInfo2.default.getTabInfo(tab_id);
		if (!tab || tab.prefetched || _globals2.default.EXCLUDES.indexOf(tab.host) >= 0) {
			return;
		}
		this._sendMessage(tab_id, 'destroyBox', {}, function (response) {
			if (chrome.runtime.lastError) {
				(0, _common.log)("destroyBox _sendMessage error", chrome.runtime.lastError, tab);
			}
		});
	}

	_sendMessage(tab_id, name, message, callback) {
		chrome.tabs.sendMessage(tab_id, {
			name: name,
			message: message
		}, callback);
	}
}

exports.default = PurpleBox;
module.exports = exports['default'];

},{"../accounts":9,"../common":28,"../globals":29,"../utils":32,"./Conf":16,"./FoundBugs":19,"./Policy":22,"./TabInfo":25}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _Updatable = require('./Updatable');

var _Updatable2 = _interopRequireDefault(_Updatable);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SurrogateDb extends _Updatable2.default {

	constructor(type) {
		super(type);
		this.db = {
			pattern_ids: {},
			app_ids: {},
			site_surrogates: {}
		};
	}

	update() {
		return;
	}

	processList(data) {
		(0, _common.log)('processing surrogates...');

		data.mappings.forEach(s => {
			s.code = data.surrogates[s.sid];

			['pattern_id', 'app_id', 'sites', 'match'].forEach(function (prop) {
				if (s.hasOwnProperty(prop) && !_underscore2.default.isArray(s[prop])) {
					s[prop] = [s[prop]];
				}
			});

			if (s.hasOwnProperty('match')) {
				s.match = _underscore2.default.map(s.match, function (match) {
					return new RegExp(match, '');
				});
			}

			if (s.hasOwnProperty('pattern_id') || s.hasOwnProperty('app_id')) {
				if (s.hasOwnProperty("pattern_id")) {
					this._buildDb(s, "pattern_id", "pattern_ids");
				} else if (s.hasOwnProperty("app_id")) {
					this._buildDb(s, "app_id", "app_ids");
				}
			} else {
				if (s.hasOwnProperty("sites")) {
					this._buildDb(s, "sites", "site_surrogates");
				}
			}
		});

		(0, _common.log)('processed surrogates...');

		_Conf2.default.surrogates = data;
	}

	getForTracker(script_src, app_id, pattern_id, host_name) {
		var candidates = [];

		if (this.db.app_ids.hasOwnProperty(app_id)) {
			candidates = candidates.concat(this.db.app_ids[app_id]);
		}

		if (this.db.pattern_ids.hasOwnProperty(pattern_id)) {
			candidates = candidates.concat(this.db.pattern_ids[pattern_id]);
		}

		return _underscore2.default.filter(candidates, function (surrogate) {
			if (surrogate.hasOwnProperty("sites")) {
				if (surrogate.sites.indexOf(host_name) === -1) {
					return false;
				}
			}

			if (surrogate.hasOwnProperty("match")) {
				if (!_underscore2.default.any(surrogate.match, function (match) {
					return script_src.match(match);
				})) {
					return false;
				}
			}

			return true;
		});
	}

	_getForSite(host_name) {
		var surrogates = [];

		if (this.db.site_surrogates.hasOwnProperty(host_name)) {
			surrogates = this.db.site_surrogates[host_name];
		}

		return surrogates;
	}

	_buildDb(surrogate, property, db_name) {
		surrogate[property].forEach(val => {
			if (!this.db[db_name].hasOwnProperty(val)) {
				this.db[db_name][val] = [];
			}
			this.db[db_name][val].push(surrogate);
		});
	}
}

exports.default = new SurrogateDb('surrogates');
module.exports = exports['default'];

},{"../common":28,"./Conf":16,"./Updatable":27,"underscore":8}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = require('../utils');

class TabInfo {

	constructor() {
		this._tabInfo = {};
	}

	create(tab_id, tab_url, timestamp) {
		var info = {
			contentLength: -1,
			needsReload: { changes: {} },
			partialScan: true,
			prefetched: false,
			purplebox: false,
			requests: [],
			timestamp: Number(timestamp ? timestamp : Number(new Date().getTime()))
		};

		if (tab_url) {
			var parsed = (0, _utils.processUrl)(tab_url);
			info.url = tab_url;
			info.protocol = parsed.protocol;
			info.host = parsed.host;
			info.path = parsed.path;
			info.hash = parsed.anchor;
			info.partialScan = false;
		}

		this._tabInfo[tab_id] = info;
	}

	getTabInfo(tab_id, property) {
		if (this._tabInfo.hasOwnProperty(tab_id)) {
			if (property) {
				return this._tabInfo[tab_id][property];
			} else {
				return this._tabInfo[tab_id];
			}
		} else {
			return false;
		}
	}

	setTabInfo(tab_id, property, value) {
		if (this._tabInfo.hasOwnProperty(tab_id)) {
			if (property === 'url') {
				this._updateUrl(tab_id, value);
			} else {
				this._tabInfo[tab_id][property] = value;
			}
		}
	}

	clear(tab_id) {
		delete this._tabInfo[tab_id];
	}

	getNumReqUntilLoad(tab_id, load_timestamp) {
		let reqs = this.getTabInfo(tab_id, 'requests'),
		    reqsBeforeLoad = 0;
		for (let i = 0; i < reqs.length; i++) {
			if (reqs[i] > load_timestamp) {
				break;
			}
			reqsBeforeLoad++;
		}
		return reqsBeforeLoad;
	}

	_updateUrl(tab_id, tab_url) {
		var parsed = (0, _utils.processUrl)(tab_url);
		this._tabInfo[tab_id].url = tab_url;
		this._tabInfo[tab_id].protocol = parsed.protocol;
		this._tabInfo[tab_id].host = parsed.host;
		this._tabInfo[tab_id].path = parsed.path;
		this._tabInfo[tab_id].hash = parsed.anchor;
	}
}

exports.default = new TabInfo();
module.exports = exports['default'];

},{"../utils":32}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _utils = require('../utils');

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GHOSTERY_DOMAIN = _globals2.default.GHOSTERY_DOMAIN;
const TRACKER_MAP_COOKIE = "TMUrlToScan";
const UPDATE_FREQUENCY = 86400000;

class TrackerMap {
	setTrackerMapCookie(pageUrl, extensionVersion, browserVersion) {
		return new Promise(resolve => {
			var url = encodeURI(pageUrl),
			    expiration = 86400,
			    epochExpirationTime = Math.floor(new Date().getTime() / 1000.0) + expiration;

			chrome.cookies.set({
				url: "http://www." + GHOSTERY_DOMAIN + ".com",
				name: TRACKER_MAP_COOKIE,
				domain: GHOSTERY_DOMAIN + ".com",
				path: "/",
				value: url,
				expirationDate: epochExpirationTime
			}, function (cookie) {
				if (chrome.runtime.lastError) {
					(0, _common.log)('setTrackerMapCookie error', chrome.runtime.lastError);
					resolve(false);
				} else {
					resolve(cookie);
				}
			});
		});
	}

	setGlobalSettings(version) {
		var currentTime = Number(new Date().getTime());
		var lastUpdateTime = _Conf2.default.global_settings_updated;

		if (lastUpdateTime && currentTime - lastUpdateTime < UPDATE_FREQUENCY) {
			return false;
		} else {
			this._pullGlobalSettings(version).then(function (response) {
				_Conf2.default.global_settings_updated = Number(new Date().getTime());

				_Conf2.default.global_settings = response;
			}).catch(function (error) {
				(0, _common.log)("Error in updateGlobalSettings", error);
			});
		}
	}

	_pullGlobalSettings(version, setting) {
		if (version) {
			var url = "https://consumerapi." + GHOSTERY_DOMAIN + ".com/api/Settings/" + version + "/";
			if (setting) {
				url += setting + "/";
			}
			return (0, _utils.getJson)(url);
		}
		return Promise.reject(new Error("_pullGlobalSettings error: Version number is required."));
	}
}

exports.default = TrackerMap;
module.exports = exports['default'];

},{"../common":28,"../globals":29,"../utils":32,"./Conf":16}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Conf = require('./Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _utils = require('../utils');

var _common = require('../common');

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CDN_SUB_DOMAIN = _globals2.default.CDN_SUB_DOMAIN;

class Updatable {

	constructor(type) {
		this.type = type;
		this.db = {};
		this.just_upgraded = false;
	}

	init(just_upgraded) {
		this.just_upgraded = just_upgraded;
		return this._localFetcher().then(result => {
			return this.processList(result, true);
		}).catch(error => {
			(0, _common.log)('Updatable init() error', error);
		});
	}

	update(version, callback) {
		var opts = {
			remote: true,
			version: version,
			callback: callback
		};

		if (_underscore2.default.isFunction(version)) {
			opts.callback = version;
			delete opts.version;
		}

		this._loadList(opts);
	}

	_localFetcher() {
		return new Promise((resolve, reject) => {
			var memory = _Conf2.default[this.type],
			    version_property = this.type === 'bugs' || this.type === 'surrogates' ? 'version' : this.type + 'Version';

			if (!memory || !memory.hasOwnProperty(version_property)) {
				(0, _common.log)('fetching ' + this.type + ' from disk');

				(0, _utils.getJson)('databases/' + this.type + '.json').then(data => {
					(0, _common.log)('got data for ' + this.type + ' from disk', data);
					resolve(data);
				}).catch(error => {
					(0, _common.log)("Error fetching databases/" + this.type + ".json", error);
					reject(error);
				});
			} else {
				if (this.just_upgraded) {
					(0, _utils.getJson)('databases/' + this.type + '.json').then(disk => {
						if (disk[version_property] > memory[version_property]) {
							(0, _common.log)('fetching updated' + this.type + ' from disk');
							resolve(disk);
						} else {
							resolve(memory);
						}
					}).catch(error => {
						(0, _common.log)("Error fetching updated databases/" + this.type + ".json", error);
						reject(error);
					});
				} else {
					(0, _common.log)('fetching ' + this.type + ' from memory');
					resolve(memory);
				}
			}
		});
	}

	_remoteFetcher(callback) {
		(0, _common.log)('fetching ' + this.type + ' from remote');
		var UPDATE_URL = 'https://' + CDN_SUB_DOMAIN + '.ghostery.com/update/' + (this.type === 'bugs' ? 'v3/bugs' : this.type);

		(0, _utils.getJson)(UPDATE_URL).then(list => {
			callback(true, list);
		}).catch(error => {
			(0, _common.log)("Updatable _remoteFetcher() error", error);
			callback(false);
		});
	}

	_loadList(options) {
		options = options || {};

		(0, _common.log)("LOCAL VERSION, SERVER VERSION", this.db.version, options.version);

		if (this.db.version && options.version && options.version <= this.db.version) {
			if (options.callback) {
				options.callback({
					'success': true,
					'updated': false
				});
			}
			_Conf2.default[this.type + '_last_updated'] = new Date().getTime();

			return;
		}

		this._remoteFetcher(_underscore2.default.bind(function (result, list) {
			if (result && list) {
				var data = this.processList(list);
				if (data) {
					_Conf2.default[this.type + '_last_updated'] = new Date().getTime();
					if (options.callback) {
						options.callback({ 'success': true, 'updated': true });
					}
				} else {
					(0, _common.log)('Updatable _loadList() error calling processList()');
					if (options.callback) {
						options.callback({ 'success': false, 'updated': false });
					}
				}
			} else {
				if (options.callback) {
					options.callback({ 'success': false, 'updated': false });
				}
			}
		}, this));
	}
}

exports.default = Updatable;
module.exports = exports['default'];

},{"../common":28,"../globals":29,"../utils":32,"./Conf":16,"underscore":8}],28:[function(require,module,exports){
(function (Buffer){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.log = log;
exports.pref = pref;
exports.prefsGet = prefsGet;
exports.prefsSet = prefsSet;
exports.browserInfo = browserInfo;
exports.hashCode = hashCode;
exports.decodeJwt = decodeJwt;

var _uaParserJs = require('ua-parser-js');

var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEBUG = chrome.runtime.getManifest().debug;

function log(...args) {
	if (!DEBUG) {
		return false;
	}

	var errors = args.toString().toLowerCase().indexOf('error');

	args.unshift(new Date().toLocaleTimeString() + '\t');

	if (errors !== -1) {
		console.error.apply(console, args);
	} else {
		console.log.apply(console, args);
	}
}

function pref(key, value) {
	if (typeof value === 'undefined') {
		return prefsGet(key);
	} else {
		let valueObj = {};
		valueObj[key] = value;
		return prefsSet(valueObj);
	}
}

function prefsGet(...args) {
	return new Promise(function (resolve, reject) {
		chrome.storage.local.get(args, function (items) {
			if (chrome.runtime.lastError) {
				log("prefsGet ERROR", chrome.runtime.lastError);
				reject(new Error(chrome.runtime.lastError));
			} else {
				var result = null;
				if (args.length === 1) {
					var key = args[0];
					if (items && items.hasOwnProperty(key)) {
						result = items[key];
					}
				} else {
					result = {};
					args.forEach(function (key) {
						result[key] = null;
						if (items && items.hasOwnProperty(key)) {
							result[key] = items[key];
						}
					});
				}
				resolve(result);
			}
		});
	});
}

function prefsSet(prefs) {
	return new Promise(function (resolve, reject) {
		if (typeof prefs !== 'undefined') {
			chrome.storage.local.set(prefs, function () {
				if (chrome.runtime.lastError) {
					log("prefsSet ERROR", chrome.runtime.lastError);
					reject(new Error(chrome.runtime.lastError));
				} else {
					resolve(prefs);
				}
			});
		} else {
			log("prefsSet ERROR", chrome.runtime.lastError);
			reject(new Error(chrome.runtime.lastError));
		}
	});
}

function browserInfo() {
	var ua = (0, _uaParserJs2.default)(navigator.userAgent),
	    browser = ua.browser.name.toLowerCase(),
	    version = ua.browser.version,
	    platform = ua.os.name.toLowerCase(),
	    returnObj = {};

	if (browser.includes('edge')) {
		returnObj = { displayName: 'Edge', name: 'edge', token: 'ed', version: version };
	} else if (browser.includes('opera')) {
		returnObj = { displayName: 'Opera', name: 'opera', token: 'op', version: version };
	} else if (browser.includes('chrome')) {
		returnObj = { displayName: 'Chrome', name: 'chrome', token: 'ch', version: version };
	} else if (browser.includes('firefox')) {
		returnObj = { displayName: 'Firefox', name: 'firefox', token: 'ff', version: version };
	} else {
		returnObj = { displayName: '', name: '', token: '', version: '' };
	}

	if (platform.includes('mac')) {
		returnObj.os = 'mac';
	} else if (platform.includes('win')) {
		returnObj.os = 'win';
	} else if (platform.includes('linux')) {
		returnObj.os = 'linux';
	} else if (platform.includes('android')) {
		returnObj.os = 'android';
	} else {
		returnObj.os = 'other';
	}

	return returnObj;
}

function hashCode(str) {
	var hash = 0,
	    character,
	    i;

	if (str.length === 0) {
		return hash;
	}

	for (i = 0; i < str.length; i++) {
		character = str.charCodeAt(i);
		hash = (hash << 5) - hash + character;
		hash = hash & hash;
	}

	return hash;
}

function decodeJwt(token) {
	var segments = token.split('.');

	if (segments.length !== 3) {
		return null;
	}

	var headerSeg = segments[0];
	var payloadSeg = segments[1];
	var signatureSeg = segments[2];

	var header = JSON.parse(_base64urlDecode(headerSeg));
	var payload = JSON.parse(_base64urlDecode(payloadSeg));

	return {
		header: header,
		payload: payload,
		signature: signatureSeg
	};
}

function _base64urlDecode(str) {
	return new Buffer(_base64urlUnescape(str), 'base64').toString();
}

function _base64urlUnescape(str) {
	str += new Array(5 - str.length % 4).join('=');
	return str.replace(/\-/g, '+').replace(/_/g, '/');
}

}).call(this,require("buffer").Buffer)

},{"buffer":3,"ua-parser-js":7}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

const DEBUG = chrome.runtime.getManifest().debug || false;
const EXTENSION_VERSION = chrome.runtime.getManifest().version;

exports.default = {
	DEBUG: DEBUG,
	EXTENSION_VERSION: EXTENSION_VERSION,
	GHOSTERY_DOMAIN: DEBUG ? 'ghosterystage' : 'ghostery',
	METRICS_SUB_DOMAIN: DEBUG ? 'staging-d' : 'd',
	CMP_SUB_DOMAIN: DEBUG ? 'staging-cmp-cdn' : 'cmp-cdn',
	CDN_SUB_DOMAIN: DEBUG ? 'staging-cdn' : 'cdn',
	EXCLUDES: ["extension.ghostery.com", "extension.ghosterystage.com", "extension.ghosterydev.com", "signon.ghostery.com", "signon.ghosterystage.com", "account.ghostery.com", "account.ghosterystage.com"],

	SYNC_ARRAY: ['enable_autoupdate', 'show_tracker_urls', 'enable_click2play', 'enable_click2play_social', 'toggle_individual_trackers', 'ignore_first_party', 'block_by_default', 'show_alert', 'alert_expanded', 'alert_bubble_timeout', 'alert_bubble_pos', 'hide_alert_trusted', 'show_cmp', 'notify_upgrade_updates', 'notify_hotfix_updates', 'notify_library_updates', 'reload_banner_status', 'trackers_banner_status', 'show_badge', 'ghostrank', 'enable_metrics', 'account_dismissed', 'tour_alert_dismissed', 'import_callout_dismissed', 'install_random_number', 'site_whitelist', 'site_blacklist', 'selected_app_ids', 'site_specific_blocks', 'site_specific_unblocks'],

	METRICS_ARRAY: []
};
module.exports = exports['default'];

},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isBug = isBug;
exports.fuzzyUrlMatcher = fuzzyUrlMatcher;

var _BugDb = require('./classes/BugDb');

var _BugDb2 = _interopRequireDefault(_BugDb);

var _utils = require('./utils');

var _Conf = require('./classes/Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _common = require('./common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBug(src, tab_url) {
	var db = _BugDb2.default.db,
	    found = false;

	src = (0, _utils.processUrl)(src);

	found = _matchesHost(db.patterns.host_path, src.host, src.path) || _matchesHost(db.patterns.host, src.host) || _matchesPath(src.path) || _matchesRegex(src.host_with_path);

	if (typeof tab_url !== 'undefined') {
		if (_Conf2.default.ignore_first_party && found !== false && db.firstPartyExceptions[found] && fuzzyUrlMatcher(tab_url, db.firstPartyExceptions[found])) {
			return false;
		}
	}

	return found;
}

function fuzzyUrlMatcher(url, urls) {
	var parsed = (0, _utils.processUrl)(url),
	    tab_host = parsed.host,
	    tab_path = parsed.path;

	if (tab_host.indexOf('www.') === 0) {
		tab_host = tab_host.slice(4);
	}

	for (var i = 0; i < urls.length; i++) {
		parsed = (0, _utils.processUrl)(urls[i]);
		var host = parsed.host,
		    path = parsed.path;

		if (host !== tab_host) {
			continue;
		}

		if (!path) {
			(0, _common.log)('[fuzzyUrlMatcher] host (' + host + ') match');
			return true;
		}

		if (path.slice(-1) === '*') {
			if (tab_path.indexOf(path.slice(0, -1)) === 0) {
				(0, _common.log)('[fuzzyUrlMatcher] host (' + host + ') and path (' + path + ') fuzzy match');
				return true;
			}
		} else {
			if (path === tab_path) {
				(0, _common.log)('[fuzzyUrlMatcher] host (' + host + ') and path (' + path + ') match');
				return true;
			}
		}
	}
}

function _matchesHostPath(roots, src_path) {
	var root, paths, i, j;

	for (i = 0; i < roots.length; i++) {
		root = roots[i];
		if (!root.hasOwnProperty('$')) {
			continue;
		}

		paths = root.$;
		for (j = 0; j < paths.length; j++) {
			if (src_path.indexOf(paths[j].path) === 0) {
				return paths[j].id;
			}
		}
	}

	return false;
}

function _matchesHost(root, src_host, src_path) {
	var host_rev_arr = src_host.split('.').reverse(),
	    host_part,
	    node = root,
	    bug_id = false,
	    nodes_with_paths = [],
	    i;

	for (i = 0; i < host_rev_arr.length; i++) {
		host_part = host_rev_arr[i];

		if (node.hasOwnProperty(host_part)) {
			node = node[host_part];
			bug_id = node.hasOwnProperty('$') ? node.$ : bug_id;

			if (src_path !== undefined && node.hasOwnProperty('$')) {
				nodes_with_paths.push(node);
			}
		} else {
				if (src_path !== undefined) {
					return _matchesHostPath(nodes_with_paths, src_path);
				}

				return bug_id;
			}
	}

	if (src_path !== undefined) {
		return _matchesHostPath(nodes_with_paths, src_path);
	}

	return bug_id;
}

function _matchesRegex(src) {
	var regexes = _BugDb2.default.db.patterns.regex;

	for (var bug_id in regexes) {
		if (regexes[bug_id].test(src)) {
			return +bug_id;
		}
	}

	return false;
}

function _matchesPath(src_path) {
	var paths = _BugDb2.default.db.patterns.path;

	src_path = '/' + src_path;

	for (var path in paths) {
		if (src_path.indexOf(path) >= 0) {
			return paths[path];
		}
	}

	return false;
}

},{"./classes/BugDb":11,"./classes/Conf":16,"./common":28,"./utils":32}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ping = ping;
exports.buildMetricsUrl = buildMetricsUrl;
exports.setUninstallUrl = setUninstallUrl;

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _Conf = require('./classes/Conf');

var _Conf2 = _interopRequireDefault(_Conf);

var _common = require('./common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FREQUENCIES = {
	daily: 86400000,
	weekly: 604800000,
	biweekly: 1209600000,
	monthly: 2419200000
},
      METRICS_SUB_DOMAIN = _globals2.default.METRICS_SUB_DOMAIN,
      EXTENSION_VERSION = _globals2.default.EXTENSION_VERSION,
      CRITICAL_METRICS = ['install_success', 'install', 'upgrade', 'active', 'engaged', 'uninstall'],
      BROWSER_INFO = (0, _common.browserInfo)();

function ping(type) {
	switch (type) {
		case 'install_success':
			_sendReq('install_success');
			break;
		case 'install':
			_recordInstall();
			break;
		case 'upgrade':
			_recordUpgrade();
			break;
		case 'active':
			_recordActive();
			break;
		case 'engaged':
			_sendReq('engaged', ['daily', 'weekly', 'monthly']);
			break;

		case 'pause':
			_sendReq('pause', ['all', 'daily', 'weekly']);
			break;
		case 'resume':
			_sendReq('resume', ['all', 'daily', 'weekly']);
			break;
		case 'create_start':
			_sendReq('create_start', ['all', 'daily', 'weekly']);
			break;
		case 'create_finish':
			_sendReq('create_finish', ['all', 'daily', 'weekly']);
			break;
		case 'trust_site':
			_sendReq('trust_site', ['all', 'daily', 'weekly']);
			break;
		case 'restrict_site':
			_sendReq('restrict_site', ['all', 'daily', 'weekly']);
			break;
		case 'live_scan':
			_sendReq('live_scan', ['all', 'daily', 'weekly']);
			break;
		case 'sign_in':
			_sendReq('sign_in', ['all', 'daily', 'weekly']);
			break;
		case 'sign_in_alert':
			_sendReq('sign_in_alert', ['all', 'daily', 'weekly']);
			break;
		case 'sign_in_scan':
			_sendReq('sign_in_scan', ['all', 'daily', 'weekly']);
			break;
		case 'local_settings':
			_sendReq('local_settings', ['all', 'daily', 'weekly']);
			break;
		case 'sign_in_urls':
			_sendReq('sign_in_urls', ['all', 'daily', 'weekly']);
			break;

		case 'opt_in_ext':
			_sendReq('opt_in_ext');
			break;
		case 'opt_out_ext':
			_sendReq('opt_out_ext');
			break;
		case 'tour_start':
			_sendReq('tour_start');
			break;
		case 'account_start':
			_sendReq('account_start');
			break;
		case 'create_modal':
			_sendReq('create_modal');
			break;
		case 'create_upgrade':
			_sendReq('create_upgrade');
			break;

		case 'advertising_blocked':
			_sendReq('advertising_blocked');
			break;
		case 'site_analytics_blocked':
			_sendReq('analytics_blocked');
			break;
		case 'customer_interaction_blocked':
			_sendReq('ci_blocked');
			break;
		case 'social_media_blocked':
			_sendReq('social_blocked');
			break;
		case 'essential_blocked':
			_sendReq('essential_blocked');
			break;
		case 'audio_video_player_blocked':
			_sendReq('audio_video_blocked');
			break;
		case 'pornvertising_blocked':
			_sendReq('adult_blocked');
			break;
		case 'comments_blocked':
			_sendReq('comments_blocked');
			break;
		default:
			(0, _common.log)('metrics ping() error: ping name ' + type + ' not found');
			break;
	}
}

function buildMetricsUrl(type, frequency) {
	let frequencyString = type !== 'uninstall' ? '/' + frequency : '';

	return 'https://' + METRICS_SUB_DOMAIN + '.ghostery.com/' + type + frequencyString + '?gr=' + _Conf2.default.ghostrank + '&v=' + encodeURIComponent(EXTENSION_VERSION) + '&install_rand=' + encodeURIComponent(_Conf2.default.install_random_number) + '&signed_in=' + (_Conf2.default.login_info.logged_in ? '1' : '0') + '&install_date=' + encodeURIComponent(_Conf2.default.install_date) + '&noncritical=' + (_Conf2.default.enable_metrics ? '1' : '0') + '&purplebox=' + (_Conf2.default.show_alert ? _Conf2.default.alert_expanded ? '1' : '2' : '0') + '&show_cmp=' + (_Conf2.default.show_cmp ? '1' : '0') + '&ua=' + encodeURIComponent(BROWSER_INFO.token) + '&os=' + encodeURIComponent(BROWSER_INFO.os) + '&l=' + encodeURIComponent(_Conf2.default.language);
}

const METRICS_URL_SET = new Set(['ghostrank', 'login_info', 'enable_metrics', 'show_alert', 'alert_expanded', 'show_cmp']);
function setUninstallUrl(key) {
	if (typeof chrome.runtime.setUninstallURL === 'function') {
		if (!key || METRICS_URL_SET.has(key)) {
			var metrics_url = buildMetricsUrl('uninstall');
			if (metrics_url.length) {
				chrome.runtime.setUninstallURL(metrics_url);
			}
		}
	}
}

function _sendReq(type, frequencies) {
	if (typeof frequencies === 'undefined') {
		frequencies = ['all'];
	}

	frequencies.forEach(frequency => {
		if (_checkPing(type, frequency)) {
			let timeNow = Number(new Date().getTime()),
			    metrics_url = buildMetricsUrl(type, frequency);

			_Conf2.default.metrics[type + '_' + frequency] = timeNow;

			(0, _common.log)(`sending ${ type } ping with ${ frequency } frequency`);

			var xhr = new XMLHttpRequest();
			xhr.open("GET", metrics_url, true);
			xhr.setRequestHeader("Content-Type", "image/gif");
			xhr.send();
		}
	});
}

function _timeToExpired(type, frequency) {
	if (frequency === 'all') {
		return 0;
	} else {
		var result = _Conf2.default.metrics[type + '_' + frequency];
		var last = result === undefined ? 0 : result,
		    now = Number(new Date().getTime()),
		    frequency_ago = now - FREQUENCIES[frequency];
		return last === null ? 0 : last - frequency_ago;
	}
}

function _checkPing(type, frequency) {
	var result = _timeToExpired(type, frequency);
	if (result > 0) {
		return false;
	}
	if (CRITICAL_METRICS.indexOf(type) < 0 && !_Conf2.default.enable_metrics) {
		return false;
	}
	return true;
}

function _recordInstall() {
	if (_Conf2.default.metrics.install_all) {
		return;
	}
	_sendReq('install');
}

function _recordUpgrade() {
	_Conf2.default.metrics.install_all = Number(new Date().getTime());
	_sendReq('upgrade');
}

function _recordActive() {
	var daily = _timeToExpired('active', 'daily');
	if (daily > 0) {
		setTimeout(function () {
			_sendReq('active', ['daily']);
			setInterval(function () {
				_sendReq('active', ['daily']);
			}, FREQUENCIES.daily);
		}, daily);
	} else {
		_sendReq('active', ['daily']);
		setInterval(function () {
			_sendReq('active', ['daily']);
		}, FREQUENCIES.daily);
	}

	var weekly = _timeToExpired('active', 'weekly');
	if (weekly > 0) {
		setTimeout(function () {
			_sendReq('active', ['weekly']);
			setInterval(function () {
				_sendReq('active', ['weekly']);
			}, FREQUENCIES.weekly);
		}, weekly);
	} else {
		_sendReq('active', ['weekly']);
		setInterval(function () {
			_sendReq('active', ['weekly']);
		}, FREQUENCIES.weekly);
	}

	var monthly = _timeToExpired('active', 'monthly');
	if (monthly > 0) {
		if (monthly <= FREQUENCIES.biweekly) {
			setTimeout(() => {
				_sendReq('active', ['monthly']);
				_repeat();
			}, monthly);
		} else {
			setTimeout(() => {
				setTimeout(() => {
					_sendReq('active', ['monthly']);
					_repeat();
				}, monthly - FREQUENCIES.biweekly);
			}, FREQUENCIES.biweekly);
		}
	} else {
		_sendReq('active', ['monthly']);
		_repeat();
	}
}

function _repeat() {
	var flag = false;
	setInterval(() => {
		if (flag) {
			_sendReq('active', ['monthly']);
		}
		flag = !flag;
	}, FREQUENCIES.biweekly);
}

},{"./classes/Conf":16,"./common":28,"./globals":29}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.flushChromeMemoryCache = undefined;
exports.sendMessage = sendMessage;
exports.sendMessageToFrame = sendMessageToFrame;
exports.broadcastMessage = broadcastMessage;
exports.sendMessageToPanel = sendMessageToPanel;
exports.isValidTopLevelNavigation = isValidTopLevelNavigation;
exports.defineLazyProperty = defineLazyProperty;
exports.deepClone = deepClone;
exports.processUrl = processUrl;
exports.getTab = getTab;
exports.getActiveTab = getActiveTab;
exports.clearTabData = clearTabData;
exports.postJson = postJson;
exports.getJson = getJson;
exports.fetchResource = fetchResource;
exports.injectScript = injectScript;

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _FoundBugs = require('./classes/FoundBugs');

var _FoundBugs2 = _interopRequireDefault(_FoundBugs);

var _TabInfo = require('./classes/TabInfo');

var _TabInfo2 = _interopRequireDefault(_TabInfo);

var _common = require('./common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendMessage(tab_id, name, message, callback) {
	(0, _common.log)("BACKGROUND SENT " + name + " TO TAB");
	var fallback = function () {};
	callback = callback ? callback : fallback;
	chrome.tabs.sendMessage(tab_id, {
		name: name,
		message: message
	}, callback);
}

function sendMessageToFrame(tab_id, frame_id, name, message, callback) {
	(0, _common.log)("BACKGROUND SENT " + name + " TO TAB " + tab_id + " - FRAME " + frame_id);
	var fallback = function () {};
	callback = callback ? callback : fallback;
	chrome.tabs.sendMessage(tab_id, {
		name: name,
		message: message
	}, {
		frameId: frame_id
	}, callback);
}

function broadcastMessage(name, message, ignoreSelf = false) {
	(0, _common.log)("IN BROADCAST MESSAGE", name, message, ignoreSelf);
	if (ignoreSelf) {
		getActiveTab(activeTab => {
			if (activeTab && activeTab.id > 0) {
				(0, _common.log)("BACKGROUND SENT " + name + " TO ALL TABS OTHER THAN ACTIVE");
				chrome.tabs.query({}, tabs => {
					tabs.forEach(tab => {
						if (tab && tab.id && tab.id !== activeTab.id) {
							sendMessage(tab.id, name, message);
						}
					});
				});
			} else {
				(0, _common.log)("NO ACTIVE TAB. BACKGROUND SENT " + name + " TO ALL OTHER TABS");
				chrome.tabs.query({}, tabs => {
					tabs.forEach(tab => {
						if (tab && tab.id) {
							sendMessage(tab.id, name, message);
						}
					});
				});
			}
		});
	} else {
		(0, _common.log)("BACKGROUND SENT " + name + " TO ALL TABS");
		chrome.tabs.query({}, tabs => {
			tabs.forEach(tab => {
				if (tab && tab.id) {
					sendMessage(tab.id, name, message);
				}
			});
		});
	}
}

function sendMessageToPanel(name, message) {
	(0, _common.log)("BACKGROUND SENDS MESSAGE TO PANEL", name);
	if (chrome.runtime && chrome.runtime.sendMessage) {
		chrome.runtime.sendMessage({
			name: name,
			message: message
		}, function (response) {
			if (chrome.runtime.lastError) {
				(0, _common.log)('sendMessageToPanel error', chrome.runtime.lastError);
			}
			return response;
		});
	}
}

function isValidTopLevelNavigation(details) {
	var url = details.url;

	return details.frameId === 0 && details.tabId > 0 && url.indexOf('http') === 0 && url.indexOf('https://chrome.google.com/webstore/') !== 0;
}

var flushChromeMemoryCache = exports.flushChromeMemoryCache = _underscore2.default.debounce(function () {
	chrome.webRequest.handlerBehaviorChanged();
}, 1000 * 35, true);

function defineLazyProperty(obj, prop, callback) {
	var value,
	    isSet = false;

	Object.defineProperty(obj, prop, {
		get: function () {
			if (!isSet) {
				value = callback();
				isSet = true;
			}

			return value;
		},

		set: function (val) {
			value = val;
			isSet = true;
		}
	});
}

function deepClone(value) {
	if (_underscore2.default.isObject(value)) {
		if (_underscore2.default.isArray(value)) {
			return _extend(true, [], value);
		} else {
			return _extend(true, {}, value);
		}
	} else {
		return value;
	}
}

function processUrl(src) {
	var index,
	    anchor,
	    src_host,
	    src_path,
	    src_cleaned,
	    src_protocol = '';

	index = src.indexOf('#');
	if (index >= 0) {
		anchor = src.slice(index + 1);
		src = src.slice(0, index);
	}

	index = src.indexOf('?');
	if (index >= 0) {
		src = src.slice(0, index);
	}

	src_cleaned = src;

	index = src.indexOf('http://');
	if (index === 0) {
		src_protocol = src.substr(0, 4);
		src = src.slice(7);
	} else {
		index = src.indexOf('https://');
		if (index === 0) {
			src_protocol = src.substr(0, 5);
			src = src.slice(8);
		} else {
			index = src.indexOf('//');
			if (index === 0) {
				src = src.slice(2);
			}
		}
	}

	src = src.toLowerCase();

	index = src.indexOf('/');

	var r = src.indexOf("@");

	if (r >= 0 && (index === -1 || r < index)) {
		src = src.slice(r + 1);

		index = src.indexOf('/');
	}

	src_host = index >= 0 ? src.substr(0, index) : src;

	src_path = index >= 0 ? src.substr(index + 1) : '';

	index = src_host.indexOf(':');
	if (index >= 0) {
		src_host = src_host.substr(0, index);
	}

	return {
		protocol: src_protocol,
		host: src_host,
		path: src_path,
		host_with_path: src,
		anchor: anchor,

		host_with_path_cleaned: src_cleaned
	};
}

function getTab(tab_id, callback, error) {
	chrome.tabs.get(tab_id, function (tab) {
		if (chrome.runtime.lastError) {
			(0, _common.log)("getTab", chrome.runtime.lastError.message);
			if (error && typeof error === 'function') {
				error(chrome.runtime.lastError);
			}
		} else {
			if (tab && typeof callback === 'function') {
				callback(tab);
			}
		}
	});
}

function getActiveTab(callback) {
	chrome.tabs.query({
		active: true,
		currentWindow: true }, function (tabs) {
		callback(tabs[0]);
	});
}

function clearTabData(tab_id) {
	_FoundBugs2.default.clear(tab_id);
	_TabInfo2.default.clear(tab_id);
}

function postJson(url, query, extraHeaders) {
	return _fetchJson('POST', url, query, extraHeaders).catch(function (error) {
		(0, _common.log)('postJson error', error);
		return Promise.reject(error);
	});
}

function getJson(url, extraHeaders) {
	return _fetchJson('GET', url, null, extraHeaders).catch(function (error) {
		(0, _common.log)('getJson error', error);
		return Promise.reject(error);
	});
}

function fetchResource(url) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 400) {
				resolve(xhr.responseText);
			} else {
				(0, _common.log)("fetchResource error", xhr.statusText);
				reject(new Error(xhr.statusText));
			}
		};

		xhr.onerror = function (error) {
			(0, _common.log)('fetchResource network error', error);
			reject(new Error(error));
		};

		(0, _common.log)("fetchResource request", url);
		xhr.open('GET', url, true);
		xhr.send();
	});
}

function injectScript(tabId, scriptfile, cssfile, runAt) {
	return new Promise((resolve, reject) => {
		chrome.tabs.executeScript(tabId, { file: scriptfile, runAt: runAt }, result => {
			if (cssfile) {
				chrome.tabs.insertCSS(tabId, { file: cssfile, runAt: runAt }, result => {
					resolve(result);
				});
			} else {
				resolve(result);
			}
		});
	});
}

function _fetchJson(method, url, query, extraHeaders) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();

		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 400) {
				if (xhr.status === 204) {
					resolve(false);
				} else if (xhr.responseText.indexOf('{') === -1) {
						resolve(xhr.responseText);
					} else {
						try {
							(0, _common.log)("_fetchJson resolved", xhr.responseText ? JSON.parse(xhr.responseText) : {});

							resolve(xhr.responseText ? JSON.parse(xhr.responseText) : {});
						} catch (err) {
							(0, _common.log)('_fetchJson error', err);
							reject(new Error(err));
						}
					}
			} else {
				(0, _common.log)("_fetchJson error", xhr.statusText);
				reject(new Error(xhr.statusText));
			}
		};

		xhr.onerror = function (error) {
			(0, _common.log)('_fetchJson network error', error);
			reject(new Error(error));
		};

		(0, _common.log)("_fetchJson request", method, url, query, extraHeaders);
		xhr.open(method, url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Accept", "application/json");
		if (extraHeaders) {
			Object.keys(extraHeaders).forEach(key => {
				xhr.setRequestHeader(key, extraHeaders[key]);
			});
		}
		xhr.send(query);
	});
}

function _extend() {
	var options,
	    name,
	    src,
	    copy,
	    clone,
	    target = arguments[0] || {},
	    i = 1,
	    length = arguments.length,
	    deep = false;

	if (typeof target === "boolean") {
		deep = target;

		target = arguments[i] || {};
		i++;
	}

	if (typeof target !== "object" && !_underscore2.default.isFunction(target)) {
		target = {};
	}
	for (; i < length; i++) {
		if ((options = arguments[i]) !== null) {
			for (name in options) {
				if (options.hasOwnProperty(name)) {
					src = target[name];
					copy = options[name];

					if (target === copy) {
						continue;
					}

					if (deep && copy && _underscore2.default.isObject(copy)) {
						if (_underscore2.default.isArray(copy)) {
							clone = src && _underscore2.default.isArray(src) ? src : [];
						} else {
							clone = src && _underscore2.default.isObject(src) ? src : {};
						}

						target[name] = _extend(deep, clone, copy);
					} else if (copy !== undefined) {
							target[name] = copy;
						}
				}
			}
		}
	}

	return target;
}

},{"./classes/FoundBugs":19,"./classes/TabInfo":25,"./common":28,"underscore":8}]},{},[10])


//# sourceMappingURL=background.js.map
