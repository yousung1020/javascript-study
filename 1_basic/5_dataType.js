const a = 'abc'
console.log(`${a} 초콜렛`)

const c = Symbol('a');
const d = Symbol('a');

console.log(c==d);

const dictionary = {
    red:'빨간색',
    orange:'주황색',
}

console.log(dictionary['red']);
console.log(dictionary['orange']);