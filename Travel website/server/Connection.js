

const mongoose=require('mongoose');
const MONGO_URI='mongodb+srv://mishravicky0141:DATABASE_PASSW@cluster0.th3hfpm.mongodb.net/krishna'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // fRlM5OHjJqmLKvsz