module.exports = (app) => {
  const team = require("../controllers/teamController");
  const router = require("express").Router();

  router.post("/team", team.createTeam);
  router.put("/addmember",team.addMember);
 router.delete("/deleteall",team.deleteAllTeam)
  router.get("/team", team.getTeam);
  router.get("/:id", team.findOneTeam);
  //router.put("/addmember/:id", team.updateTeam);
  router.delete("/:id", team.deleteTeam);
//  router.put("/addpoints",team.addpoints);

  app.use("/app", router);
};
