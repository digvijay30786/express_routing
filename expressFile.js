const express = require('express');
const user = require('./userData');
const app = express();

app.use(express.json());


app.listen('3000', () => {
    console.log('server establish');
});


app.get('/', (req, res) => {
    res.send("Welcome to Home page");
});

app.get('/users', (req, res) => {
    
    res.json(user);
});

app.post('/users', (req, res) =>
{
    user.push(req.body);
    res.json(user);
    
});

app.patch('/users/:id', (req, res) => {
    let id = req.params.id;
    
    let first_name = "Digvijay";
    let last_name = "singh";

    let index = user.findIndex((user) => {
        return (user.id == id);
    });

    if (index >= 0) {
        user[index].first_name = first_name;
        user[index].last_name = last_name;
        res.json(user);
    }

});


app.delete('/users/:id', (req, res) =>
{
    let id = req.params.id;
    
    let first_name = "Digvijay";
    let last_name = "singh";

    let index = user.filter((user) => {
        return (user.id != id);
    });
    res.json(index);
})