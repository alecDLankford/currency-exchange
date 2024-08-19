const axios = require('axios');
const gsm = require('../helpers/gsm');


async function getRates() {
    try {
        const secret = await gsm.getSecret();
    const EXCHANGE_RATE_URI = `https://v6.exchangerate-api.com/v6/${secret}/latest/USD`;
    const res = await axios.get(EXCHANGE_RATE_URI);
    return res.data;
    } catch (error) {
        console.error('Error getching exchange rates:', error.message);
        throw error;
    }
    
}

async function convertCurrency(from, to, amount) {
    try {
        const rates = await getRates();

        if(!rates.conversion_rates[from] || !rates.conversion_rates[to]) {
            throw new Error(`Invalid currency code: from=${from}, to=${to}`);
        }

        const conversionRate = rates.conversion_rates[to] / rates.conversion_rates[from];
    
        return {
            amount: parseFloat(amount),
            from: from,
            to: to,
            convertedAmount: parseFloat((amount * conversionRate).toFixed(2))
        };

    } catch (error) {
        console.error('Error converting currency:', error.message);
        throw error;
    }

}

module.exports= {
    getRates,
    convertCurrency
};