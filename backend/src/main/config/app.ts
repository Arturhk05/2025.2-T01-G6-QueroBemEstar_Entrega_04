import express, { Express } from "express"
import setupRoutes from "./routes"

export const setupApp = async (): Promise<Express> => {
  const app = express()
  app.use(express.json())
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-access-token",
    )
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS",
    )
    if (req.method === "OPTIONS") {
      return res.sendStatus(200)
    }
    next()
  })
  setupRoutes(app)
  return app
}
