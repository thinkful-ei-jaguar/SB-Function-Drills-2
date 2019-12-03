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