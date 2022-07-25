module.exports = (app) => {
  const user = require("../controllers/userController");
  //const team = require("../controllers/teamController")

  const router = require("express").Router();
//user data
  router.post('/user',user.createData);
  router.get('/user',user.getData);
  router.delete('/user',user.deleteAllusers);
  router.get("/:id", user.findOne);
  router.put("/:id",user.update);
  router.delete("/:id",user.deleteDtata);
  

//team data


  

  
  

  app.use("/api", router);
};
