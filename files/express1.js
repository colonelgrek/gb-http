const express = require('express')
const fs = require('fs')

const app = express()
const port = 8000


app.route('/get').get((req, res) => {
	return res.status(200).send("success")
}).all((req, res) => {
	return res.status(405).send("HTTP method not allowed")
});

app.use((req, res) => {
  return res.status(404).send('Not found');
});


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
