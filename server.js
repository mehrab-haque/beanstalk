const express = require('express')

const app = express()

app.get('/login',(req,res)=>{
  res.send({
    status:'login_updated'
  })
})

app.get('/reg',(req,res)=>{
  res.send({
    status:'registration'
  })
})

const port=process.env.port || 3000
app.listen(port,()=>{
  console.log(`server running on port ${port}`)
})
