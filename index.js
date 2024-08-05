import { connection, authenticate } from "./config/database.js"
import express from 'express'

authenticate(connection).then(() => {
  connection.sync()
})

const app = express()

app.use(express.json())

// app.use(todosRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
