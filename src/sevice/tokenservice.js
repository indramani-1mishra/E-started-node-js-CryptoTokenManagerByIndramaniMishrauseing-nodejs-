const { findById } = require("../models/tokenSchema");
const { findTokenBySymbol, createToken, findAllToken, updateTokenById, deleteToken, findTokenById } = require("../repository/tokenrepo");


const createTokenfromservice= async(tokendetails)=>{
    try{
      const  {tokenSymbol}= tokendetails;
      const isAllreadyAdd = await findTokenBySymbol(tokenSymbol);
      if(isAllreadyAdd){
        console.log(" Token symbol already exists. Please use a unique symbol");
        throw {message:"user is already add with this symbol"}
      } 
      const response =  await createToken(tokendetails);
      return response;
    }catch(error){
       console.error(" Error in createTokenFromService:", error);
        throw error;
    }
}
 
const getAllToken = async()=>{
    try{
      const response = await findAllToken();
      return response;
    }catch(error){
        console.error(" Error in getAllToken:", error);
        throw error;
    }
}

const getTokenById = async(id)=>{
    try{
     const getTokenByIdResponse = await findTokenById(id);
     return getTokenByIdResponse;
    }
    catch(error){
        console.error(" Error in getTokenById:", error);
        throw error;
    }
}

const UpdateToken = async(id,tokendetails)=>{
    try{
      const updataTokenResponse = await updateTokenById(id,tokendetails);
      return updataTokenResponse;
    }catch(error){
    console.error(" Error in UpdateToken:", error);
    throw error;
    }
}

const removeToken = async(id)=>{
    try{
     const deleteResponse = await deleteToken(id);
     return deleteResponse;
    }
    catch(error){
        console.error(" Error in deleteToken:", error);
        throw error;
    }
}
const getTokenBySymbol = async (symbol)=>{
    try{
      const getTokenByIdResponse =await findTokenBySymbol(symbol);
      return getTokenByIdResponse;
    }catch(error){
        console.error(" Error in  getTokenBySymbol:", error);
        throw error;
    }
}

module.exports={
    createTokenfromservice,
    getAllToken,
    getTokenById,
    getTokenBySymbol,
    updateTokenById,
    removeToken,
}