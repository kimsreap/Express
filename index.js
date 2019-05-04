// const{createServer}= require('http')

// createServer((req, res)=> {
//     switch (req.url) {
//         case '/':
//         res.end('Hello World!!!!')
//         break
//         default:
//         res.end(`Cannot GET ${req.url}`)
//     }
// }).listen(3000)
//Users:
// GET /users called index method 
// GET /users/id called show method
// GET /users/new called new method
// POST /users  called create method
// PUT /user/id  called it update method
// DELETE /users/id  called it destroy method
const express = require('express')
const app = express()
const {join} = require('path')
// app.get('/hotdog', (req, res) => {
//     res.send('some')
// })
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'abc@gmail.com',
    
    },
    {
        id: 2,
        name: 'John Doe2',
        email: 'abc@gmail.com',
    
    }
]
//const users = []
// GET all hotdogs
 app.get('/users', (req,res)=> {
    // res.send(users)  
    res.json(users)
})
// GET one user
app.get('/users/:id', (req,res)=> {
    users.forEach(user => {
        if (user.id === parseInt(req.params.id)) {
            // res.send(user)
            res.json(user)
        }
    })
    
    // console.log(req.params.id)
})

// app.post('/dUsers/', (req,res)=> {
//     console.log(req.body)
//     users.forEach(user => {
//         if (user.id === parseInt(req.body.id)) {
//             // res.send(user)
//             users.splice(req.body.id)
//             res.send(users)
//         }
//     })
    // console.log(req.params.id)
// })
// app.post('/hotdog', (req,res)=>{
// console.log(req.params)
//    res.send(req.params.text)
// })

app.post('/users', (req,res)=> {
    let newUser = req.body
    console.log(newUser)
    newUser.id = users.length +1
    users.push(newUser)
    res.send('User was added')
    console.log(newUser)
})

app.get('/', (req,res)=> {
    res.sendFile(join(__dirname + 'index.html'))
})
app.listen(3000)