const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

const categoryRouter = require('./routes/category');
const saleRouter = require('./routes/sale');
const loginAdminRouter = require('./routes/loginAdmin');

app.use('/category', categoryRouter);
app.use('/sale', saleRouter);
app.use('/loginAdmin', loginAdminRouter);

app.listen(PORT, () => {
  console.log(`server is ok in port ${PORT}`);
});

module.exports = app;
