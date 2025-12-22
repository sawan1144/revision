function getuserdata(userid){
    return fetch(`https://api.github.com/users/${userid}`)
    .then((raw)=> {
        if(!raw.ok) {
            throw new Error(raw.status);
        }else return raw.json();
    })
}

async function gettingdata(){
    const harkiratdata = await getuserdata('harkirat')
    console.log(harkiratdata);
}

gettingdata();