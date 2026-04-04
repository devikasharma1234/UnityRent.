const Service = require("../model/services");

module.exports.index = async(req,res) =>{
    try{
        const showServices = await Service.find({});  // show all litings(services)
        res.status(200).json(showServices);
    }catch(err){
        console.log(err);
    }
};

module.exports.showListing = async(req,res)=>{
   const {id}=req.params;
   try{
   const service=await Service.findById(id);
   if(!service){
    res.status(404).json({message:"Service not found"});
    // req.flash("error", "Listing you requested for does not exist");
    // res.redirect("/services");
   }
   res.status(200).json({service});
}catch(err){
   console.log(err);
}
};