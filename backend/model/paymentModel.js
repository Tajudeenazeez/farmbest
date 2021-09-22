const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  name: {type: String, required: true},
  rating:{type: Number, required: true},
  comment:{type: String, required: true},
},
{
  timestamps: true

}
)

const investmentOrderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },

  investmentOrder: [{
    name: { type: String, required: true },
    qty: {type: Number, required: true },
    image: { type: String, required: true },
    price: {type: Number, required: true },
    investment: { 
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'investment'
    }
    
  }
],
 
    paymentMethod:{
    id:{type: String}
    //required: true
},
  paymentResult: {
    id: { type: String },
    status: { type: String}
},
taxPrice: {
  type: String,
  required: true, 
   default: 0.0
},

totalPrice: {
  type: String,
  required: true, 
   default: 0.0
},
isPaid: {
  type: Boolean,
  required: true, 
   default: false
},
paidAt: {
  type: Date
},
isDelivered: {
  type: Boolean,
  required: true, 
   default: false
},
deliveredAt: {
  type: Date
}
},
{
  timestamps : true 

})

const investmentOrder = mongoose.model('investmentOrder', investmentOrderSchema)

module.exports = investmentOrder