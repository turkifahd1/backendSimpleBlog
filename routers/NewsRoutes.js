const express=require('express')
const routerr= express.Router();
const newControllers= require("../controllers/NewsControllers")
const newsValidator = require('../validator/newsValidator');

// post data to mongo
routerr.post("/" ,newsValidator.userValidationRules(),newsValidator.validate,newControllers.post);


// get data from mongo
routerr.get("/",newControllers.get);

// get one data from mongo
routerr.get("/:id",newControllers.getID);

//abdate data
routerr.put("/:id",newsValidator.userValidationRules(), newsValidator.validate ,newControllers.update);

//delete
routerr.delete("/:id",newControllers.delete);




module.exports=routerr;