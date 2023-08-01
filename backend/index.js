const express =require('express');
const app =express();
const PORT=process.env.PORT || 30000;
app.get('/',(req,res)=>{
  res.send("Heyyyy Hello world !");
})

const start=async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log('server is running......',PORT);
        })

    }catch(err){

    }
}
start()