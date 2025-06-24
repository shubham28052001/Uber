const captainModel = require('../models/captain.model.js');

module.exports.createCaptain = async ({
  fullname,
  email,
  password,
  vehicle: { color, plate, capacity, vehicleType },
  location = {}  // Make location optional
}) => {
  const { lat, lng } = location;  // These will be undefined if not passed

  if (!fullname || !email || !password || !color || !plate || !capacity || !vehicleType) {
    throw new Error('All required fields must be filled');
  }

  const captain = await captainModel.create({
    fullname,
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType
    },
    // Only add location if provided (optional)
    ...(lat !== undefined && lng !== undefined && {
      location: { lat, lng }
    })
  });

  return captain;
};
