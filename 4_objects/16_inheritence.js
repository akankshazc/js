function TransportVessel(name, affiliation) {
    this.name = name;
    this.affiliation = affiliation;
};

// create multiple objects
let tv1 = new TransportVessel("Perihelion", "University of Mihira and Newtideland");
let tv2 = new TransportVessel("Holism", "University of Mihira and Newtideland");

// add property
TransportVessel.prototype.color = "Metal Gray";

// add method
TransportVessel.prototype.pilot = function () {
    console.log(`Piloting ${this.name}`);
};

// display added property using tv1 and tv2 objects
console.log(`${tv1.name} color: ${tv1.color}`);
console.log(`${tv2.name} color: ${tv2.color}`);

// display added method using tv1 and tv2 objects
tv1.pilot();
tv2.pilot();
