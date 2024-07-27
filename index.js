import express from 'express';
import transfers from './transfers.js'; // Use ES6 import syntax

const app = express();
const PORT = 3000;

app.get('/transfers', async (req, res) => {
    console.log('Fetching transfers data...');
    try {
        const data = await transfers(2);
        // res.send(`${data}`);
        res.send('Transfers data fetched successfully');

    } catch (error) {
        res.status(500).send('Error fetching transfers data');
    }
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
