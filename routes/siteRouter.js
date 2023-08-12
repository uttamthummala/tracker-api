const express = require('express');
const siteRouter=express.Router();
const siteController=require('./../controllers/siteController');
siteRouter.route('/').get(siteController.getallsites).post(siteController.createsite);
siteRouter.route('/:id').get(siteController.getsitebyid).patch(siteController.updatesite).delete(siteController.deletesite);
module.exports=siteRouter;