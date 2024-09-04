import { config } from "dotenv"
config()
import { Sequelize } from "sequelize"

export const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: false,
    },
  },
);

export async function authenticate(connection) {
  try {
    await connection.authenticate()
    console.log("Connection has been established successfully.")
  } catch (err) {
    console.error("Unable to connect to the database:", err)
  }
}
