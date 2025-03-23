/**
 * Immutable Object
 */

const yujin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yujin);

/**
 * Extebsible (확장 가능한지)
 */

console.log(Object.isExtensible(yujin));

yujin['position'] = 'vocal';

console.log(yujin);

Object.preventExtensions(yujin);

console.log(Object.isExtensible(yujin));

yujin['groupName'] = '아이브';
console.log(yujin);

delete yujin['position']; // 삭제는 가능
console.log(yujin);

/**
 * Seal (봉인하는 것)
 */

const yujin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
};

console.log(Object.isSealed(yujin2));

Object.seal(yujin2);

console.log(Object.isSealed(yujin2));

yujin2['groupName'] = '아이브'; // 값 추가 안됨
console.log(yujin2);

delete yujin2['name']; // 삭제도 되지 않음
console.log(yujin2);

// 변경은 됨 (seal == configurable을 false 한 것과 같음)
Object.defineProperty(yujin2, 'name', {
    writable: false
});

console.log(Object.getOwnPropertyDescriptor(yujin2, 'name'));

/**
 * Freezed (가장 높은 immutable 수준)
 * 
 * 읽기 외에 모든 기능을 불가능하게 만듬
 */

const yujin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
};

console.log(Object.isFrozen(yujin3));
Object.freeze(yujin3);
console.log(Object.isFrozen(yujin3));

yujin3['groupName'] = '아이브',

delete yujin3['name'];
console.log(yujin3);

console.log(Object.getOwnPropertyDescriptor(yujin3, 'name'));

const yujin4 = {
    name: '안유진',
    year: 2003,
    won: {
        name: '장원영',
        year: 2002
    }
};

Object.freeze(yujin4);

console.log(Object.isFrozen(yujin4['won'])); // 하위 객체에는 적용X
