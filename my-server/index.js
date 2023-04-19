const express = require('express');
const app = express();
const port = 3002;
const morgan = require('morgan');
app.use(morgan('combined'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));