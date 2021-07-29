const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cors = require('cors');

const adminLogin = require('../data/adminLogin.json');

router.use(express.json());
router.use(cors());

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const admin = adminLogin[0].username;
  const adminPassword = adminLogin[0].password;
  const idAdmin = adminLogin[0].id;

  if (username !== admin) {
    res.send({
      message: 'username/password is wrong',
    });
  } else {
    if (password !== adminPassword) {
      res.send({
        message: 'username/password is wrong',
      });
    } else {
      const data = idAdmin;
      const token = jwt.sign({ data }, 'jwtSecretServer', {
        expiresIn: 300,
      });
      res.json({
        token: token,
      });
    }
  }
});

module.exports = router;
