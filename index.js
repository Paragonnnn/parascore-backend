import express from 'express';
import transfers from './transfers.js'; 
import { topTransfer } from './transfers.js'; 
import cors from 'cors'
import path from 'path';
import fs from 'fs';




const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.get('/', async (req,res) => {
  res.send('Home')
})

app.get('/transfers', async (req, res) => {
  const topTransfers = req.query.topTransfers;
    console.log('Fetching transfers data...');

    // const filePath = path.join(__dirname, '');
  // fs.readFile('transfers.json', 'utf8', (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).send('Error reading data file');
  //     return;
  //   }
  //   res.json(JSON.parse(data));
  // });

    try {
        const data = await (topTransfers ? topTransfer() : transfers(1));
        
        res.send(data);

        console.log('Transfers data fetched successfully');

    } catch (error) {
        res.status(500).send('Error fetching transfers data');
    }
});






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
