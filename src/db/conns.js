const mongoose = require("mongoose")


const db_link = "mongodb+srv://sak:saket1101@cluster0.56mrpuh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db_link)
.then(()=>{
    console.log("Db is connected")
}).catch((err)=>{
    console.log("Db in not connected",err)
})