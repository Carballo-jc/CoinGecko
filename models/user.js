const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es Obligatorio"],
  },
  lastName: {
    type: String,
    required: [true, "El Apellido es Obligatorio"],
  },
  userName:{
    type:String,
    required: [true, "El Usuario es Obligatorio"],
    trim: true,
    unique:true
  },
  password: {
    type: String,
    required: [true, "El el password es Obligatorio"],
    trim: true,
  },
  coins:[
    {currency:{
      type: Schema.ObjectId,
      ref:'Coin'
    }}
  ]
 },
 {
  timestamps: true,
  versionKey: false,
}
 );
UserSchema.methods.toJSON = function () {
  const { password,createdAt,updatedAt, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

module.exports = mongoose.model("User", UserSchema);
