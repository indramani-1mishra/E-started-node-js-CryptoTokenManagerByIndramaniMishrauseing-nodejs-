const mongoose = require('mongoose')
const { MONGO_URL } = require('./serverconfig')

const connectDv = async()=>{
   try{
    await mongoose.connect(MONGO_URL);
    console.log("mongodb connected successfully");
   }catch(error){
      console.log("error in connecting mongodb "+error);
   }
}

module.exports =connectDv;