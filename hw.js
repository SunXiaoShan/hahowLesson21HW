const cal = require('./cal.js')
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function promptInput (prompt, handler) {
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
	console.log("便當總共 : " + cal.calculatePrice(input) + "元")
});





