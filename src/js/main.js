'use strict';
 
// Получить кнопку "Начать расчет" 
let start = document.getElementById('start');
//Получить все блоки в правой части программы через классы 
let budget = document.getElementsByClassName('budget-value'),
		daybudget = document.getElementsByClassName('daybudget-value'),
		level = document.getElementsByClassName('level-value'),
		expenses = document.getElementsByClassName('expenses-value'),
		optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
		income = document.getElementsByClassName('income-value'),
		monthsavings = document.getElementsByClassName('monthsavings-value'),
		yearsavings = document.getElementsByClassName('yearsavings-value');
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
		sum = document.querySelector('choose-sum'),
		perc = document.querySelector('choose-percent'),
		year = document.querySelector('.year-value'),
		month =document.querySelector('.month-value'),
		day=document.querySelector('.day-value');
