// The main idea of the builder pattern -- it is better to have one object with a lot of configuration
// rather than a lot of same classes


// The Phone class represents the product to be created
class Phone {
    constructor() {
        this.model = '';
        this.price = 0;
    }

    listParts() {
        return `Phone model: ${this.model}, Price: ${this.price}`;
    }
}

// The abstract class PhoneBuilder defines methods for creating parts of the product
class PhoneBuilder {
    constructor() {
        this.phone = new Phone();
    }

    // Set the model of the phone.
    setModel(model) {
        this.phone.model = model;
        return this; // We need to eturn 'this' to allow method chaining
    }

    // Set the price of the phone.
    setPrice(price) {
        this.phone.price = price;
        return this; // We need to return 'this' to allow method chaining
    }

    // Return the constructed phone
    build() {
        const result = this.phone;
        this.phone = new Phone();
        return result;
    }
}

// The Director class defines the order in which to execute the building steps
class Director {
    constructor(builder) {
        this.builder = builder;
    }

    buildMinimalisticProduct() {
        this.builder.setModel('Minimal Model').setPrice(300);
    }

    buildFullFeaturedProduct() {
        this.builder.setModel('Full Featured Model').setPrice(1000);
    }
}

// Create a builder and director
const builder = new PhoneBuilder();
const director = new Director(builder);

// Build a minimalistic phone
director.buildMinimalisticProduct();
let phone = builder.build();
console.log(phone.listParts());

// Build a full featured phone
director.buildFullFeaturedProduct();
phone = builder.build();
console.log(phone.listParts());

// Build a custom phone without using director
builder.setModel('Custom Model').setPrice(500);
phone = builder.build();
console.log(phone.listParts());

