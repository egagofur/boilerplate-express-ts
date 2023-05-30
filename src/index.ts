import express, { Application, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'

const app: Application = express()
dotenv.config()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!')
})

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})
