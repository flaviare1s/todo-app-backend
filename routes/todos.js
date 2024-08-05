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

todosRouter.get('/todos', async (req, res) => {
  const todos = await Todo.findAll()
  res.json(todos)
})

todosRouter.get('/todos/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id)
  if (todo) {
    res.json(todo)
  } else {
    res.status(404).json({ message: 'Todo not found' })
  }
})

todosRouter.put('/todos/:id', async (req, res) => {
  const { title, status } = req.body

  try {
    const todo = await Todo.findByPk(req.params.id)

    if (todo) {
      await todo.update({ title, status })
      res.json({ message: 'Todo updated successfully' })
    } else {
      res.status(404).json({ message: 'Todo not found' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

todosRouter.delete('/todos/completed', async (req, res) => {
  try {
    const result =await Todo.destroy({
      where: { status: 'completed' }
    })
    if (result > 0) {
      res.json({ message: 'Todos deleted successfully' });
    } else {
      res.status(404).json({ message: 'No completed todos found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

todosRouter.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id)

    if(todo) {
      await todo.destroy()
      res.json({ message: 'Todo deleted successfully' })
    } else {
      res.status(404).json({ message: 'Todo not found' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
