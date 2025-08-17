const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:country', async (req, res) => {
    const countryName = req.params.country;
    try {
        const { data } = await axios.get(
            `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,region,flags,population,languages`
        );
        res.render('country', { title: countryName, data: data[0] });
    } catch (err) {
        console.error(err.response?.status, err.response?.data || err);
        res.status(500).send('Ошибка при загрузке данных о стране');
    }
});

module.exports = router;
