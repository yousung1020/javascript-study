const iveMember = [
    {
        name: '안유진',
        year: 2003
    },
    {
        name: '장원영',
        year: 2004
    }
];

const btsMemeber = [
    {
        name: '뷔',
        year: 1995
    },
    {
        name: '정국',
        year: 1997
    }
];

class Country{
    name;
    idolGroups;

    constructor(name, idolGroups){
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

class IdolGroup{
    name;
    members;

    constructor(name, members){
        this.name = name;
        this.members = members;
    }
}

class Idol{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdol extends Idol{
    sing(){
        return `${this.name}이 노래를 합니다.`;
    }
}

class MaleIdol extends Idol{
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const cIveMembers = iveMember.map(
    (x) => new FemaleIdol(x['name'], x['year']) // 각각 요소들의 대해서 반환값을 지정
);

console.log(cIveMembers);

const cBtsMembers = btsMemeber.map(
    (x) => new MaleIdol(x['name'], x['year'])
);

console.log(cBtsMembers);

const iveGroup = new IdolGroup('아이브', cIveMembers);
console.log(iveGroup);

const btsGroup = new IdolGroup('bts', cBtsMembers);
console.log(btsGroup);

const korea = new Country('대한민국', [iveGroup, btsGroup]);

console.log(korea);

const allTogether = new Country('대한민국', 
    [new IdolGroup(
    '아이브',
    iveMember.map(
        (x) => new FemaleIdol(x['name'], x['year'])
    )),

    new IdolGroup('방탄소년단', btsMemeber.map(
        (x) => new MaleIdol(x['name'], x['year'])
    ))
    ]
);

console.log(allTogether);