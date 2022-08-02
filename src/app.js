import PrimeGen from "./publishers/primeGenerator.js";
import Prime1 from "./clients/prime1.js";
import Mersenne from "./clients/mersenne.js";
import Prime4Digit from "./clients/prime4digit.js";

const primeGen = new PrimeGen(20);
const prime1 = new Prime1();
const mersenne = new Mersenne();
const prime4digit = new Prime4Digit();

primeGen.on('primeRelease', mersenne.check)
primeGen.on('primeRelease', prime1.check)
primeGen.on('primeRelease', prime4digit.check)

primeGen.printNumbers()