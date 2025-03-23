// hoisting(호이스팅): 변수와 함수 선언이 해당 스코프의 최상단으로 끌어올려지는 것처럼 동작하는 방식식

// var의 경우: 호이스팅을 막지 못함 (undefined)
console.log("hello");
console.log(name);
var name = 'skrr';
console.log(name);

// let의 경우: 호이스팅을 막을 수 있음 (에러 발생)
console.log(gang);
let gang = 'yoooo';
console.log(gang);