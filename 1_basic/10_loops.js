// for

for(let i = 0; i < 10; i++){
    console.log(i);
}

// for...in

const a = {
    name: 'yo',
    year: 2003
};

for(let key in a){
    console.log(key);
} // key 값을 반환

const Array1 = [123, 321, 432, 234];

for (let key in Array1){
    console.log(key); // 인덱스 값을 반환
    console.log(`${key}:${Array1[key]}`); // 인덱스의 요소 값을 반환
} 

// for..of

for(let value of Array1){
    console.log(value); // of문은 배열의 값을 가져옴
}

// while

let number = 0;

while (number < 10){
    number++;
}

console.log(number);

// do...while

number = 0;

do{
    number++;
} while (number < 10);

console.log(number);

// break

for(let i = 0; i < 10; i++){
    if (i === 5){
        break;
    }
    console.log(i);
}

number = 0;

while (number < 10){
    if(number === 5){
        break;
    }
    number ++;
    console.log(number);
}

// continue

for(let i = 0; i < 10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

number = 0;

while(number < 10){
    number ++;
    
    if(number === 5){
        continue;
    }

    console.log(number);
}