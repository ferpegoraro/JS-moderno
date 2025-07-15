// setTimeout(() => {
//     console.log("10 segundos depois")
// }, 10000);

// let value = 0;
// const interval = setInterval(() => {
//    console.log(value);
//    value++;

//    if( value ===10){
//     clearInterval(interval);
//     console.log("10 segundos depois")
//    }
// }, 1000);

//Function que retorne uma Promise
function asyncFunction(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSucess = true

            if(isSucess){
                resolve(console.log("Sucesso"))
            }else{
                reject(console.log("Erro"))
            }
        }, 2000)
    })

}

// asyncFunction().then((response) =>{
//     console.log("Sucesso",response)
// }).catch((error) => {
//     console.log("Erro",error)
// }).finally(() => {
//     console.log("Finalmente")
// })

 async function fetch(){
    const response =  await asyncFunction()
    console.log(response)
}


