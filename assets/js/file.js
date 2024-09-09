'use strict';

// выводим сообщение 
alert('Я JavaScript');

// получаем данные в переменные
let name = prompt ('Ваше имя?');
let surname = prompt ('Ваша фамилия?');
let patronomyc = prompt ('Ваше отчество?');

// записываем true или false в переменную is true
let isTrue = confirm(`${name} ${surname} ${patronomyc}. Данные верны?`);

alert(isTrue);