'use strict'

function jediName(firstName, lastName) {
    return lastName.slice(0, 2) + firstName.slice(0, 3);
}

console.log(jediName('Shiann', 'Bowman'))

function beyond(num) {
    if (num === Number.POSITIVE_INFINITY) {
        return 'And Beyond'
    }
    if (num === Number.NEGATIVE_INFINITY) {
        return 'And Beyond'
    }
    if (num === 0) {
        return 'Staying Home'
    }
    if (Number.isFinite(num) && num > 0) {
        return 'To Infinity'
    }
    if (Number.isFinite(num) && num < 0) {
        return 'To Negative Infinity'
}
}

console.log(beyond(545));
console.log(beyond(45544));
console.log(beyond(0));
console.log(beyond(-544));
console.log(beyond(Number.POSITIVE_INFINITY));
console.log(beyond(Number.NEGATIVE_INFINITY));

function decode(word) {
    if (word[0] === 'a') {
    return word[1]
}
    if (word[0] === 'b') {
        return word[2]
    }
    if (word[0] === 'c') {
        return word[3]
    }
    if (word[0] === 'd') {
        return word[4]
    }
    else {
        return ' ';
    }
}

console.log(decode( 'craft'));
console.log(decode( 'block'));
console.log(decode( 'argon'));
console.log(decode( 'meter'));
console.log(decode( 'bells'));
console.log(decode( 'brown'));
console.log(decode( 'croon'));
console.log(decode( 'droop'));

function daysInMonth(month, leapYear = false) {
    switch(month) {
        case "September":
        case "April":
        case "June":
        case "November":
            console.log(`${month} has 30 days.`);
        break;

        case "January":
        case "July":
        case "August":
        case "October":
        case "March":
        case "December":
            console.log(`${month} has 31 days.`);
        break;

        case "February":
            if (leapYear === true) {
              console.log(`${month} has 29 days.`);
            }
            else {
              console.log(`${month} has 28 days.`);
            }
        break; 
    
    default: 
      console.log("Must provide a valid month"); 
    }
}

console.log(daysInMonth("July"));
console.log(daysInMonth("January"));

function rockPaperScissors(num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
}

function rockPaperScissors (num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num !== 1 && num !== 2 && num !== 3) {
        throw new Error("Must enter 1, 2, or 3");
    }
    if (randomNo > num) {
        return 'The computer wins!';
    }
    if (randomNo < num) {
        return 'Yay, you win!';
    }
    if (num === randomNo) {
        return 'tie';
    }
}