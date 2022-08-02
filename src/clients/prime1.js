import chalk from "chalk";

class Prime1{
    check(number){
        if (number % 10 === 1){
            console.log(chalk.red('this prime ends with 1'))
        }
    }
}

export default Prime1;