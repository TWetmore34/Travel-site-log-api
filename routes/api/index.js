const router = require('express').Router();
const travelRoutes = require('./travellers');
const locRoutes = require('./locations');
const tripRoutes = require('./trip')

router.use('/travellers', travelRoutes);
router.use('/locations', locRoutes);
router.use('/trips', tripRoutes);

module.exports = router;