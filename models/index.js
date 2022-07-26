const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');


Traveller.hasMany(Trip, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE'
})

Location.hasMany(Trip, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
})

module.exports = { Trip, Location, Traveller }