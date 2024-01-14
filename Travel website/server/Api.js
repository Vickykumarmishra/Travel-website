const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
require("./Connection");
require('dotenv').config();

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

cloudinary.config({
  cloud_name: 'dzw6geqqi',
  api_key: '128965351476669',
  api_secret: 'vKzF0ACjhUScXJI1fIgcYiiCgjU'
});

const Product = require('./SchemaRide');
const sign = require('./SchemaForm');// the exported collection and schema is stored in sign.if we want to perform crud in db then we need it.
require("./SchemaRide");
require("./SchemaImage");

const photos = mongoose.model("photos");//photos is the model 

app.get('/', (req, res) => {
  res.send('server working');
});

app.post('/post', async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  res.send(result);
});

app.delete("/delete/:_id", async (req, resp) => {
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});

const multer = require("multer");

const storage = multer.diskStorage({
  destination: 'uploads/'
});

const upload = multer({ storage: storage });
/*Here,a Multer instance is created by passing the storage configuration. This upload instance is used to handle file uploads.*/
app.post('/upload', upload.single('image'), async function (req, res, next) {
  cloudinary.uploader.upload(req.file.path, async function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log('File uploaded to Cloudinary');
      const photo = new photos();/*creating a new photo instance. likewise we are creating new instanvce when we store info of new users in form collection.
      similarly we are storing a new photo or image hence we are creating a instance for that and then we are setting its imageurl property*/
      photo.imageUrl = result.secure_url;
      await photo.save();
      res.status(200).send(result);
    }
  });
/*This section handles the response from Cloudinary after attempting to upload the file.
If an error occurs during the upload, it logs the error and sends a 500 Internal Server Error response.
If the upload is successful, it logs a success message, creates a new photo instance, sets its imageUrl property to the Cloudinary URL, 
saves the photo to the database (assuming photos is a model/schema), and sends a 200 OK response with the Cloudinary result.

 */
});

app.get("/getter", async (req, res) => {
  Product.find({}).then((data) => {
    res.send(data);
  });
});

app.get("/get-image", async (req, res) => {
  try {
    photos.find({}).then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  //the data which is being sent by signup form will be inside request body.
  //const { username, email, password } = req.body;: This line of code is using destructuring assignment in JavaScript. 
  //It's extracting specific properties (username, email, and password) from the req.body object and assigning their values to individual variables.
  //username, email, and password are variable names that will be created based on the properties found in req.body.
  const existingUser = await sign.findOne({ username:username });//first username is the field name inside schema and secondone is the data recieved from frontend side.
  //If a document with the username specified in the query criteria is found in the "sign" collection, the existingUser variable will be assigned an object representing that document.
  //sign is the name of model. using model we perform crud operations
  if (existingUser) {//objects are considerd as trruthy value
    return res.status(400).json({ message: 'Username already taken' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);//10 is cost factor
  const newUser = new sign({ username, email, password: hashedPassword });//creating data using model

  try {
    await newUser.save();
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Failed to register user' });
  }
});

app.post('/login', async (req, res) => {
  const { username, email, password } = req.body;
  const user = await sign.findOne({ username:username });
 //findone will return the required data object or null. null is falsy whereas object is truthy.
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
//true or false will be returned in above variable.
  if (!isPasswordValid) { //!true=false
    return res.status(401).json({ message: 'Authentication failed' });
  }

  let token;
  if (username === "Vicky1999") {
    //generating token for admin role
    token = jwt.sign({ userId: user._id, role: 'admin' }, 'your_secret_key', { expiresIn: '1h' });
  } else {
    //generating token for users role
    token = jwt.sign({ userId: user._id, role: 'user' }, 'your_secret_key', { expiresIn: '1h' });
  }

  res.json({ token });
//Sends a JSON response containing the generated token. This response can be consumed by the client, typically for authentication purposes
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});


/*

bcrypt is a widely-used library in the realm of web development and security, primarily for securely hashing and salting passwords. Its main use is to enhance the security of user authentication systems by making it computationally expensive and time-consuming for attackers to perform password cracking.
Here's why bcrypt is commonly used and its primary uses:
Password Hashing: bcrypt is used to hash passwords before storing them in a database. Hashing transforms a plain text password into a fixed-length string of characters, which cannot be easily reversed to obtain the original password.
Salting: It automatically generates and manages a random salt for each password hash. Salting is a crucial security measure because it ensures that identical passwords don't result in the same hash. Even if two users have the same password, their hashes will be different due to the unique salts. 
This helps thwart precomputed or rainbow table attacks.
*/

/*The cost factor is an exponential factor, meaning that each increment of the cost factor doubles the amount of time it takes to compute the hash.
 Therefore, a cost factor of 10 is considered a reasonable and secure choice for hashing passwords.  */

 /*Tokens:- In summary, this code generates a JWT based on the role (admin or user) determined by the username. The generated token is then sent in a JSON response to the client. 
 The role information in the token can be used by the server to make authorization decisions when the token is presented in future requests. */