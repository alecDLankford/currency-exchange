const express = require('express');
const router = express.Router();
const exchangeService = require('../services/exchangeService');

router.get('/rates', async (req, res) => {
    const {from, to, amount} = req.query;

    try {
        const conversion = await exchangeService.convertCurrency(from, to, amount);
        res.json(conversion);
    } catch (error) {
        res.status(500).json({error: 'Failed to get exchange rate'});
    }
});

router.get('/convert', async (req, res) => {
    const { from, to, amount } = req.query;

    try {
        const conversion = await exchangeService.convertCurrency(from, to, amount);
        res.json(conversion);
    } catch (error) {
        res.status(500).json({ error: 'Failed to convert currency' });
    }
});

module.exports = router;