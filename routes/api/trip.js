const router = require('express').Router()
const { Trip, Location, Traveller } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const tripData = await Trip.findAll();
        res.status(200).json(tripData)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tripData = await Trip.findByPk(req.params.id);
        if(!tripData) return res.status(404).json({ msg: 'Trip not found' })
        res.status(200).json(tripData)
    }
    catch(err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req ,res) => {
    try {
        const newTrip = req.body
        Trip.create(newTrip);
        res.status(201).json(`${newTrip} created`)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const tripData = await Trip.findByPk(req.params.id)
        if(!tripData) return res.status(404).json({ msg: 'Trip not found' })
        tripData.destroy()
        res.status(200).json(`${tripData} deleted!`)
    }
    catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router;