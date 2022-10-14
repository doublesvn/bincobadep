const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

app.unsubscribe(express.json())
app.get('/', (req,res)=>{
    return res.status(200).json({
        status:true,
        message: 'ini percobaan'
    })
})
app.use((req,res,next)=>{
    return res.status(404).json({
        status:false,
        message: 'tersesat'
    })
})
app.use((err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({
        status:false,
        message: err.message
    })
})

app.listen(PORT, ()=>console.log('listening on port', PORT))