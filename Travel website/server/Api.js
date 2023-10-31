const express=require('express');
const mongoose = require("mongoose");
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
require("./Connection");
require('dotenv').config()
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary=require('cloudinary').v2
const app=express();
const cors = require("cors"); //iske bina kam nahi kar raha
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

cloudinary.config({
  cloud_name: 'dzw6geqqi',
  api_key: '128965351476669',
  api_secret: 'vKzF0ACjhUScXJI1fIgcYiiCgjU'
 });

const Product=require('./SchemaRide');
const sign=require('./SchemaForm');
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



app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;// '/signup' request jab bhejenge client side se to us request ke body k andar data hoga;us data ko initialize kar diye.

  // Check if the username is already taken
  const existingUser = await sign.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  // Create a new user document 
  const newUser = new sign({ username,email, password: hashedPassword  });
  try {
    await newUser.save();
    // User registration successful
    res.status(200).json({ message: 'User registered successfully' });
    
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Failed to register user' });
  }
});

app.post('/login', async (req, res) => {
 
  const { username, email,password } = req.body;
  const passw=password;
  console.log('Entered username:', username);
  console.log('Entered password:', password);
  const user = await sign.findOne({ username });
  const pass = await sign.findOne({ password });

  if (!user) {
    console.log('user')
    return res.status(401).json({ message: 'Authentication failed' });
    
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    console.log("password invalid")
    return res.status(401).json({ message: 'Authentication failed' });
   
  }

  const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

  res.json({ token });
  
});
app.listen(8000);





  

  
