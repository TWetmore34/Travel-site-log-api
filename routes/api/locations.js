const router = require('express').Router();
const { Location } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id)
        if(!locationData) return res.status(404).json({ msg: 'Location not found' })
        res.status(200).json(locationData)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id);
        if(!locationData) return res.status(404).json({ msg: 'Location not found' })
        locationData.destroy();
        res.status(200).json(`Location Deleted`)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;