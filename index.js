import express from 'express';
import transfers from './transfers.js'; // Use ES6 import syntax
import cors from 'cors'



const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.get('/transfers', async (req, res) => {
    console.log('Fetching transfers data...');
    const filePath = path.join(__dirname, 'transfers.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading data file');
      return;
    }
    res.json(JSON.parse(data));
  });
    // try {
    //     const data = await transfers(2);
        
    //     res.send(data);

    //     console.log('Transfers data fetched successfully');

    // } catch (error) {
    //     res.status(500).send('Error fetching transfers data');
    // }
});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
