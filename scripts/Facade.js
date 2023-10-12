// The Facade pattern is designed to provide a simplified interface to a complex subsystem

// The Phone class represents a subsystem that we want to simplify with a facade
// NOTE: I've used the Phone1 class in case not to conflict with Phone class from other file
class Phone1 {
    constructor(model) {
        this.model = model;
        this.batteryLevel = 100;
    }

    turnOn() {
        console.log(this.model + ' is turning on');
        this.batteryLevel -= 10;
    }

    turnOff() {
        console.log(this.model + ' is turning off');
        this.batteryLevel -= 5;
    }

    checkBatteryLevel() {
        console.log(this.model + ' battery level is: ' + this.batteryLevel + '%');
    }
}

// The PhoneFacade class provides a simplified interface to the complex subsystem
class PhoneFacade {
    constructor() {
        this.iPhone = new Phone1('iPhone');
        this.googlePixel = new Phone1('Google Pixel');
    }

    turnOnAllPhones() {
        this.iPhone.turnOn();
        this.googlePixel.turnOn();
    }

    turnOffAllPhones() {
        this.iPhone.turnOff();
        this.googlePixel.turnOff();
    }

    checkAllPhonesBatteryLevel() {
        this.iPhone.checkBatteryLevel();
        this.googlePixel.checkBatteryLevel();
    }
}

// Now we can use the facade to perform complex operations with a single method call
const facade = new PhoneFacade();

facade.turnOnAllPhones();
facade.checkAllPhonesBatteryLevel();
facade.turnOffAllPhones();
