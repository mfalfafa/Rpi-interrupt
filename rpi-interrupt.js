var Gpio = require('onoff').Gpio
const sensor_pin=25
// Export GPIO #18 as an interrupt, generating input. Debounce timeout is 10 ms.
const interrupt_pin = new Gpio(sensor_pin, 'in', 'rising', {debounceTimeout: 10}); 
 
console.log('Ready...');
var val=0
 
// The callback passed to watch will be called when the interrupt_pin on GPIO #25 is triggered by goods. 
interrupt_pin.watch(function (err, value) {
    if (err) throw err;
    // val=val+1;
    console.log('Data ' + value);
    val=val+value;
 	console.log('count '+ val);
    // To stop watch to the sensor pin
    // interrupt_pin.unexport(); // Unexport GPIO and free resources
});