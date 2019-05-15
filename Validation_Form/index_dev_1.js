/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {  
  var result;
  var errors = null
  var arr = [];
  var counter = -1;
  function inc(){
    return counter++ ;
  }
  var operLength = operations.length; 

  var myNext = function (err, res) {
    if (err == errors) {
      arr.push(res)
      return myRecurs()
    } else {
      errors = err
      result = null
      callback(errors, result)
    }    
  }
  var myRecurs = function() {
    inc()
    if ((operLength - counter) > 0) {
      operations[counter](myNext)
    }
    if (arr.length == operations.length) {
      result = arr
      callback(errors, result)
    }
  }
  myRecurs()
};

    










