const express = require('express');
const { createTokenController, getAllTokensController, getTokenByIdController, updateTokenController, deleteTokenController, getTokenBySymbolController } = require('../../controller.js/tokenController');

const tokenRouter = express.Router();

tokenRouter.post('/',createTokenController);
tokenRouter.get('/',getAllTokensController);
tokenRouter.get('/:id',getTokenByIdController);
tokenRouter.put('/:id',updateTokenController);
tokenRouter.delete('/:id',deleteTokenController);
tokenRouter.get('/symbol/:symbol', getTokenBySymbolController);

module.exports=tokenRouter;