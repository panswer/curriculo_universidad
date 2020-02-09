const express = require('express');
const cors = require('cors');
const colors = require('colors');
const path = require('path');
const fs = require('fs');

// Server Config
require('./config/config');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded(app));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
    let validate = fs.existsSync(path.resolve(__dirname, '../public/index.html'));
    if (validate) {
        res.sendFile(path.resolve(__dirname, '../public/index.html'));
    } else {
        res.status(404).send('404');
        console.log(`Error en ruta: ${path.resolve(__dirname, '../public/index.html')}`);
    }
});

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`${colors.red('ERROR')}: server ${colors.red('not INITED')} in PORT ${colors.red(process.env.red(process.env.PORT))}`);
    } else {
        console.log(`${colors.green('SUCCESS')}: server ${colors.green('INITED')} in PORT ${colors.green(process.env.PORT)}`);
    }
});