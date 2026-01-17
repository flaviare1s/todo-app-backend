import { connection, authenticate } from "./config/database.js"
import express from 'express'
import cors from 'cors'
import { todosRouter } from "./routes/todos.js"

authenticate(connection).then(() => {
  connection.sync()
})

const app = express()

app.use(
  cors({
    origin: ["https://flaviare1s.github.io", "http://localhost:5173", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json())

app.use(todosRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
