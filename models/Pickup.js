const mongoose = require ("mongoose");
const schema = mongoose.Schema;

const pickupSchema = new schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    required: true
  },
  pickupLocation: {
  type: String,
   required: true
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  
});


const Pickup = mongoose.model('Pickup', pickupSchema);

module.exports = Pickup;