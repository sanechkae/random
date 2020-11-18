var start = document.getElementById("start");
var welcom = document.getElementById("welcom");
var block = document.getElementById("block");
var end = document.getElementById("end");
var again = document.getElementById("again");
var lastnamediv = document.getElementById("lastname");
var firstnamediv = document.getElementById("firstname");
var genderdiv = document.getElementById("gender");
var bfdiv = document.getElementById("bf");
var profdiv = document.getElementById("prof");

var lastnamearr = ["Иванов", "Смирнов", "Кузнецов", "Васильев", "Петров", "Михайлов", "Новиков", "Федоров", "Кравцов", "Николаев", "Семёнов", "Славин", "Степанов", "Павлов","Александров","Морозов"];
var firstmalenamearr = ["Александр", "Максим", "Иван", "Артем", "Дмитрий", "Никита", "Михаил", "Даниил", "Егор", "Андрей"];
var firstfemalenamearr = ["Александра", "Светлана", "Алиса", "Алина", "Анастасия", "Нина", "Варвара", "Валерия", "Мария"];
var secondmalenamearr = ["Юрьевич", "Викторович", "Александрович", "Максимович", "Иванович", "Дмитривич", "Анреевич", "Викторович", "Артемович"];
var secondfemalenamearr = ["Юрьевна", "Викторовна", "Александровна", "Максимовна", "Ивановна", "Дмитриевна", "Анреевна", "Викторовна", "Артемовна"];
var datearr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13" ,"14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
var montharr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декарбря",];
var yeararr = ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002"];
var maleprofarr = ["Программист", "Слесарь", "Строитель", "Каменщик", "Сварщик", "Фермер", "Физик", "Механик", "Энергетик"];
var femaleprofarr = ["Визажист", "Няня", "Медсестра", "Дизайнер", "Швея", "Горничная", "Учительница", "Стюардесса", "Актриса"];
var genderarr = ['женщина', 'мужчина'];

function generation () {
	
	var lastnameRandom = lastnamearr[Math.floor(Math.random() * lastnamearr.length)];
	var firstmalenameRandom = firstmalenamearr[Math.floor(Math.random() * firstmalenamearr.length)];
	var firstfemalenameRandom = firstfemalenamearr[Math.floor(Math.random() * firstfemalenamearr.length)];
	var secondmalenameRandom = secondmalenamearr[Math.floor(Math.random() * secondmalenamearr.length)];
	var secondfemalenameRandom = secondfemalenamearr[Math.floor(Math.random() * secondfemalenamearr.length)];
	var genderRandom = genderarr[Math.floor(Math.random() * genderarr.length)];
	var maleprofRandom = maleprofarr[Math.floor(Math.random() * maleprofarr.length)];
	var femaleprofRandom = femaleprofarr[Math.floor(Math.random() * femaleprofarr.length)];

    var generationarr = [];

    if (genderRandom == genderarr[0]) {
        generationarr[0] = lastnameRandom + 'а';
        generationarr[1] = firstfemalenameRandom + ' ' + secondfemalenameRandom;
        generationarr[2] = femaleprofRandom;
    } else {
        generationarr[0] = lastnameRandom;
        generationarr[1] = firstmalenameRandom + ' ' + secondmalenameRandom;
        generationarr[2] = maleprofRandom;
    }
	lastnamediv.innerHTML = generationarr[0];
	firstnamediv.innerHTML = generationarr[1];
	profdiv.innerHTML = generationarr[2]; 
	genderdiv.innerHTML = genderRandom;
}

function generationbf () {
	var dateRandom = datearr[Math.floor(Math.random() * datearr.length)];
	var monthRandom = montharr[Math.floor(Math.random() * montharr.length)];
	var yearRandom = yeararr[Math.floor(Math.random() * yeararr.length)];
    var str3 = '';
    if (dateRandom == datearr[30] && monthRandom == montharr[2,4,6,7,9,10]){   
        str3 = dateRandom + " " + monthRandom + " " + yearRandom + ' года';
    } else if (dateRandom == datearr[28] && monthRandom == montharr[1] && yearRandom == yeararr[0,4,8,12,16,20]){  
        str3 = dateRandom + " " + monthRandom + " " + yearRandom + ' года';
    } else if (dateRandom == datearr[29] && monthRandom == montharr[0,2,3,4,5,6,7,8,9,10,11]){
        str3 = dateRandom + " " + monthRandom + " " + yearRandom + ' года';
    } else {
        str3 = dateRandom + " " + monthRandom + " " + yearRandom + ' года';
    }
    return str3;
}

start.addEventListener('click', event =>{
    welcom.style.display = "none";
    block.style.display = "block";

    generation ();

    res3 = generationbf ();
    bfdiv.innerHTML = res3;

});

again.addEventListener('click', event =>{
    lastnamediv.innerHTML = '';
    firstnamediv.innerHTML = '';
    profdiv.innerHTML = '';
    
    generation ();    
    
    res3 = generationbf ();
    bfdiv.innerHTML = res3;
});

end.addEventListener('click', event =>{
    lastnamediv.innerHTML = '';
    firstnamediv.innerHTML = '';
    profdiv.innerHTML = ''; 

    welcom.style.display = "block";
    block.style.display = "none";

});

