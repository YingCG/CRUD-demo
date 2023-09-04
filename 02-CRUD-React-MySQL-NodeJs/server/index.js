// Step 1: server/index.js
const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// // Step 3: Connect with database, in this case mysql
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'loansystem'
})

app.post('/create', (req, res) =>{
    // req is what we get from front end
    // res is what we sent to the front end
    console.log('body')
    console.log(req.body)

    // this data going to our database
    const borrower = req.body.name
    const productName = req.body.item
    const description = req.body.description

    // insert into database
    db.query("INSERT INTO products (`ProductName`, `Description`, `BorrowerName`, `Status`) VALUES (?, ?, ?, ?)",
    [productName, description, borrower, true],
     (err, result) => {
        if (err){
            console.log(err)
        } else{
            res.send('Created Loan request')
        }
     })
})

app.get('/products', (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

// // Step 2: Create an API Endpoint
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


port = 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})