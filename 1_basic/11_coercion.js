/**
 * 타입 변환
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적

let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적(이상함, 기괴함)
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

/**
 * 명시적 변환 몇가지 더
 */

console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof Infinity.toString());

// 숫자 타입으로 변환할 때
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

// boolean 타입으로의 변환

console.log(!'x'); // !: 거짓을 나타낼 때 씀, 문자열에선 값이 있느냐 없느냐로 참, 거짓을 나눔
console.log(!!'x');
console.log(!!'');
console.log(!!0); // false
console.log(!!'0'); // true
console.log(!!undefined); // false
console.log(!!null); // false

console.log(!!{}); // object는 무조건 true
console.log(!![]); // 배열도 true

/**
 *  1) 아무 글자도 없는 String
 *  2) 값이 없는 경우
 *  3) 0
 *  모두 false 반환
 */