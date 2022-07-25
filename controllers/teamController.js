const { findOne } = require("../model/team");
const Team = require("../model/team");
const user = require("../model/user");
//const user = require("../model/user");

exports.createTeam = async (req, res) => {
  try {
    //console.log(req.body);
    const Data = {
      teamName: req.body.teamName,
      points: req.body.points,
      createdBy: req.body.userId,
      teamMembers: req.body.memberId,
    };
    const value = await Team.create(Data);
    return res.json(value);
  } catch (error) {
    console.log(error);
  }
};
exports.getTeam = async (req, res) => {
  try {
    const query = { id: req.params.id };

    const value = await Team.find(query).populate([
      { path: "createdBy", select: "name" },
      { path: "teamMembers" },
    ]);

    return res.json(value);
  } catch (error) {
    console.log(error);
  }
};
exports.findOneTeam = async (req, res) => {
  try {
    const value = await Team.findById(req.params.id).populate([
      { path: "createdBy", select: "name" },
      { path: "teamMembers" },
    ]);
    return res.json(value);
  } catch (error) {
    console.log(error);
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const newData = {
      $set: {
        teamName: req.body.teamName,
        points: req.body.points,
        createdBy: req.body.userId,
        teamMembers: req.body.memberId,
      },
    };
    const value = await Team.findByIdAndUpdate(query, newData);
    return res.json(value);
  } catch (error) {
    console.log(error);
  }
};
exports.deleteTeam = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const newvalues = {
      $set: {
        teamName: req.body.teamName,
        points: req.body.points,
        createdBy: req.body.userId,
        teamMembers: req.body.memberId,
      },
    };
    const value = await Team.deleteOne(id, newvalues);
    return res.json(value);
  } catch (error) {
    console.log(error);
  }
};
exports.deleteAllTeam = async (req, res) => {
  try {
    const value = await Team.deleteMany();
    return res.json(value);
  } catch (error) {
    console.log(error);
  }
};
exports.addMember = async (req, res) => {
  try {
    const UserData = await Team.findOne({ _id: req.body.userId });
    const limit = await Team.findById({_id:req.body.teamId})
    if (!UserData) {
      if (req.body.userId === req.body.memberId) {
        return res.json("error");
      } else {
        if(!limit.teamMembers.includes(req.body.memberId)){
        const user1 = await user.findOne({ _id: req.body.memberId });
        const Data = await Team.findOneAndUpdate(
          { _id: req.body.teamId },

          { $addToSet: { teamMembers: user1 }, $inc: { points: user1.points }, },
          {returnOriginal: false}
        );
        //res.json(Data);
        // console.log(user1);
        // console.log(Data);

        return res.json(Data);
        }else {
          return res.json("This member already exists ")
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
// exports.addpoints = async (req, res) => {
//   try {
//     const user1 = await user.findOne({ _id: req.body.memberId });
//     const limit = await Team.findById({_id:req.body.teamId})
// if(!limit.teamMembers.includes(req.body.memberId)){
//     const Data = await Team.findOneAndUpdate(
//       { _id: req.body.teamId },

//       { $addToSet: { teamMembers: user1 }, $inc: { points: user1.points }, },
//       {returnOriginal: false}
//     );
//     //res.json(Data);

//     // const Data1 = await Team.findOneAndUpdate({_id:req.body.teamId},
//     // {$inc:{points:user1.points}}
//     // );

//     return res.json({ Data });
// }else {
//   return res.json("This member already exists ")
// }
//   } catch (error) {
//     console.log(error);
//   }
// };
