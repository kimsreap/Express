const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, '')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const routes = require('./routes/index.js')

routes(app)

// const users = [
//     {
//         id: 1,
//         name: 'abie',
//         email:'jdhfalhf@gamile.com',
//         password:'ddiyaiuy12'
//     },
//     {
//         id: 2,
//         name: 'allie',
//         email:'dhfdjh@.com',
//         password:'d12y12'
//     },
// ]




app.listen(process.env.PORT || 3000)