import Vehicle from "./vehicle.js";

function Truck() {

  Vehicle.call(this);

};

Truck.prototype = Object.create(Vehicle.prototype, {

  constructor: {

    value: Vehicle
  }
});