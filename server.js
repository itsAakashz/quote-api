const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express();
const port = 8000;

app.use(express.json());

let quotes = [];
fs.readFile('./quotes.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    quotes = JSON.parse(data);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

//all quotes 
app.get('/quotes', (req, res) => {
    res.json(quotes);
});

app.get('/quotes/:category', (req, res) => {
    const category = req.params.category;
    const filteredQuotes = quotes.filter(quote => quote.category.toLowerCase() === category.toLowerCase());
    if (filteredQuotes.length === 0) {
        res.json({ message: 'No quotes found in this category' });
    } else {
        res.json(filteredQuotes);
    }
});

//single quote
app.get('/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

app.get('/quote/:category', (req, res) => {
    const category = req.params.category;
    const filteredQuotes = quotes.filter(quote => quote.category.toLowerCase() === category.toLowerCase());
    if (filteredQuotes.length === 0) {
        res.json({ message:'No quotes found in category ' + category });
    } else {
        const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
        res.json(randomQuote);
    }
});


app.get('/categories', (req, res) => {
    const categories = quotes.map(quote => quote.category);
    const uniqueCategories = [...new Set(categories)];
    res.json(uniqueCategories);
});

app.post('/post', (req, res) => {
    const newQuote = req.body;
    quotes.push(newQuote);
    fs.writeFile('./quotes.json', JSON.stringify(quotes, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to save quote' });
            return;
        }
        res.status(201).json(newQuote);
    });
});

app.listen(port, () => {
    console.log(`Quote API server running at http://localhost:${port}`);
});