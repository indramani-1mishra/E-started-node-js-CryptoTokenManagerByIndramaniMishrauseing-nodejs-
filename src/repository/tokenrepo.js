const Token = require("../models/tokenSchema");

const createToken =async(tokenDetails)=>{
try{
   const tokenResponse = await Token.create(tokenDetails);
   return tokenResponse;
}
catch(error){
    console.log("error in repository layer to create token")
    throw error;
}
}

const updateTokenById = async (tokenId, updatedDetails) => {
  try {
    const updatedToken = await Token.findByIdAndUpdate(
      tokenId,
      { $set: updatedDetails },
      { new: true } 
    );

    
    return updatedToken;
  } catch (error) {
    console.error(" Update failed:", error);
    throw error;
  }
};

const findAllToken = async()=>{
    try{
      const tokenresponse = await Token.find();
      return tokenresponse;
    }catch(error){
        throw error;
    }
}


const deleteToken = async(id)=>{
    try{
      const deleteTokenResponse = await Token.findByIdAndDelete(id);
      return deleteTokenResponse;
    }catch(error){
        console.log(error);
        throw error;
    }
}
const findTokenById= async(id)=>{
    try{
     const response = await Token.findById(id);
     return response;
    }
    catch(error){
        console.log(error+"error in find token by id ");
    }
}
const findTokenBySymbol = async (symbol) => {
  try {
    const token = await Token.findOne({ tokenSymbol: symbol });
    return token;
  } catch (error) {
    console.error(" Error finding token by symbol:", error);
    throw error;
  }
};
module.exports={
    createToken,
    deleteToken,
    updateTokenById,
    findAllToken,
    findTokenById,
    findTokenBySymbol,
}