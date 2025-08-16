const input = require("readline-sync");

function absoluteValueCalculation(num = 0)
{
    return Math.abs(num);
}

function powerCalculation(base = 0, power = 0)
{
    return Math.pow(base, power);
}

function squareRootFinder(num)
{
    return Math.sqrt(num);
}

function maximumFinder(numArray = [])
{
    return Math.max(...numArray);
}

function minimumFinder(numArray = [])
{
    return Math.min(...numArray);
}

function minMaxFinder(numArray = [])
{
    console.log(`Max: ${maximumFinder(numArray)}`);
    console.log(`Min: ${minimumFinder(numArray)}`);
}

function randomNumberGenerator(min, max)
{
    return Math.random() * (max - min) + min;
}

function customRounding(num = 0, numDecimalPlaces = 0)
{
    let multiplier = "1";

    for (i = 0; i < numDecimalPlaces; i++)
    {
        multiplier += "0"
    }

    multiplier = Number(multiplier);

    return Math.round(num * multiplier) / multiplier;
}

while (true)
{
    operation = input.questionInt(`Select an operation:
1) Absolute Value Calculation
2) Power Calculation
3) Square Root Finder
4) Maximum and Minimum Finder
5) Random Number Generator
6) Custom Rounding
7) Exit Calculator
#`)

//console.log(typeof operation);
//console.log(operation);

    if (operation === 1)
    {
        let inputAbsNum = input.questionFloat(`Enter a number: `)
        console.log(absoluteValueCalculation(inputAbsNum));
    }
    else if (operation === 2)
    {
        let inputBaseNum = input.questionFloat(`Enter base number: `);
        let inputPowerNum = input.questionFloat(`Enter power number: `);
        console.log(powerCalculation(inputBaseNum, inputPowerNum));
    }
    else if (operation === 3)
    {
        let inputSquareRootNum = input.questionFloat(`Enter a number: `);
        console.log(squareRootFinder(inputSquareRootNum));
    }
    else if (operation === 4)
    {
        let inputMinMaxNum = input.question(`Enter a list of space delimited numbers: `);
        let numArray = inputMinMaxNum.split(" ");

        for (let i = 0; i < numArray.length; i++)
        {
            numArray[i] = Number(numArray[i]);
        }

        minMaxFinder(numArray);
    }
    else if (operation === 5)
    {
        let inputRandomNumberLowRange = input.questionFloat(`Enter low range number: `);
        let inputRandomNumberHighRange = input.questionFloat(`Enter high range number: `);
        console.log(randomNumberGenerator(inputRandomNumberLowRange, inputRandomNumberHighRange));
    }
    else if (operation === 6)
    {
        let inputRoundNum = input.questionFloat(`Enter a number: `);
        let inputRoundDecimalPlaces = input.questionFloat(`Enter nuber of decimal places: `);
        console.log(customRounding(inputRoundNum, inputRoundDecimalPlaces));
    }
    else if (operation === 7)
    {
        return;
    }

}
