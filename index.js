// #img1
String.prototype.repeatify = String.prototype.repeatify || function(times) {
    let str = '';

    for (let i = 0; i < times; i++) {
        str += this;
    }

    return str;
};
console.log('hello'.repeatify(3));

// #img2
function multiply(number1, number2) {
    if (number2 !== undefined) {
        return number1 * number2;
    }
    return function doMultiply(number2) {
        return number1 * number2;
    };
}

multiply(5, 8);
const double = multiply(2);
double(5); // => 10
double(11); // => 22

// #img3

function maxProfit(price, n) {
    let profit = new Array(n);
    for(let i = 0; i < n; i++)
        profit[i] = 0;
    let max_price = price[n - 1];
    for(let i = n - 2; i >= 0; i--) {
        if (price[i] > max_price)
            max_price = price[i];
        profit[i] = Math.max(profit[i + 1],
            max_price - price[i]);
    }
    let min_price = price[0];
    for(let i = 1; i < n; i++) {

        if (price[i] < min_price)
            min_price = price[i];
        profit[i] = Math.max(profit[i - 1],
            profit[i] + (price[i] - min_price));
    }
    let result = profit[n - 1];
    return result;
}

let price = [1,2,1,2];
let n = price.length;

console.log(maxProfit(price, n))

// #img4
function after(count, func) {
    let counter = 0;
    function runAfter() {
        counter++;
        if (count === counter) {
            func();
        }
    }
    return runAfter;
}
let called = function() { console. log('hello') }
let afterCalled = after(3, called);
afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> ‘hello’ is printed