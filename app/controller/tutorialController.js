// const { where } = require("sequelize/types");
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


exports .findAll=async (req,res)=>{

   await Tutorial.findAll()
    .then(data => {
        console.log('ok data',data)
      res.send(data);
    })
    .catch(err => {
        console.log('err',err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}


exports.findById=async(req,res)=>{
    console.log(req.params.id);

    await Tutorial.findByPk(req.params.id)
    .then(data => {
        console.log('ok data',data)
      res.send(data);
    })
    .catch(err => {
        console.log('err',err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

}


exports.deleteok=async(req,res)=>{
    const id = req.params.id;

    await Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });

}





exports.updateById=async(req,res)=>{

    await Tutorial.update(req.body,{where:{id:req.params.id}})
    .then(data => {
        console.log('ok data',data)
      res.send(data);
    })
    .catch(err => {
        console.log('err',err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });


}


exports.createAnTutorial=async(req,res)=>{

    await Tutorial.create(req.body)
    .then(data => {
        console.log('ok data',data)
      res.send(data);
    })
    .catch(err => {
        console.log('err',err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });


}


exports.getLimit=async(req,res)=>{
    await Tutorial.findAll({ limit: 2 })
    .then(data => {
        console.log('ok data',data)
      res.send(data);
    })
    .catch(err => {
        console.log('err',err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

}