function TransportVessel() {
    console.log("Transport Vessel instance created!");
};

// add a property to prototype
TransportVessel.prototype.name = "ART"
TransportVessel.prototype.color = "Metal Grey";

// add a method to the prototype
TransportVessel.prototype.drive = function () {
    console.log(`Driving the Transport Vessel named ${this.name} painted in ${this.color}...`);
};

// display the added property
console.log(`The Vessel's color is: ${TransportVessel.prototype.color}`);

// call the added method
TransportVessel.prototype.drive();