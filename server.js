const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {
            id: 1,
            firstName: 'Elliot',
            lastName: 'Spencer'
        },
        {
            id: 2,
            firstName: 'Parker',
            lastName: 'Parker'
        },
        {
            id: 3,
            firstName: 'Alec',
            lastName: 'Hardison'
        }
    ];
    res.json(customers);
});


const port = 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
