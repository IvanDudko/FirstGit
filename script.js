'use strict';
let money  = +prompt("Ваш бюджет на месяц?");
// console.log(money);
let time  = prompt("Введите дату в формате YYYY-MM-DD");
var rashod  = prompt("Введите обязательную статью расходов в этом месяце");
var cost  = +prompt("Во сколько обойдется?");
alert("бюджет на 1 день: " + ((money-cost)/30));
let appData = {
budget: money,
timeData: time,
expenses : {
rashod, cost 
},
optionalExpenses : {},
income : [],
savings : false
};

console.log(appData);