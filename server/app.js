import express from "express"; 
import dotenv from "dotenv"; 
dotenv.config(); 
const app = express ();
const port=process.env.port;
app.get("/class",(req,res)=> {
    try {
        let a = 10; 
        console.log(a);
        res.status(200).json({msg:"hello cfi",num: a})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})
        
    }
})
app.listen(port,() => {
    console.log(`server started http:// localhost:${port}`);  
})
