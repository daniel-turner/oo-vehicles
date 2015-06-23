import Vehicle from "./vehicle.js";

function Car() {

  Vehicle.call(this);
};

Car.prototype = Object.create(Vehicle.prototype, {

  constructor: {

    value: Vehicle
  }
});