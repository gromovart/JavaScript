/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
  // создадим полную копию коллекции
  var myCollection = myCopyCol(collection);
  var commands = [].slice.call(arguments).slice(1); /** Список команд;*/

  /** Если список команд пуст возвращаем коллекцию */
  if (commands.length == 0 && collection instanceof Array) {
    return collection;
  }

  if( commands.length !== 0 && collection instanceof Array) {

    var comFilterIn = []; // массив операций фильтрации comFilterIn
    var comSelect = []; // массив операций селекции comSelect

    for(var i = 0; i < commands.length; i++){
      // в соответствие с типом операции записываем её
      // в сообветствующий массив фильтрации или селекции
      if(commands[i][0] === 'select') {comSelect.push(commands[i]);}
      if(commands[i][0] === 'filter') {comFilterIn.push(commands[i]);}

    }

    if (comSelect.length == 0) {

      var filteredCollection = myCollection; 
      // фильтруем последовательно по каждому фильтру
      comFilterIn.forEach(function(currentFilter){  
        filteredCollection = myFilter(filteredCollection, currentFilter);
      });

      return filteredCollection;
    }

      var filteredCollection = myCollection; 
      // фильтруем последовательно по каждому фильтру
      comFilterIn.forEach(function(currentFilter){  
        filteredCollection = myFilter(filteredCollection, currentFilter);
      });

    var selector = ['select', selectSet(comSelect)];

    var selectedCollection = [];
    filteredCollection.forEach(function(element) {
      var tmpElement = {};
      // для каждого селектора ...
      selector[1].forEach(function(prop) {
        // скопируем требуемые значения селекторов в новый объект
        if(Object.keys(element).includes(prop)) {
          tmpElement[prop] = element[prop];
        }

      });
      selectedCollection.push(tmpElement);      
    });

    // фильтрация и селекция закончены
    return selectedCollection;
  }
}

function myCopyCol(myCollection) {
  var result = [].slice.call(arguments)[0]
  return result;
}


function myFilter(collection, filter) {

  var myCollectionA = myCopyCol(collection);
  var myfilterProp = filter[1]; // свойство по которому фильтрация будет
  var filterValue = filter[2]; // значения свойства фильтрации (удовлетворяющие)
  var result = [];

  myCollectionA.forEach(function(item){

    if(  filterValue.includes(item[myfilterProp]) ){    

      result.push(item);
    }
  });

  return result;
}

function selectSet(arrSelect) {
  var result = [];
  var mainValue = [] // Масиив основных свойств. Например gender.
  arrSelect.forEach(function(item){
    mainValue = mainValue.concat(item[1])
  })
  var traversals = mainValue.filter(function(a) {
    return result[a] || !(result[a] =! 0)})
  result = (traversals .length == 0) ? mainValue : traversals

  return result;
}


/**
 * @params {String[]}
 */
function select() {
  var args = [];
  for(var i = 0; i < arguments.length;i++){
    args.push(arguments[i]);
  }
  return  ['select', args];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
  return  ['filter', property, values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};