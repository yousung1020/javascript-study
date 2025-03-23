function IdolModel(name, year){
    if(!new.target){
        return new IdolModel(name, year);
    }
    this.name = name;
    this.year = year;

    this.dance = () => {
        return `${this.name}이 춤을 춥니다`;
    }
}

const yujin = new IdolModel("cc", 2003);
const yujin2 = IdolModel("aa", 432);
console.log(yujin);
console.log(yujin2);

// arrow 함수에선 생성자 함수 정의 불가능
const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yujin3 = new IdolModelArrow("안유진", 2003);