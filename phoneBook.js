// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
  var commandName = command.split(' ')[0];
  // Обработка команд
  if (commandName == 'ADD') {
    return myAdd(command);
  } else if (commandName == 'REMOVE_PHONE') {
      return myRemove_Phone(command);
  } else if (commandName == 'SHOW') {
      return myShow();
  };

  // Добавление
	function myAdd(command) {
	var arryPhone = command.split(" ")[2].split(",");
	//Проверяем наличие имени в phoneBook;
	var myName = command.split(" ")[1];
	if (!phoneBook.hasOwnProperty(myName)) {
	  phoneBook[myName] = arryPhone;
	} else {
	    phoneBook[myName] = phoneBook[myName].concat(arryPhone);
	}
	};

  // Удаление
	function myRemove_Phone(command) {
	var phone = command.split(" ")[1];
	for (var key in phoneBook) {
	  var myIndex = phoneBook[key].indexOf(phone);
	  if (myIndex !== -1) {
	    phoneBook[key].splice(myIndex, 1);
	    if (phoneBook[key].length == 0) {
	      delete phoneBook[key];
	    }
	    return true;
	  }
	}
	return false;
	};

  // Просмотр
	function myShow() {
	var result = []
	for (var key in phoneBook) {
		if (phoneBook[key].length !== 0){
		  result.push(key + ': ' + phoneBook[key].join(", "));
		}  
	}
	result = result.sort();
	return result;
	};
};
