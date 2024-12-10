
require('dotenv').config();
const mongoose=require('mongoose');
const MONGO_URI='mongodb+srv://mishravicky0141:${process.env.DATABASE_PASSW}@cluster0.th3hfpm.mongodb.net/krishna'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
