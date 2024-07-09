const express = require('express')
const db = require('./databaseConfig.js')
const cors=require("cors")
let productRouter = require('./routes/productRoute.js')
let adminRouter =require('./routes/adminRoute.js')
let cartRouter = require('./routes/cartRoute.js')
let clientRouter = require('./routes/clientRoute.js')
let app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))
db.connect((err)=>{
    if(err)throw err
    else{
        console.log("you are  successfully connected with databse.")
    }
})

let productTableQuery = `create table if not exists product (
    id INT NOT NULL AUTO_INCREMENT,
    productBrand VARCHAR(255),
    Image Varchar(255),
    productPrice VARCHAR(255),
     productRating VARCHAR(255),
    productType VARCHAR(255),
    Primary Key (id)
);`

db.query(productTableQuery,(err,result)=>{
    if (err) throw err
    else{
        console.log('product Table is created')
    }
})


let cartTableQuery = `create table if not exists cart (
    id INT NOT NULL AUTO_INCREMENT,
    productBrand VARCHAR(255),
    Image Varchar(255),
    productPrice VARCHAR(255),
     productRating VARCHAR(255),
    productType VARCHAR(255),
    Primary Key (id)
);`

db.query(cartTableQuery,(err,result)=>{
    if (err) throw err
    else{
        console.log('cart Table is created')
    }
})


let clientTableQuery = `create table if not exists clientdetail (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255),
    email Varchar(255),
    password VARCHAR(255),
    image VARCHAR(255),
    Primary Key (id)
);`

db.query(clientTableQuery,(err,result)=>{
    if (err) throw err
    else{
        console.log('clientdetail  Table is created')
    }
})



app.use('/api',clientRouter)

app.use('/api',productRouter)
app.use('/api',adminRouter)
app.use('/api',cartRouter)

app.listen(3000,()=>{
    console.log('you are streaming at 3000 port')
})