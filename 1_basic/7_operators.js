let result = 1;
let number = 3;

result = number ++;

console.log(result, number, "\n");

let sample = "99";
console.log(+sample);
console.log(typeof +sample);
console.log(typeof sample);

let bool = true;
console.log(+bool);
console.log(typeof +bool);
console.log(typeof +false);

let sample2 = 'wowowowow';

// NaN: Not a Number, 숫자가 아니다.
console.log(+sample2);

console.log(5 == '5'); // trueㅋㅋ
console.log(0 == ''); // trueㅋㅋㅋ
console.log(true == 1); // trueㅋㅋㅋㅋㅋ
console.log(false == 0); // trueㅋㅋㅋㅋㅋ

// 타입의 비교, 실무에서는 대부분 ===으로 비교한다.
console.log(5 === '5'); // false

// not을 비교할 때
console.log(5 != '5'); // false
console.log(0 != '');  // false

// 이렇게!!
console.log(5 !== '5'); // true
// etc..

// 삼항 조건 연산자
console.log(10 > 0 ? '10은 0보다 크다' : '10은 0보다 작다');


// 논리 연산자
/**
 * && -> and
 * || -> or
 */
console.log(10 < 0 && 10 > 0);
console.log(9 > 0 && 10 > 0);
console.log(10 > 0 || 10 < 0);
console.log(10 < 0 || 10 < 0);


// 단축평가
/**
 * &&을 사용했을 때 좌측이 true면 우측 값 반환
 * &&을 사용했을 때 좌측이 false면 좌측 값 반환
 * ||을 사용했을 때 좌측이 true면 좌측 값 반환
 * ||을 사용했을 때 좌측이 false면 우측 값 반환
 * 외우는 수밖에 없.
 */
console.log(true && 'skrr');
console.log(false && 'choi');
console.log(true || 'wowowow');
console.log(false || 'yepiiiiiiiiii');

// 조건이 세개일 때의 단축평가
console.log(true && false && 'yo'); // true && false -> false 반환, false && 'yo' -> false 반환, 최종: false 출력

// 지수 연산자
console.log(10 ** 3); // 제곱

// null 연산자
let name;
console.log(name); // undifined

name = name ?? 'yayaya'; // name의 변수의 값이 null이거나 undifined일 때 ??의 오른쪽 값 할당
console.log(name);

name = name ?? 'skrkr';
console.log(name);

let name2
name2 ??= 'yoyoyo'; // name ?? 'yayaya' 와 같은 문법
console.log(name2);

