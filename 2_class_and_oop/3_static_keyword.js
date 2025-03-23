// class IdolModel{
//     name;
//     year;
//     static groupName = '아이브';

//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yujin = new IdolModel('안유진', 2003);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName);

/**
 * factory constructor
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1]
        );
    }
}

// static: new 키워드 없이도 클래스 내 함수 호출 가능
const yujin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003
});

console.log(yujin2)

const won = IdolModel.fromList(
    [
        '장원영',
        2003
    ]
);

console.log(won);
