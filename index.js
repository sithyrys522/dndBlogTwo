const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const favicon = require('serve-favicon');

const articleDir = path.join(__dirname, 'views/articles/');
let articles = [];
fs.readdir(articleDir, (err, files) => {
    if (err) {
        return console.error(err);
    }
    files.forEach(file => {
        fs.readFile((articleDir + file), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return
            }
            let $ = cheerio.load(data);
            let post = {
                title: $('h2').text(),
                content: $('p').text(),
                number: $('#post-number').text(),
                date: $('h3').text()
            }
            articles.splice(post.number - 1, 0, post);
        })
    })
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.get('/', (req, res) => {
    res.render('index', {articles});
})

app.get('/articles/:id', (req, res) => {
    res.render('Article-layout', {id: req.params.id});
})

app.listen(port, () => {
    console.log(`App listening at http://localhost${port}`);
})