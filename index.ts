import express from 'express';
import path from 'path';

const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
