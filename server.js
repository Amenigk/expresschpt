const express = require('express')
const app = express()
const port = 4000
const date = new Date()

// app.get('/HomePage.html', (req, res) => {
//     res.send(' <h1 > Hello your are in our home  </h1>')
//   })
//   app.get('/Services', (req, res) => {
//     res.send('Services')
//   })
//   app.get('/Contact', (req, res) => {
//     res.send('Contact')
//   })


const checkWorkingTime= ()=>{
    if( (date.getDay()=== 0) || (date.getDate()===6) || (date.getHours()<9) || (date.getHours()<17))
    {
    return false
    }
    return true
}       
const workingTime=(req,res,next)=>{
    
     checkWorkingTime()? next(): res.send("We are not Working") 

}

app.get('/',workingTime,(req, res) => {
    res.send(' <h1 > Hello your are in our home  </h1>')
  })



app.use(express.static('public'))












app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})