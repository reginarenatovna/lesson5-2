'use strict';
 
// Получить кнопку "Начать расчет" 
let start = document.getElementById('start');
//Получить все блоки в правой части программы через классы 
let budget = document.getElementsByClassName('budget-value')[0],
		daybudget = document.getElementsByClassName('daybudget-value')[0],
		level = document.getElementsByClassName('level-value')[0],
		expenses = document.getElementsByClassName('expenses-value')[0],
		optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
		income = document.getElementsByClassName('income-value')[0],
		monthsavings = document.getElementsByClassName('monthsavings-value')[0],
		yearsavings = document.getElementsByClassName('yearsavings-value')[0];
//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesImput = document.getElementsByClassName('expenses-item');
// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let appEx = document.getElementsByTagName('button')[0],
		appOp = document.getElementsByTagName('button')[1],
		calc = document.getElementsByTagName('button')[2];
console.log(appEx);
console.log(appOp);
//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optional = document.querySelectorAll('.optionalexpenses-item');
// Получить оставшиеся поля через querySelector (  сумма, процент)
let pos = document.querySelector('.choose-income'),
		checkb = document.querySelector('#savings'),
		sum = document.querySelector('.choose-sum'),
		perc = document.querySelector('.choose-percent'),
		year = document.querySelector('.year-value'),
		month =document.querySelector('.month-value'),
		day=document.querySelector('.day-value');
