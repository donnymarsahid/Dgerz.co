const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const cors = require('cors');

const category = require('../data/category.json');

router.use(cors());
router.use(express.json());

router.get('/', (req, res) => {
  res.send(category);
});

router.post('/', (req, res) => {
  const { name, images } = req.body;

  category.push({
    id: uuidv4(),
    name,
    images,
    create: moment(new Date()).format('LLL'),
  });

  fs.writeFileSync('data/category.json', JSON.stringify(category));
  res.send('success');
});

module.exports = router;
