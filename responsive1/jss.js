function walkdog(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{const dogwalked = true;
        if(dogwalked){
            res('you walked the dog')
        } else rej('you can not')}, 1000)
    }) 
}

function exercise(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{const exercised = true;
        if(exercised){
            res('you did the exercise')
        } else rej('you can not')}, 1000)
    }) 
}


async function dothings(){
    let things = await Promise.all([walkdog(), exercise()]);
    console.log(things)
}
dothings();

console.log('well done')