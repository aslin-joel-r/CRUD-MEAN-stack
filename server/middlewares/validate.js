const ObjectId=require('mongoose').Types.ObjectId;

const validateDbId=(req,res,next)=>{
    if(ObjectId.isValid(req.params.id)==false)
   res.status(400).json({
      error:"Given Id "+req.params.id+"is not valid"
   })
   else
    next();
}
const raiseReecord404Error=(req,res)=>{
    res.status(404).json({error:"Employee record not found"+req.params.id})

}

const errorHandler=(err,req,res,next)=>{
    res.status(500).json({err})
}
module.exports={
    validateDbId,
    raiseReecord404Error,
    errorHandler,
}