const express = require("express")
require("./db/conns")
const User = require("./models/userMessage")
const path = require("path")
const hbs = require("hbs")
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const staticpath = path.join(__dirname,"../Public")
const templatePath= path.join(__dirname,"../templates/views")
const partialsPath= path.join(__dirname,"../templates/partials")
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/jq', express.static(path.join(__dirname, '../node_modules/jquery/dist')))
app.use(express.static(staticpath))
app.set("view engine","hbs")
app.set ("views",templatePath)
hbs.registerPartials(partialsPath)



app.get ("/", (req,res)=>{
    res.render("index")
})


app.post("/contact", async (req,res) =>{
    try{
        const data = req.body
        const userdata = new User (data)
        await userdata.save()
        res.status(201).render("index")
    }catch(err){
        res.status(500).send(err)
    }
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})