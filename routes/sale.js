const express = require('express');
const router = express.Router();
const cors = require('cors');

const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const sale = require('../data/sale.json');

router.use(cors());
router.use(express.json());

router.get('/', (req, res) => {
  res.send(sale);
});

router.post('/', (req, res) => {
  const { name, images } = req.body;

  sale.push({
    id: uuidv4(),
    name,
    images,
    create: moment(new Date()).format('LLL'),
  });

  fs.writeFileSync('data/sale.json', JSON.stringify(sale));
  res.send('success');
});

module.exports = router;
