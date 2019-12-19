'use strict';
let money  = prompt("Ваш бюджет на месяц?"),
time  = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
    };

let rashod  = prompt("Введите обязательную статью расходов в этом месяце");
let cost  = +prompt("Во сколько обойдется?");
alert("бюджет на 1 день: " + appData.budget / 30);

console.log(appData);