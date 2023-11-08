const express= require('express');
const JobsData=require('./data.json')
const cors=require('cors')
const app=express()
const port=3000;

app.use(cors())


app.get('/', (req, res)=>{
    res.send(" This is Mehedi Hasan ,, I am from Bangladesh")
})


app.get('/jobsDetails',(req, res)=>{
    res.send(JobsData)
})
app.get('/jobsDetails/:id' ,(req, res)=>{
    const id=parseInt(req.params.id);
    console.log("I need Id ", id)
    const data=JobsData.find(JobData=>JobData.id===id)||{};
    res.send(data);
}) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })