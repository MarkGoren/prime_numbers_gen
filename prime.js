import chalk from "chalk";

class Prime
{
    // Determine whether number is Mersenne prime
    isMersenne(number)
    {
        if (number > 2)
        {
            var power = 0;
            var n = 0;
            while (power <= number + 1)
            {
                // Calculate 2^n
                power = parseInt(Math.pow(2,n));
                if (power == number + 1)
                {
                    if(number % 10 === 1){
                        console.log(chalk.red(number) + " is a mersenne number")
                    }
                    
                    console.log(number + " is a mersenne number");
                    return;
                }
                n++;
            }
        }
        // When no
        console.log(number);
    }
}

export default Prime;