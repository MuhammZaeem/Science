const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let number = 0; // Store the number in memory (for simplicity)

app.get('/api/number', (req, res) => {
    res.json({ number });
});

app.post('/api/number', (req, res) => {
    number = req.body.number;
    res.json({ message: 'Number saved successfully!' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
