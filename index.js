const express = require('express');
const morgan = require('morgan');

const siteRouter = require('./routes/siteRouter');
const priceRouter = require('./routes/priceRouter');
const app = express();

app.use(morgan('dev'));



app.use('/api/v1/sites',siteRouter);
app.use('/api/v1/price',priceRouter);

module.exports = app;