function TransportVessel() {
    this.color = "Metal Gray";
};

// add property that already exists
TransportVessel.prototype.color = "Blue";

// add a new property
TransportVessel.prototype.name = "Perihelion";

const tv1 = new TransportVessel();

console.log(`The Vessel's color is ${tv1.color}.`);
console.log(`The Vessel's name is ${tv1.name}.`);