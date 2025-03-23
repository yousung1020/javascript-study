/**
 * Array Functions
 */
let a = [
    'a',
    'b',
    'c'
];

console.log(a.push('최유성')); // push: 맨마지막 인덱스에 해당 요소를를 추가하고, 최종 길이를 반환함
console.log(a);

console.log(a.pop()); // 마지막 요소를 반환하고 배열에서 삭제함
console.log(a);

console.log(a.shift()); // 첫번째 요소를 반환하고 배열에서 삭제함
console.log(a);

console.log(a.unshift('a')); // push에 반대 버전. 맨앞 인덱스에 요소를 추가하고, 최종 길이를 반환함
console.log(a);

console.log(a.splice(0, 2));
console.log(a);

a = [
    'a',
    'b',
    'c'
];

console.log(a.concat('초이유성'));
console.log(a);

console.log(a.slice(0, 2));
console.log(a);

let a2 = [
    ...a
];

console.log(a2);

let a3 =[
    a
];

console.log(a3);

let a4 = a;
console.log(a4 == a);
// console.log([
//     ...a
// ] === a);

// join
console.log(a.join()); // string형
console.log(a.join(', '));

// sort
// 오름차순
a.sort();
console.log(a);

// // 내림차순
// console.log(a.reverse());

let numbers = [
    9,
    1,
    10,
    2,
    3
];

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환

numbers.sort((a, b) => {
    return a > b ? 1:-1;
})
console.log(numbers);

// map
console.log(a.map(x => `에이요 ㅋ ${x}`));

console.log(a.map(x => {
    if(x==='a'){
        return `오ㅋㅋ ${x}`;
    } else{
        return x;
    }
    }
));

// filter

numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter(x => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex(x => x % 2 === 0));

// reduce()
// reduce 동작원리
/**
 * 1. 초깃값인 0이 p에 입력된다.
 * 2. numbers 배열의 첫번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0 + 1의 결괏값인 1이 반환된다.
 * 4. 3에서 반환한 값(1)이 p에 입력된다.
 * 5. 배열의 두번째 값인 8이 n에  입력된다.
 * 6. p + n 즉, 1 + 8의 결괏값인 9가 반환된다.
 * 7. 6에서 반환한 값(9)가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할때까지 반복 -> 25 반환
 */
console.log(numbers.reduce((p, n) => p + n, 0));

