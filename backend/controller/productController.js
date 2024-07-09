let db =  require('../databaseConfig.js')
 
exports.productSave = (req,res)=>{
    let productBrand = req.body.productBrand
    let productPrice = req.body.productPrice
    let productRating = req.body.productRating
    let productType = req.body.productType
    let  image = req.file.filename
let value =[[productBrand,productPrice,productRating,productType,image]]

db.query('insert into product(productBrand,productPrice,productRating,productType,image) value?',[value],(err,result)=>{
    if(err) throw err
    else{
        res.send('data saved')
    }
})

} 

exports.getProduct = (req,res)=>{
    let sql = 'select * from product'

db.query(sql,(err,result)=>{
    if(err)throw err
    else{
        res.json(result)
    }
})

}


exports.getProductById = (req,res)=>{
    let id = req.params.id
    let sql = 'select * from product where id =?'

db.query(sql,[id],(err,result)=>{
    if(err)throw err
    else{
        res.json(result)
    }
})

}


exports.deleteProduct = (req,res)=>{
    let id = req.params.id
    let sql = 'delete from product where id =?'
    db.query(sql,[id],(err,result)=>{
        if(err)throw err
        else{
            res.send('deleted')
        }
    })
}

exports.updateProduct = (req,res)=>{
    let id = req.params.id
    let val = req.body
let sql = ' update product  set ? where id=?'
db.query(sql,[val,id],(err,result)=>{
    if(err)throw err
    else{
        res.send('data updated')
    }
})
}


 
// search product
exports.searchProduct = (req,res)=>{
    let inp = req.params.inp
    // let id = req.params.id
    // let val=req.body
    let sql = 'select * from product where productType like ?'
    // let value =[[id]]
    db.query(sql,['%' + inp + '%'], (err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}