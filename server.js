
const express = require('express');
const app = express();

// ROUTES
const adminRoute = require('./routes/admin')

app.use('/admin', adminRoute)

app.listen(5000);

