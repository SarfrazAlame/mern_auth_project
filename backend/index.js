import express from 'express'
import connectDataBase from './db/database.js'
import dotenv from 'dotenv'
import userRoutes from './routers/user_routes.js'
import authRoutes from './routers/auth_routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

dotenv.config()

connectDataBase()

app.use(cookieParser());
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

app.listen(4000, () => {
    console.log('server is running')
})  