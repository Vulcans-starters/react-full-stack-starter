const express = require('express');

const app = express();

app.get('/api/customers', (req, res)=> {
        //This is a hard coded array, just for the boilerplate. This data should come from a database in your projects
        const customers = [
                {id: 1, firstName: 'John', lastname: 'Doe'},
                {id: 2, firstName: 'Mary', lastname: 'Smith'},
                {id: 3, firstName: 'Sarah', lastname: 'Swanson'}
        ]

        res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));