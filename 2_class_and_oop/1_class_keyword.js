/**
 * class keyword
 */

class IdolModel{
    // 자바에서의 필드 같은 개념
    // 자바스크립트는 개박살난 언어이기 때문에 프로퍼티를 정의하지 않아도 됨ㅋ
//    name;
//    year;

    constructor(name, year){ // 생성자 정의
        this.name = name;
        this.year = year;
    }

    sayName(){ // function아라고 정의 안해도 됨
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}
// constructor -> 생성자
const yujin = new IdolModel('안유진', 2003);
console.log(yujin);

const gaeul = new IdolModel("가을", 2002);
console.log(gaeul);

console.log(yujin.name);
console.log(yujin.year);

console.log(yujin.sayName());
console.log(gaeul.sayName());

console.log(typeof IdolModel);
console.log(typeof yujin);
