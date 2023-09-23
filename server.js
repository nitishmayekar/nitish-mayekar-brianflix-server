const express = require('express');
const app = express();


app.get('/', (req, res) => {
    // send some text back as a response
    res.send('Express is running!');
});
// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});