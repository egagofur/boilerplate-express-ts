import express, { Application, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import { logger } from './utils/logger'
import cors from 'cors'

const app: Application = express()
dotenv.config()
app.use(express.json())
app.use(cors())
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!')
})

app.listen(port, () => {
  logger.info(`server running on port: ${port}`)
})
