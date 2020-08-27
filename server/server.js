const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 9060;

app.use(cors());
app.use(bodyParser.json());
app.use(
    '/api',
    (req,res)=>{
        if(req.body['id']=='a' && req.body['pw']=='a'){
            res.json({permission:true});
        }
        else{
            res.json({permission:false});
        }
    });
app.listen(port,()=>{console.log(`server running on ${port}`)});