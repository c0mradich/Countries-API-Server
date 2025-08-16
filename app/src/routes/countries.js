const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,flag,population,languages'
    );
    res.render('countries', { title: 'Countries', data: data });
  } catch (err) {
    console.error(err.response?.status, err.response?.data || err);
    res.status(500).send('Ошибка при загрузке данных о странах');
  }
});

module.exports = router;
