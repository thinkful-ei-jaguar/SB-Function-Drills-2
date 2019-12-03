"use strict"

function jediName(firstName, lastName) {
    return lastName.slice(0, 2) + firstName.slice(0, 3);
}

console.log(jediName("Shiann", "Bowman"))

function beyond(num) {
    if (num === Number.POSITIVE_INFINITY) {
        return "And Beyond"
    }
    if (num === Number.NEGATIVE_INFINITY) {
        return "And Beyond"
    }
    if (num === 0) {
        return "Staying Home"
    }
    if (Number.isFinite(num) && num > 0) {
        return "To Infinity"
    }
    if (Number.isFinite(num) && num < 0) {
        return "To Negative Infinity"
}
}

console.log(beyond(545));
console.log(beyond(45544));
console.log(beyond(0));
console.log(beyond(-544));
console.log(beyond(Number.POSITIVE_INFINITY));
console.log(beyond(Number.NEGATIVE_INFINITY));

function decode(word) {
    if (word[0] === "a") {
    return word[1]
}
    if (word[0] === "b") {
        return word[2]
    }
    if (word[0] === "c") {
        return word[3]
    }
    if (word[0] === "d") {
        return word[4]
    }
    else {
        return " ";
    }
}

console.log(decode( "craft"));
console.log(decode( "block"));
console.log(decode( "argon"));
console.log(decode( "meter"));
console.log(decode( "bells"));
console.log(decode( "brown"));
console.log(decode( "croon"));
console.log(decode( "droop"));

function month(monthName);
switch(month) {
case 'January':
case 'March':
case 'May':
case 'July':
case 'August':
case 'October':
case 'December':
console.log("There are 31 days in ${monthName}");
      break;
    case 'September':
    case 'April':
    case 'June':
    case 'November':
            console.log("There are 30 days in ${month}");
      break;
    case 'February':
            console.log("There are 28 days in February");
  }

  month("February");