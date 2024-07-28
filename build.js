import fs from 'fs';
import transfers from './transfers.js';

const trans = async () => {
    try {
        console.log('Starting data fetch...');
        const data = await transfers(2);
        console.log('Data fetched:', data);
        fs.writeFileSync('transfers.json', JSON.stringify(data, null, 2));
        console.log('Data saved to transfers.json');
    } catch (error) {
        console.error('Error fetching transfers data:', error);
    }
};

trans()