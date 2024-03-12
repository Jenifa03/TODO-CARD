const ToDoModel = require("../models/ToDoModel");
//************** get to do ******************
module.exports.getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};
//********************** save to do *********************
module.exports.saveToDo = (req, res) => {
  const { toDo } = req.body;

  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};


//*************************************update to do***************************************** 
module.exports.updateToDo = (req, res) => {
    const {id} = req.params;
    const { toDo } = req.body;
  
    ToDoModel.findByIdAndUpdate(id, { toDo })

    .then(() => {
        res.send("Update Successfully");
       
      })
      .catch((err) => {console.log(err);
        res.send({ error: err, msg: "Something went wrong!"});
       
      });

      
  };
//*************************delete to do *******************************************************
  module.exports.deleteToDo = (req, res) => {
    const { id } = req.params;
    
  
    ToDoModel.findByIdAndDelete(id)

    .then(() => {
        res.send("Deleted Successfully");
       
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!"});
       
      });

      
  };
  
  
