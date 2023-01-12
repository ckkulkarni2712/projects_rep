import express from 'express'
import mongoose from 'mongoose'
import Videos from './dbmodel.js'
import Cors from 'cors'


const app = express()
const port = process.env.PORT || 9000
const connection_url = "mongodb+srv://Chandu:chandu123@cluster0.c9x0dmc.mongodb.net/tikTokDB?retryWrites=true&w=majority"

app.use(express.json())
app.use(Cors())


mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.get("/", (req, res) => res.status(200).send('Tiktok Mern Clone'))
app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if (err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})
app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})


app.listen(port,()=>console.log(`Listening on logcalhost: ${port}`))

