const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send("<h3>It's alive!!!</h3>");
});

app.get('/version', (req, res) => {
	res.send({api_version: '0.0.0', client_version: 0});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});