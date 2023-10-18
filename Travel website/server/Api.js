const express=require('express');
const mongoose = require("mongoose");
require("./Connection");
require('dotenv').config()
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary=require('cloudinary').v2
const app=express();
const cors = require("cors"); //iske bina kam nahi kar raha
app.use(cors());
app.use(express.json())

cloudinary.config({
  cloud_name: 'dzw6geqqi',
  api_key: '128965351476669',
  api_secret: 'vKzF0ACjhUScXJI1fIgcYiiCgjU'
 });

const Product=require('./SchemaRide');
require("./SchemaRide")
require("./SchemaImage")
const photos=mongoose.model("photos")



app.get('/',(req,res)=>{
    res.send('server working');
})

app.post('/post',async (req,res)=>{
   let data=new Product(req.body);
   let result=await data.save()
   res.send(result);
})

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params)
  let data = await Product.deleteOne(req.params);
  resp.send(data);
}) 


const multer = require("multer");

const storage = multer.diskStorage({
  destination:'uploads/'
});



const upload = multer({ storage: storage });


app.post('/upload', upload.single('image'), async function (req, res, next) {
  //image is the name of the input field
  cloudinary.uploader.upload(req.file.path, async function(err, result) {
     if(err) {
       console.log(err);
       res.status(500).send(err);
     } else {
       console.log('File uploaded to Cloudinary');
       const photo=new photos();
       photo.imageUrl=result.secure_url
       await photo.save()
       res.status(200).send(result);
     }
  });
 });

app.get("/getter", async(req,res)=>{


    Product.find({}).then((data)=>{
      res.send(data)
    });
 
})

app.get("/get-image", async (req, res) => {
  //yaha se ham frontend me image ko bhej rahe hai to show it on browser
  try {
    photos.find({}).then((data) => {
      res.send(data );
    
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.listen(8000);





  

  
