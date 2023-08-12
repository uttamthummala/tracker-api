
const Site = require('./../models/siteModel');
exports.getallsites= async(req,res)=>{

    try {
        
        const sites = await Site.find();
    
        // SEND RESPONSE
        res.status(200).json({
          status: 'success',
          results: sites.length,
          data: {
            sites
          }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
}
exports.getsitebyid=async(req,res)=>{                    //read about async await

    try {
        console.log(req.params.id);
        // const id=req.params.id*1;
        
        const sites = await Site.findById(req.params.id);


    
        // SEND RESPONSE
        res.status(200).json({
          status: 'success',
          results: sites.length,
          data: {
            sites
          }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
}
exports.createsite= async(req,res)=>{
   try{
    const newSite=await Site.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
          site: newSite
        }
      });}
        catch(err){
            res.status(400).json({
                status: 'fail',
                message: err
              });
        }
};
exports.updatesite= async(req,res)=>{
   try{
    const newSite=await Site.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    es.status(201).json({
        status: 'success',
        data: {
          site: newSite
        }
      });
   } catch(err){
    res.status(400).json({
        status: 'fail',
        message: err
      });
}
};
exports.deletesite= async(req,res)=>{
    try{
     await Site.findByIdAndDelete(req.params.id);
     res.status(204).json({
          status: 'success',
          data: null
        });
    } catch(err){
     res.status(400).json({
          status: 'fail',
          message: err
        });
    };
};