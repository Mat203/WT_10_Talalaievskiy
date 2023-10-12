// The State pattern is a behavioral design pattern that allows an object to 
//change its behavior when its internal state changes. It appears as if the object changed its class, 
// like we have below with power state:

// NOTE: I've used the Phone2 class in case not to conflict with Phone class from other file
// The Phone class represents the context that changes its state
class Phone2 {
    constructor() {
        this.state = new OffState(this);
    }

    setState(state) {
        this.state = state;
    }

    pressPowerButton() {
        this.state.pressPowerButton();
    }
}

// The abstract State class defines an interface for all states
class State {
    constructor(phone) {
        this.phone = phone;
    }

    pressPowerButton() {
        throw new Error('This method must be overwritten!');
    }
}

// Concrete State classes implement behavior associated with a state of the Context
class OffState extends State {
    pressPowerButton() {
        console.log('Turning phone on...');
        this.phone.setState(new OnState(this.phone));
    }
}

class OnState extends State {
    pressPowerButton() {
        console.log('Turning phone off...');
        this.phone.setState(new OffState(this.phone));
    }
}

// Now we can use these classes to simulate the behavior of a phone
let phone_state_pattern = new Phone2();

phone_state_pattern.pressPowerButton(); // Turning phone on...
phone_state_pattern.pressPowerButton(); // Turning phone off...
