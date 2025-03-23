/**
 * Callback
 */
function waitAndRun(){
    setTimeout(() => {
        console.log("끝");
    }, 2000);
}

// waitAndRun();

function waitAndRun2(){
    setTimeout(() => {
        console.log("1번 콜백 끝");

        setTimeout(() => {
            console.log("2번 콜백 끝");
            
            setTimeout(()=>{
                console.log("3번 콜백 끝");
            }, 2000)
        }, 2000);
    }, 2000);
};

// waitAndRun2();

/**
 * Promise
 */
const timeOutPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("관료"); // resolve가 실행이 되면
    }, 2000);
});

// timeOutPromise.then((res)=>{ // then이 실행이 됨
//     console.log("---then---");
//     console.log(res);
// });

// resolve는 then, reject는 catch(예외)
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if (xxx){
        //     resolve("성공");
        // }
        // else{
        //     reject("에러");
        // }
        resolve("에러"); 
    }, seconds * 1000);
})

// getPromise(3)
//     .then((res) => {
//         console.log("---first then---");
//         console.log(res);
//         return getPromise(3);
//     }).then((res) => {
//         console.log("---second then---");
//         console.log(res);
//     });

// getPromise(3)
//     .then((res) => {
//         console.log("---first then---");
//         console.log(res);
//     })
//     .catch((res) => {
//         console.log('---first catch---');
//         console.log(res);
//     })
//     .finally(() => {
//         console.log("---finally---");
//     });

Promise.all([ // 실행은 동시에 진행됨
    getPromise(1),
    getPromise(2),
    getPromise(1),
]).then((res) => {
    console.log(res);
});
