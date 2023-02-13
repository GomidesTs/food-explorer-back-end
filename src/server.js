const express = require('express')

const app = express()
const PORT = 3334

app.use(express.json())

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))