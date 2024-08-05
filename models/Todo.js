import { connection } from "../config/database"
import { DataTypes } from "sequelize"
console.log("Database connection imported.")

export const Todo = connection.define('todo', {
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('active', 'completed'),
    allowNull: false
  }
})
