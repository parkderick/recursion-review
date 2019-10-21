// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var answer = "";

  if (typeof obj === "number" || typeof obj === "boolean") {
    answer += obj;
  }

  if (obj === null) {
    return "null";
  }

  if (typeof obj === "string") {
    answer += '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var recursionArray = [];
    for (var i = 0; i < obj.length; i++) {
      recursionArray.push(stringifyJSON(obj[i]));
    }
    answer += "[" + recursionArray + "]";

  } else if (typeof obj === "object") {
    answer += "{"
    for (var key in obj) {
      if (typeof obj[key] !== "function" && typeof obj[key] !== "undefined") {
        answer += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
      }
    }
    if (answer !== "{") {
      answer = answer.substring(0, answer.length - 1);
    }
    answer += "}";
  }

  return answer;

  // your code goes here
};
