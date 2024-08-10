// Packages
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

// Utils
import connectiontoDB from './config/database.js'

// Routes
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const port = process.env.PORT || 5000

connectiontoDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Route
app.use('/api/users', userRoutes)

app.listen(port, () => console.log(`Server running on port: ${port}`)) 