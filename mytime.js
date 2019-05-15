/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
var h;
var m;
var result;
var d;
module.exports = function (hours, minutes, interval) {
  new_interval = hours * 60 + minutes;
  interval = interval + new_interval;
  myDays(interval);
  myTimeFormat(h,m);
  return result;
};

function myTimeFormat(h,m) {
  if (h >= 10 && h <= 23 && m >= 10 && m <= 59) {
    result = h + ":" + m;
  } else if (h <= 9 && h >= 0 && m >= 10 && m <= 59) {
      result = "0" + h + ":" + m;
  } else if (h <= 9 && h >= 0 && m <= 9) {
      result = "0" + h + ":" + "0" + m;
  } else if (h >= 10 && h <= 23 && m <= 9) {
  	  result = h + ":" + "0" + m;
  } else if (h <= 10 && h >= 0 && m <= 10 && m >= 0) {
  	  result = h + ":" + "0" + m;
  }
};

function myDays(interval) {
  h = 0;
  m = 0;
  if (interval <= 1439 && interval >= 60) {
    h += Math.floor(interval/60);
    m += interval % 60;

  } else if (interval >= 1440) {
      d = d + Math.floor(interval/1440);
      h = h + Math.floor((interval % 1440)/60);
      m = m + (interval % 1440) % 60;

  } else {
      m += interval;
  }
};