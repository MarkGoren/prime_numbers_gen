import MyEvent from "../common/MyEvent";

class PrimeGen extends MyEvent{
    
    constructor(limit){
        super();
        this.generator = this.generator(limit)
        
    }

    *generator(limit){
        function isPrime(num) {
            for ( var i = 2; i < num; i++ ) {
                if ( num % i === 0 ) {
                    return false;
                }
            }
            return true;
        }

        for (let i=1; i<= limit; i++){
            if(isPrime(i)){
                yield i
            }
        }
    }
    
    printNumbers(){

        const myInterval = setInterval(()=>{
            
            var value = this.generator.next().value
            if(!value){
                clearInterval(myInterval)
                return
            }
            console.log(value)
            this.emit('primeRelease', value)
        }, 1000)
        
       
    }

}

export default PrimeGen

