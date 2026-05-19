import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/sign.html');
})
app.post('/submit', (req, res) =>{
    console.log(req.body);
    res.sendFile(__dirname + '/public/index.html', (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
})

app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
