import { Todo } from "../models/Todo.js"
import { Router } from "express"

export const todosRouter = Router()

todosRouter.post('/todos', async (req, res) => {
  const { title } = req.body
  try {
    await Todo.create({ title, status: 'active' })
    res.json({ message: 'Todo created successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }  
})
