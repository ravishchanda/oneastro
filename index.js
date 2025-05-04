const express=require('express');


const app=express();
app.use(express.json()); // Middleware to parse JSON bodies
const mongoose=require('mongoose');
const cors=require('cors'); 
const dotenv=require('dotenv');
dotenv.config();    

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/oneastro';
 
//const postRoute=require('./routes/post.js');

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.use(cors()); // Enable CORS for all routes  



mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error connecting to MongoDB:', err);
})


//app.use('/api/post',postRoute);     


app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.get('/api',(req,res)=>{
    res.send('Hello from API!');
})


