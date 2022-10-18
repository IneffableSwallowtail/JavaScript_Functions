console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
{
    if (count <= 0)
    {
        console.log("Must be a positive integer");
    }
    else
    {
        for (let i = 1; i <= count; i++)
        {
            if (i % 2 != 0) console.log(i);
        }
    }
}
printOdds(16);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age)
{
    let insufficientInput = "Please enter your username and age!";
    let aboveSixteen = `Congrats, ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    
    if (userName == undefined || age == undefined) console.log(insufficientInput);
    else if (age >= 16) console.log(aboveSixteen);
    else console.log(belowSixteen);
}
checkAge("Clarity", 15);

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y)
{
if (x == 0 && y == 0) console.log(`(${x}, ${y}) is at the point of origin`);
else if (x > 0 && y > 0) console.log(`(${x}, ${y}) is in Quadrant 1`);
else if (x < 0 && y > 0) console.log(`(${x}, ${y}) is in Quadrant 2`);
else if (x < 0 && y < 0) console.log (`(${x}, ${y}) is in Quadrant 3`);
else if (x > 0 && y < 0) console.log(`(${x}, ${y}) is in Quadrant 4`);
else console.log("Invalid input");
}
whichQuadrant(0, 0);

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function whatTriangle(x, y, z)
{
    if (z == undefined || isNaN(x) || isNaN(y) || isNaN(z) ||
        x + y <= z || y + z <= x || z + x <= y)
    /*I only included z as undefined because I think it pays attention to the
    order of the variables only, even if you try to assign z, so if z is
    undefined, then by necessity y and x are, as well.*/
    {
        console.log("Invalid triangle");
    }
    else if (x == y && y == z) console.log("Equilateral triangle");
    else if (x == y || y == z || z == x) console.log("Isosceles triangle");
    else console.log("Scalene triangle");
}
whatTriangle(2, "string", 4);

//Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanUsage(planLimit, daysUsed, usage)
{
    let avBase = planLimit / 30;
    let avActual = usage / daysUsed;
    let projectedUse = avActual * 30;
    let avNeeded = (planLimit - usage) / (30 - daysUsed);
    
    if (usage == undefined || daysUsed >= 30 || daysUsed <= 0) console.log("Invalid input");
    else if (planLimit == "unlimited") console.log("You have unlimited data!");
    else if (usage > planLimit) console.log("You have exceeded your data limit for the month.");
    else if (usage == planLimit) console.log("You have used up your data for the month.");
    else
    {
        console.log(`${daysUsed} days used, ${30 - daysUsed} days remaining`);
        console.log(`Average daily use: ${Math.round(avActual)} GB`);
        if (avActual > avBase)
        {
            console.log(`You are EXCEEDING your average daily use of ${Math.round(avBase)} GB/day. ` +
            `Continuing this high usage, you'll exceed your data plan by ${Math.round(projectedUse - planLimit)} GB.`)
            console.log(`To stay below your data plan, average ${Math.round(avNeeded)} GB/day.`);
        }
        else if (avActual == avBase)
        {
            console.log(`You are right on your average daily use of (${avBase} GB/day).`);
        }
        else if (avActual < avBase)
        {
            console.log(`You are BELOW your average daily use of (${Math.round(avBase)} GB/day). ` +
            `Continuing this low usage, you'll be under your data plan by ${Math.round(planLimit - projectedUse)} GB.`)
            console.log(`To make the most of your data plan, average ${Math.round(avNeeded)} GB/day.`);
        }
    }
}   
dataPlanUsage(3000, 2, 3000);
