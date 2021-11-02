import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'
//
import neverLateRouter from './routers/neverLateRouter.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// 
mongoose.connect(
    process.env.NeverLate_DB_URI || 'mongodb://localhost/neverlate',
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    }
)

//
app.use('/profile', neverLateRouter)

// 
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

// 
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})

