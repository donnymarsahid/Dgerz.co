const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

const categoryRouter = require('./routes/category');
const saleRouter = require('./routes/sale');
app.use('/category', categoryRouter);
app.use('/sale', saleRouter);

app.get('/', (req, res) => {
  res.send({
    message: 'auth token',
  });
});

app.listen(PORT, () => {
  console.log(`server is ok in port ${PORT}`);
});

module.exports = app;
