const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
const courses = require('./data/course.json');

app.get('/', (req, res) => [
    res.send('api Running')
]);

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courses.find(course => course.id == id);
    res.send(singleCourse)
});

app.listen(port, () => {
    console.log('server is running on port', port);
});

module.exports = app;