const express = require('express')
const path = require('path')
const app = express()

// View Engine Setup
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

// Static Middleware
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    res.render('Demo',{
        title: 'View Engine Demo'
    })
})

app.listen(8080,function(error){
    if(error) throw error
    console.log("Server created Successfully")
})