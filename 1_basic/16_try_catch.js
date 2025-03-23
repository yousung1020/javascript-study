/**
 * try..catch
 * 
 * 1) 예외를 발생시킬 때 -> 던진다고한다. (throw)
 * 2) 예외를 명시적으로 인지할 때 -> 잡는다고 한다. (catch)
 */

function runner(){
    try{
        console.log('Hello');
    
    //    throw new Error('큰 문제가 생겼습니다!'); // new: 새로운 객체를 생성
    
        console.log('code Factory');
    } catch(e){
        console.log("---catch---");
        console.log(e);
    } finally{
        console.log('---finally---');
    }
    
};
runner()