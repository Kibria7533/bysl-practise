var router = require("express").Router();
const {findAll,findById,deleteok,updateById,createAnTutorial,getLimit}=require('../controller/tutorialController')

router.get("/all", findAll);

router.get("/getOne/:id",findById);

router.delete("/deletevai/:id",deleteok)
router.put('/update/:id',updateById);
router.post('/save',createAnTutorial);
router.get('/getByLimit',getLimit);

module.exports =router;