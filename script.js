// задание 1

for (let i=1; i < 51; i++) {
    console.log(i);
}
for (let i=35; i > 7; i--) {
    console.log(i);
}


// задание 3

let a = 100;
let sum = 0;

for (let i = 0; i <= a; i++) {
    console.log(i);
    sum+=i;
}
console.log(sum);

// задание 4

let a4 = 5;
let sum4 = 0;
for(let i = 1; i <=a4; i++) {
    sum4 = 0;
    for(let j = 1; j <= i; j++) {
        sum4 += j;
    }
    console.log('Сумма чисел ' + i + ' = ' + sum4);
}


// задание 6

for(let j = 2; j<=10; j++) {
    console.log("2*" + j + "=" + 2*j);
}

for (let j1 = 1; j1<=10; j1++) {
    console.log("3*" + j1 + "=" + 3*j1);
}

// задание 7

for (var num1 = 1000, sum1 = 0; num1 > 50; num1 = num1 / 2, sum1++);
console.log(num1, sum1 + ' итераций');

// задание 8

var i8 = 0, s = 0;
var ch = 0;
ch = prompt( "Введите число", 0 );
if(String(ch)) {
    alert('Ошибка ввода. Укажите число');
} 
while ((ch != 0) && (ch != null)) {
i8 = i8 + 1;
s = +s + +ch;
ch = prompt( "Введите ещё число" );
}
alert( "Чисел введено: " + +i8 ); 
alert( "Сумма чисел: " +  +s );     
alert( "Среднее арифметическое: " + (s/i8) );


// задание 9

let maxNum = [4, 98, 4, 6, 1, 32, 4, 65, 4, 3, 5, 7, 89, 7, 10, 1, 36,
    8, 57];

for (let i = 0; i < maxNum.length; i++) {
    if(maxNum[i] > maxNum[0]){
        maxNum[0] = maxNum[i];
    }
}

console.log(maxNum[0]);

for (let i = 0; i < maxNum.length; i++) {
    if(maxNum[i] < maxNum[0]){
        maxNum[0] = maxNum[i];
    }
}

console.log(maxNum[0]);

// задание 10

let n = 835271,
    output = [],
    sNumber = n.toString();

for (let i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

console.log(output);
console.log(sNumber.length);

let sum10 = +sNumber[0] + +sNumber[1] + +sNumber[2] + +sNumber[3] + +sNumber[4] + +sNumber[5];

console.log(sum10);

output.sort(function(a, b) {
    return a - b;
});
console.log(output);

output.reverse();
console.log(output);