const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send("<h3>It's Alive!!");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});