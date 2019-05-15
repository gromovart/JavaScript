/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
  var newTime = new Date(date)
  return {
    value: date,
    add: function(num, unit) {
      if (num >=0 && unit == 'hours') {
        newTime.setUTCHours(newTime.getUTCHours() + num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else if (num >=0 && unit == 'months') {
        newTime.setUTCMonth(newTime.getUTCMonth() + num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else if (num >=0 && unit == 'days') {
        newTime.setUTCDate(newTime.getUTCDate() + num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else if (num >=0 && unit == 'minutes') {
        newTime.setUTCMinutes(newTime.getUTCMinutes() + num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else if (num >=0 && unit == 'years') {
        newTime.setUTCFullYear(newTime.getUTCFullYear() + num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else {
        throw new TypeError();
      }
    },
    subtract: function(num, unit) {
      if (num >=0 && unit == 'hours') {
        newTime.setUTCHours(newTime.getUTCHours() - num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else if (num >=0 && unit == 'months') {
        newTime.setUTCMonth(newTime.getUTCMonth() - num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else if (num >=0 && unit == 'days') {
        newTime.setUTCDate(newTime.getUTCDate() - num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else if (num >=0 && unit == 'minutes') {
        newTime.setUTCMinutes(newTime.getUTCMinutes() - num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else if (num >=0 && unit == 'years') {
        newTime.setUTCFullYear(newTime.getUTCFullYear() - num);
        this.value = newTime.toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        return this;
      } else {
        throw new TypeError();
      }
    }
  }  
};

