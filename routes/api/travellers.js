const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findAll({ include: [{ all: true, nested: true }]});
        res.status(200).json(travellerData)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        const travellerData = await Traveller.findByPk(req.params.id)
        if(!travellerData) return res.status(404).json({ msg: 'traveller not found' })
        res.status(200).json(travellerData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newTraveller = await req.body
        Traveller.create(newTraveller)
        res.status(201).json(newTraveller)
    }
    catch (err){
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const travellerData = await Traveller.findByPk(req.params.id);
        if(!travellerData) return res.status(404).json({ msg: 'traveller not found' })
        travellerData.destroy()
        res.status(200).json({ msg: `traveller ${travellerData} deleted` })
    }
    catch (err) {
        res.status(err).json(err)
    }
})


module.exports = router;