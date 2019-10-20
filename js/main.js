// цитаты из Макса Фрая
var quoteText = document.querySelector('#quoteText');
var arr = [
  'Если хочешь далеко пойти, нужно уметь не только работать, но и приказывать.',
  'Мы с тобой имеем талант к некоему странному ремеслу, в котором никто ни хрена не понимает!',
  'Когда ты клюешь носом уже, а не еще, пожар на утреннем горизонте впечатляет куда больше!',
  'Чувство ответственности – не лучшее снотворное.',
  'Таков непреложный закон жизни: люди панически боятся неизвестного.',
  'Ждать и надеяться – верный способ скоропостижно рехнуться.',
  'Абсолютно нормальный человек попросту не подходит для нашей работы.',
  'Ты всегда получаешь чего хочешь, рано или поздно, так или иначе…',
  'Первый эксперимент нужно ставить над собой, а не над посторонним человеком.',
  'Нет ничего проще, чем совершить невозможное! Стоит только представить себе, чем ты сейчас будешь заниматься, – и тут же отключаешься. А когда приходишь в себя – все уже позади…',
  'Голова и должна идти кругом, это ее основная обязанность!',
  'Лучше поздно, чем еще позже!',
  'Надо просто делать все, на что ты способен, а не гадать, как сложатся обстоятельства.',
  'Есть вещи, которые следует делать красиво или не делать вовсе…',
  'Прибор, измеряющий время, делает своего обладателя его рабом.'
];
var rand = Math.floor(Math.random() * arr.length);
quoteText.innerText = (arr[rand]);

// английский текст в блоках
var changeableText = document.querySelectorAll('.changeableText');
var langButton = document.querySelector('.langButton');
var langEn = document.querySelector('#langEn');
var langRu = document.querySelector('#langRu');
var langPl = document.querySelector('#langPl');

console.log(changeableText);
