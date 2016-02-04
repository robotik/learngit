'use strict';

function area_of_circle(r, pi) {
if(arguments.length < 2){
    pi = 3.14;
}
return pi * Math.pow(r, 2);
}
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    alert('Test passt');
} else {
    alert('Test Fail');
}