/**
 * Async / Await
 */

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("에러");
    }, seconds * 1000);
});

async function runner (){
    // Promise로 만든 함수에 한해서 await 키워드 사용 가능
    // resolve 같은 경우는 변수에 값을 할당해서 사용가능
    // reject 같은 경우는 try catch 문을 활용해서 사용 가능(catch문에서 실행됨);
    try{
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(3);
        console.log(result3);
    } catch(e){
        console.log("---e---");
        console.log(e);
    }
    
}

runner();

console.log("실행 끝");