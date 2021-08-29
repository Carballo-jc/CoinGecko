const { Schema, model } = require("mongoose");

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
  currency:{
    type:String,
    emun: ['EURO','DOLAR','PESOS']
  },
  token:{
    type:String
  },
  expireToken:{
    type:Date
  }
  
 });
UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

module.exports = model("User", UserSchema);
