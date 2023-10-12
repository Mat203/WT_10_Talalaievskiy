// The Singleton pattern solves two problems at the same time, violating the Single Responsibility Principle:
// 1) Ensures that a class has only one instance (instance is the spicific object of the class)
// 2) Provides a global access point to this instance.

class Singleton {
    constructor(data) {
        // If an instance already exists, return it.
        if (Singleton.instance) {
            return Singleton.instance;
        }
        // If no instance exists, create one and store it in a static property of the class.
        Singleton.instance = this;
        this.data = data;
    }

    // Method to get the data of the instance.
    getData() {
        return this.data;
    }
}

const instance1 = new Singleton('Data for the first instance');
const instance2 = new Singleton('Data for the second instance');

console.log(instance1.getData()); // 'Data for the first instance'
console.log(instance2.getData()); // 'Data for the first instance'
