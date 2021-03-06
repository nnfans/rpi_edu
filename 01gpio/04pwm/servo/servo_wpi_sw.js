var wpi = require('wiringpi-node');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout); 
var pin = 18;

wpi.setup('gpio');
wpi.pinMode(pin, wpi.OUTPUT);
wpi.softPwmCreate(pin, 5, 200); //50Hz, 1Period = 20ms, 1pwm = 0.1ms

rl.setPrompt("1:-90, 2:0, 3: +90 > ");

rl.prompt();
rl.on('line', function(answer){
	if(answer ==='1')	wpi.softPwmWrite(pin, 5); // 5 * 0.1ms = 0.5ms
	else if(answer === '2') wpi.softPwmWrite(pin,15);// 15*0.1ms = 1.5ms
	else wpi.softPwmWrite(pin, 25); //25*0.1ms = 2.5ms
	rl.prompt();
});


