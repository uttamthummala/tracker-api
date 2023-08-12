const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "User email is required"],  // u will get it automatically from google login
  },
  priceLocation: {
    type: String,
    required: [true, "Class or id is required ro get the price"],    //
  },
  nameLocation: {
    type: String,
    required: [true, "Location of name is required"],
  },
  imageLocation: {
    type: String,
  },
  url: {
    type: String,
    required: [true, "Link of the item is required"],  //client enters the link
  },
 image: String,
 type: {
    type: String,
    default: [true, "Please provide if stock or product needs to be tracked"],
  },
  history: [
    {
      price: Number,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  budget: {
    type: Number,
    required: [true, "Please provide your budget"], // from client
  },
  Mailed: {
    type: Boolean,
    default: false,
  },
});

const Site = mongoose.model("sites", siteSchema);


module.exports= Site;
