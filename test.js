
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function promptInput (prompt, handler)
{
    rl.question(prompt, input =>
    {
        if (handler(input) !== false)
        {
            promptInput(prompt, handler);
        }
        else
        {
            rl.close();
        }
    });
}

promptInput('app> ', input =>
{
    var count = input;
	let oneRiceBox = count >= 10 ? 70 : 80;
	let price = oneRiceBox * count;
	console.log("便當總共 : " + price + "元")
});



