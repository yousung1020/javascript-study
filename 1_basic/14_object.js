/**
 * Object / 객체
 */

let yujin = {
    name: '안유진',
    group: '아이브',
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yujin);
console.log(yujin.name);
console.log(yujin['name']);

const key = 'name';

console.log(yujin[key]);

console.log(yujin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yujin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yujin2.name);
console.log(yujin2.group);

yujin2['group'] = '코드팩토리';
console.log(yujin2.group);

// 존재하지 않는 키를 할당하면 key와 value값이 생성됨 (신기방기)
yujin2['englishName'] = 'an yu jin';
console.log(yujin2.englishName);

delete yujin2["englishName"];
console.log(yujin2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메소드는 변경할 수 있다.
 */

// 객체의 property(name, group을 뜻함)는 변경 가능
const wonYoung = { 
    name: '장원영',
    group: '아이브'
};

// wonYoung = {}; // 객체의 값을 바꾸려하므로 오류 발생

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 */

console.log(Object.keys(wonYoung));

/**
 * 모든 밸류값 다 가져오기
 */

console.log(Object.values(wonYoung));

const name = '안유진';

const yujin3 = {
    name,
};
console.log(yujin3);