const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  name: {type: String, required: true},
  comment:{type: String, required: true},
  image:{type: String, required: true},
},
{
  timestamps: true
}

)


const investmentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required:true,
    unique: true
  },
  image:{
    type: String,
    required: true
  },
category: {
  type:String,
  required: true
},
  description: {
    type: String,
    required: true
},
reviews: [reviewSchema],
rating:{
  type: Number,
  required: true,
  default: 0
},
numReviews:{
  type: Number,
  required: true
},
price:{
  type: Number,
  required: true,
  default: 0
},
investmentInStock:{
  type: Number,
  required: true,
  default: 0
},


})

const Investment = mongoose.model('Investment', investmentSchema)

module.exports = Investment