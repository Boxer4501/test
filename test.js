// задание 1

var arr = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];
var arr3 = arr.concat(arr2);
console.log(arr3)

// Задание 2

var admin = ['admin', 'admin', 'admin'];
var num = [1, 2, 3];
admin.push(1, 2, 3);
console.log(admin)
    // задание 4

var arr_1 = ['user', 3, 4, 'b'];
var a = 'b';

function val() {
    var value = arr_1.indexOf(a);
    console.log(value)
}
val();

// задание 5

var arr_2 = [3, 6, 7, 5];
var result = [
    arr_2[0] * arr_2[1] * arr_2[2] * arr_2[3]
];
console.log(result)

// задание 6

var arr_3 = [21, 3, 9, 45, 0, 6];
// console.log(arr_3.length)
for (var i = 0; i <= arr_3.length - 1; i++) {
    arr_3[i]
    if (arr_3[i] > 4 && arr_3[i] < 10) {
        console.log(arr_3[i])
    } else { console.log('hello world') }
    // console.log(arr_3[i])
}