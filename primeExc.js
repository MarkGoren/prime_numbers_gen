
function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}



const numberGenerator = (limit) => {
    setInterval(()=>{
        if(i === limit){
            clearInterval(this)
        }else{
            prime.isMersenne()
        }
    })
}

numberGenerator(5)