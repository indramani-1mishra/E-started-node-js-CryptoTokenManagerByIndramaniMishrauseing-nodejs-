const { createTokenfromservice, getAllToken, getTokenById, getTokenBySymbol, updateTokenById } = require("../sevice/tokenservice");

const createTokenController= async(req,res)=>{
    try{
       const response = await createTokenfromservice({
        tokenname:req.body.tokenname,
        tokenSymbol:req.body.tokenSymbol,
        launchYear:req.body.launchYear,
       });
       return res.status(201).json({
        message:"token added successfully",
        status:201,
        data:response,
        error:{},
        success:true,
       });
    }catch(error){
       return res.status(501).json({
        message:"can not add token "+error,
        status:501,
        success:false,
        data:{},
       })
    }
}

const getAllTokensController = async (req, res) => {
  try {
    const response = await getAllToken();
    return res.status(200).json({
      success: true,
      message: "Tokens fetched successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Error fetching tokens",
    });
  }
};

const getTokenByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await getTokenById(id);
    return res.status(200).json({
      success: true,
      message: "Token found",
      data: response,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message || "Token not found",
    });
  }
};

const getTokenBySymbolController = async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const response = await getTokenBySymbol(symbol);
    return res.status(200).json({
      success: true,
      message: "Token found by symbol",
      data: response,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message || "Token not found by symbol",
    });
  }
};

const updateTokenController = async (req, res) => {
  try {
    const id = req.params.id;
    const { tokenname, tokenSymbol, launchYear } = req.body;
    const response = await updateTokenById(id, { tokenname, tokenSymbol, launchYear });
    return res.status(200).json({
      success: true,
      message: "Token updated",
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Failed to update token",
    });
  }
};
const deleteTokenController = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await removeToken(id);
    return res.status(200).json({
      success: true,
      message: "Token deleted",
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Failed to delete token",
    });
  }
};

module.exports = {
  createTokenController,
  getAllTokensController,
  getTokenByIdController,
  getTokenBySymbolController,
  updateTokenController,
  deleteTokenController,
};