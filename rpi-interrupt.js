var Gpio = require('onoff').Gpio
var sensor_pin=25
// Export GPIO #18 as an interrupt, generating input.
var interrupt_pin = new Gpio(sensor_pin, 'in', 'both'); 
 
console.log('Ready...');
var val=0
 
// The callback passed to watch will be called when the button on GPIO #18 is
// pressed. 
interrupt_pin.watch(function (err, value) {
    if (err) throw err;
    val=val+1;
    console.log('Data ' + val);
 
    // interrupt_pin.unexport(); // Unexport GPIO and free resources
});