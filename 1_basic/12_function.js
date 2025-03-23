// 함수

// 만약에 2라는 숫자에 * 10 / 2 % 3을 스트링으로 변환해서 반환받고 싶다

console.log((2 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Dont
 * R -> Repeat
 * Y -> Yourself
 */

function calculate(){
    console.log((2 * 10 / 2 % 3).toString())
}

// calculate();

function calculate(number){ // number는 파라미터
    console.log((number * 10 / 2 % 3).toString())
}

/**
 * 함수에서 입력받는 값에 대한 정의를 매개변수(Parameter)라고 한다.
 * 실제 입력하는 값은 인수(argument)라고 한다.
 */
calculate(4); // 4는 인수(argument)

function multiply(x, y){
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

/**
 * arrow 함수
 */
const multiply2 = (x, y) => {
    return x * y;
}

console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(5, 6));

const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y}, z: ${z}`;
console.log(multiply5(2)(5)(7));

const multiplyThree = function(x, y, z){
    console.log(arguments);
    return x * y * z;
}

console.log(multiplyThree(4, 5, 6));

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a, b) => a*b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7));

(function(x, y){
    console.log(x * y);
})(4, 5);

console.log(typeof multiply)
console.log(multiply instanceof Object);

