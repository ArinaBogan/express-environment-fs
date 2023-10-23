const express = require('express');
const bodyParser = require('body-parser');
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require('./service');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const data = getAllEnvironment();
    res.status(200).send(data)
});

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = getEnvironmentById(id);
    }
    catch (error) {
        res.status(404).send(data);
    }
});

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = createEnvironment(label, category, priority);
    }
    catch (error) {
        res.status(405).send(data);
    }
});

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = updateEnvironment(id, label, category, priority);
    }
    catch (error) {
        res.status(405).send(data);
    }
});

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = deleteEnvironment(id);
    }
    catch (error) {
        res.send(error.message);
    }
});

app.listen(3000, () => {
    console.log('this server is runnig on port 3000');
});