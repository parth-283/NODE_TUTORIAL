module.exports = reqfilter=(req,res,next)=>{
    if(!req.query.age){
      res.send("Please Provide age")
    }else if(req.query.age <18){
      res.send("You Can't Access This Page")
    }
    else{
      console.log('Middleware is Running');
      next()
    }
  }