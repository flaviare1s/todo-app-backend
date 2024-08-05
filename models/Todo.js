import { connection } from "../config/database.js"
import { DataTypes } from "sequelize"

export const Todo = connection.define('todo', {
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('active', 'completed'),
    defaultValue: 'active'
  }
})
