const path = require('path');
const express = require("express")
const hbs = require('hbs')

const publicDirectory = path.join(__dirname,'../public')
const viewDirectory = path.join(__dirname,'../templates/views')
const partialsDirectory = path.join(__dirname,'../templates/partials')
const app = express()

app.use(express.static(publicDirectory))

app.set('views', viewDirectory);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsDirectory);       
  


app.get('/help/*',(req,res)=>{  
    res.render("404",{
        title :'404',
        name : "Kaushal Rathore",
        errorMessage : "Help Artical Not Found"
    })
       
})
   app.get('/about',(req,res)=>{
    res.render('about',{
    title : 'About Me',
    name : 'Kaushal'
    })
    })
    app.get('/help',(req,res)=>{
    res.render('help',{
    helpText : "This is some helpful text",   
    title:'Help',
    name : 'Kaushal'
})
})

app.listen(3000, () => {     
    console.log("Server is up on the port 3000")
})    