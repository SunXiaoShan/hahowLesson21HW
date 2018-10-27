
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

function calculateProce(_count) {
	var count = _count;
	let oneRiceBox = count >= 10 ? 70 : 80;
	let price = oneRiceBox * count;
	return price
}


promptInput('app> ', input =>
{
	console.log("便當總共 : " + calculateProce(input) + "元")
});


describe('測試標題', function(){
    it('測試內容', function(done){
        // 進行測試
    })
    it('測試內容2', function(done){
        // 進行測試
    })
})



