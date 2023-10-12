// The Factory pattern provides an interface for creating objects in a superclass, but allows subclasses to  
//edit the type of objects that will be created.

// Abstract class PhoneFactory defines the method createPhone(), which should return an object of the Phone class
class PhoneFactory {
    createPhone(model) {
        throw new Error("This method must be overwritten!"); // This throw must be here because we needd to define the phone in the concrete class
    }
}

// The concrete class AppleFactory and GoogleFactory override the method createPhone() and return 
//different types of our products
class AppleFactory extends PhoneFactory {
    createPhone(model) {
        return new Phone(model, 1000);
    }
}

class GoogleFactory extends PhoneFactory {
    createPhone(model) {
        return new Phone(model, 800);
    }
}

// The Phone class represents the product to be created.
class Phone {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

// Create factories for each type of phone.
const appleFactory = new AppleFactory();
const googleFactory = new GoogleFactory();

// Create phones using the factories.
const phones = [];
phones.push(appleFactory.createPhone('Apple iPhone'));
phones.push(googleFactory.createPhone('Google Pixel'));

// Testing
for (let phone of phones) {
    console.log(phone.model + ' costs ' + phone.price);
}
