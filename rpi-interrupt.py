import RPi.GPIO as GPIO
from time import sleep

# Autonic Photo sensor in GPIO25 in Raspi 3
sensor_pin=25
GPIO.setmode(GPIO.BCM)

GPIO.setup(sensor_pin, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

#the function called by the interrupt
def getData(channel):
    print ("Data")

#initialize the interrupt
GPIO.add_event_detect(sensor_pin, GPIO.RISING, callback=getData)

while 1:
    pass
