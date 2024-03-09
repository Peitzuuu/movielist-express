const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/movies')
})

app.get('/movies', (req, res) => {
  res.send('Listing movies')
})

app.get('/movie/:id', (req, res) => {
  const id = req.params.id
  res.send(`Reading movie: ${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})