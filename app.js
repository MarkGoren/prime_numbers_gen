import PrimeGen from "./src/publishers/primeGenerator.js";
import Prime1 from "./src/clients/prime1.js";
import Mersenne from "./src/clients/mersenne.js";
import Prime4Digit from "./src/clients/prime4digit.js";

function runGen(limit){
    const primeGen = new PrimeGen(limit);
    const prime1 = new Prime1();
    const mersenne = new Mersenne();
    const prime4digit = new Prime4Digit();

    primeGen.on('primeRelease', mersenne.check)
    primeGen.on('primeRelease', prime1.check)
    primeGen.on('primeRelease', prime4digit.check)
    primeGen.printNumbers()

}

export default runGen;
