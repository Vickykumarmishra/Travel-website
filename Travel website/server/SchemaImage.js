const mongoose = require("mongoose");

const SchemaImage = new mongoose.Schema(
  {
   imageUrl:String
  }
  
);

mongoose.model("photos", SchemaImage);
