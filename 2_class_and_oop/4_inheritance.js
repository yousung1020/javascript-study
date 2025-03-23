/**
 * inheritance
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yujin = new FemaleIdolModel('안유진', 2003);
console.log(yujin);

const jimin = new MaleIdolModel('지민', 1995);

console.log(jimin);

console.log(yujin.dance());
console.log(jimin.sing());

const cf = new IdolModel("코드팩토리", 1992);
console.log(cf);
console.log(yujin instanceof IdolModel); // instanceof: 누구의 인스턴스인지 확인(boolean)
console.log(yujin instanceof FemaleIdolModel);
console.log(yujin instanceof MaleIdolModel);
