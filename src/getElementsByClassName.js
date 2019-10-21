// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];


  var elementClass = function(data) {
    if (data.classList && data.classList.contains(className)) {
      result.push(data);
    }
    for (var i = 0; i < data.childNodes.length; i++) {
      elementClass(data.childNodes[i]);
    }
  }

  elementClass(document.body);
  return result;
};
