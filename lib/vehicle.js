function Vehicle() {

}

Vehicle.create = function(vehicleType) {

  if(typeof vehicleType !== 'string') {

    throw new TypeError("Vehicle.create did not receive a string describing the type of vehicle to be created.");
  }

  vehicleType = vehicleType.toLowerCase();

  switch (vehicleType) {

    case "car":
      return new Car();
      break;
    case "truck":
      return new Truck();
      break;
    case "minivan":
      return new Minivan();
      break;
    default:
      throw new Error("Vehicle.create did not recognize the requested vehicle type.");
  }
}