class PrimeGen{
    
    printNumbers(limit){
        let primes = []
        function isPrime(num) {
            for ( var i = 2; i < num; i++ ) {
                if ( num % i === 0 ) {
                    return false;
                }
            }
            return true;
        }
        for (let i=1; i<= limit; i++){
            if (isPrime(i)){
                primes.push(i)
            }
        }
        let i=0
        setInterval(() => {
            
            if(i === primes.length) {
                clearInterval(this)
            }
            console.log(primes[i++])
        }, 1000);
    }

}

export default PrimeGen