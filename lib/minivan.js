import Vehicle from "./vehicle.js";

function Minivan() {

  Vehicle.call(this);
};

Minivan.prototype = Object.create(Vehicle.prototype, {

  constructor: {

    value: Vehicle
  }
});