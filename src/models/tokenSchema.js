const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    tokenname:{
        type:String,
        required: true, 
    },
    tokenSymbol:{
       type: String,
       unique:true,
       required: true, 
    }
    ,
    launchYear:{
        type:Number,

    }
    
},{
    timestamps:true,
});

const Token = mongoose.model('Token',tokenSchema);
module.exports =Token;