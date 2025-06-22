const captainModel = require('../models/captain.model.js');

module.exports.createCaptain = async ({
    fullname,
    email,
    password,
    vehicle: { color, plate, capacity, vehicleType },
    location: { lat, lng }
}) => {
    if (!fullname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const  captain = captainModel.create({
        fullname,
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain;
    }