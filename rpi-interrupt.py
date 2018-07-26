import RPi.GPIO as GPIO
from time import sleep

sensor_pin=25
GPIO.setmode(GPIO.BCM)

GPIO.setup(sensor_pin, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

#the function called by the interrupt
def call_mango(channel):
    print ("Data")

#initialize the interrupt
GPIO.add_event_detect(sensor_pin, GPIO.RISING, callback=call_mango)

while 1:
    pass
