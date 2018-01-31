// Nagisa Kojima
// Java Script Exercise String/Math/Data


// 1.Write a JavaScript function to convert a string in abbreviated form.
function abbrev_name(str) {
  var words = str.split(" ");
  return words[0] + " " + words[1][0];
}

console.log(abbrev_name("Robin Singh"));
// document.write("<h2>"+ test1 + "</h2>");

// 2. Write a JavaScript function to parameterize a string.
function string_parameterize(str) {
  var lower = str.toLowerCase();
  var words = lower.split(" ").join("-");
  return words;
}
console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

// 3. Write a JavaScript function to capitalize the first letter of a string.
function capitalize(str) {
  var upper = str[0].toUpperCase();
  return upper + str.substring(1,);
}
console.log(capitalize('js string exercises'));
"Js string exercises"

// 4. Write a JavaScript function to capitalize the first letter of each word in a string.
function capitalize_Words(str) {
  var words = str.split(" ");

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"


// 5. Write a JavaScript function to check whether an `input` is a string or not.
function is_string(str) {
  if (typeof str === 'string') {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_string('JavaScript'));
console.log(is_string([1, 2, 4, 0]));

// 6. Write a JavaScript function to concatenates a given string n times (default is 1).
function repeat(str,times) {
  if (times > 0){
    return str.repeat(times);
  }
  else {
    return "";
  }
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"

// 7 .Write a JavaScript function to count the occurrence of a substring in a string.
function count(str, sub) {
	var splitted = str.toLowerCase().split(" "); // ["the", "quick", "brown", ...]
	var counter = 0;
	for (var i = 0; i < splitted.length; i++) {
		if (splitted[i] === sub) {
			counter++;
		}
	}
	return counter;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));
Output :
1


// =========Exercise Math======================

// 1. Write a JavaScript function to generate a random integer between any 10 and 35.

function randomNumber (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a = randomNumber(10, 35);
console.log(a);

// 2. Write a JavaScript function to find the highest value in an array.
function max(numbers) {
  return Math.max.apply(null,numbers);

}
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));

// 3. Write a JavaScript function which will return values that are powers of two.
function isPower_of_two(num){
if (num !== 0 && (num & (num - 1)) === 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isPower_of_two(64));
true
console.log(isPower_of_two(94));
false

// 4. Write a JavaScript function to convert degrees to radians.
function degrees_to_radians(radian){
  return radian * Math.PI / 180;
}

console.log(degrees_to_radians(45));
0.7853981633974483

// 5. Write a JavaScript function to calculate the percentage (%) of a number.
function percentage(num,num2) {
  return num*num2/100;
}
console.log(percentage(1000, 47.12));
471.2


// 6. Write a JavaScript function to convert a positive number to negative number.
function pos_to_neg(num) {
  return -Math.abs(num);

}
console.log(pos_to_neg(15));
-15


// 7. Write a JavaScript function to calculate the sum of values in an array.
function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])){
      total = total + array[i];
    }
  }
  return total;
}
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));




// ==========Data Exercise=================

// 1. Write a JavaScript function to check whether an 'input' is a date object or not.
function is_date (input) {
  if(Object.prototype.toString.call(input) === '[object Date]') {
    return true;
  }
  else {
    return false;
  }
}
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));

// 2. Write a JavaScript function to get the current date.
function curday(separator) {
  var today = new Date();
  var date = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getFullYear();

  return (month + separator + date + separator + year);
}

console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014"

// 3. Write a JavaScript function to get the number of days in a month.
function getDaysInMonth(month,year) {
  return new Date(year,month,0).getDate();
}

console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));

// 4. Write a JavaScript function to get the month name from a particular date.
function month_name(day) {
  var monthname = ["January", "February","March","April","May", "June","July","August","September","October","November","December" ];
  return monthname[day.getMonth()];
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output :
"October"
"November"

// 5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

function compare_dates(a,b) {
if( a > b) {
  return "Date1 > Date2";
}

else if (a < b) {
  return  "Date2 > Date1" ;
}
else {
  return "Date1 = Date2";
}
}
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
Output :
"Date1 = Date2"
"Date1 > Date2"
"Date2 > Date1"

// 6. Write a JavaScript function to add specified minutes to a Date object.
function add_minutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

console.log(add_minutes(new Date(2014,10,2), 30).toString());

// 7. Write a JavaScript function to get difference between two dates in days.
function date_diff_indays(date1,date2) {
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  var difftime = d2.getTime() - d1.getTime();
  var diffdays = Math.floor(difftime / (1000 * 3600 * 24));
  return diffdays;

}
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));

// 8. Write a JavaScript function to get the last day of a month.
function lastday(year,month){
  return new Date(year,month + 1, 0).getDate();
}
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));

// 9. Write a JavaScript function that will return the number of minutes in hours and minutes.
function timeConvert(min) {
  var hour = Math.floor(min / 60);
  var minutes = min % 60;
  return hour + "hours(s)" + "and" + minutes + "minute(s)";
}
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."

// 10. Write a JavaScript program to calculate age.
function calculate_age(birthday){
  var agediff = Date.now() - birthday.getTime();
    var ageDate = new Date(agediff); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));
35
console.log(calculate_age(new Date(1962, 1, 1)));
55
