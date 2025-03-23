/**
 * Prototype
 */

const testObj = {};

// __proto__: 모든 객체에 존재하는 프로퍼티다.
// __proto__: 생성자 함수의 prototype 객체를 가르킴
// class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year){
    this.name = name;
    this.year = year;
};

console.log(IdolModel.prototype);

console.dir(IdolModel.prototype, {
    showHidden: true
});

// circular reference: 서로가 서로를 참조함
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yujin = new IdolModel("안유진", 2003);

console.log(yujin.__proto__);
console.log(yujin.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

// 객체 내의 정의된 메서드가 없는 경우
// 1. __proto__를 통해 부모 객체의 prototype 객체 내 정의된 것들을 참조한다.
// 2. 바로 위의 부모 객체의 prototype에도 없을 경우 prototype의 __proto__가 최상위 부모(Object.prototype)를 참조하여 메서드를 참조한다.
console.log(yujin.toString()); // 결론: toString() 메서드는 Object.prototype에 정의되어 있는 메서드이다.

function IdolModel2(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function (){
        return `${this.name}이 인사를 합니다.`;
    }
}

const yujin2 = new IdolModel2('안유진', 2003);
const won2 = new IdolModel2('장원영', 2002);

console.log(yujin2.sayHello());
console.log(won2.sayHello());
console.log(yujin2.sayHello === won2.sayHello); // false

console.log(yujin2.hasOwnProperty('sayHello')); // sayHello 메서드가 프로퍼티로 정의돼 있는가

function IdolModel3(name, year){
    this.name = name;
    this.year = year;
}

// arrow 함수로 정의시 this가 가리키는 객체가 전역 객체(Node.js에서는 global, 브라우저에서는 window)를 가리키게 됨
IdolModel3.prototype.sayHello = function (){
    return `${this.name}이 인사를 합니다.`;
};

const yujin3 = new IdolModel3("안유진", 2003);
const won3 = new IdolModel3("장원영", 2002);

console.log(yujin3.sayHello === won3.sayHello); // true

console.log(yujin3.sayHello());
console.log(won3.sayHello());

console.log(yujin3.hasOwnProperty("sayHello")); // false: 상속받은 프로퍼티다 라고 생각할 수 있다.

IdolModel3.sayStaticHello = function(){
    return "안녕하세요 저는 static method 입니다.";
};

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */

function IdolModel4(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return '안녕하세요 저는 인스턴스 메서드입니다!';
    }
};

IdolModel4.prototype.sayHello = function(){
    return "안녕하세요 저는 prototype 메서드입니다!";
};

const yujin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 셰도잉 - class에서 override
console.log(yujin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function(){
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year){
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
};

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);

console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

FemaleIdolModel.prototype = IdolModel.prototype;

const eseo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eseo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
