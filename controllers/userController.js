const user = require("../model/user");

exports.createData = async (req, res) => {
  try {
   
    const Data = {
      name: req.body.name,
      email: req.body.email,
      points:req.body.points
    };
    const value = await user.create(Data);
    return res.json(value);
  } catch (error) {
    console.log(error);
  }
  console.log(req.body);
};

exports.getData = async (req, res) => {
  try {
    
    const value = await user.find();
    if(team) return res.json(value);
  } catch (error) {
    console.log(error);
  }
};
exports.findOne = async (req,res)=>{
  try{
   
    const value = await user.findById(req.params.id);
    return res.json(value);

  }catch (error) {
    console.log(error)
  }
};
exports.update = async (req,res)=>{
  try{
    
  const query = {_id:req.params.id};
  const newvalues = { $set: {name: req.body.name, email: 
    req.body.email,points:req.body.points} };
    const value = await user.findByIdAndUpdate(query,newvalues);
    return res.json(value);
  }catch (error) {
    console.log(error);
    
  }
  
 
}
exports.deleteDtata = async (req,res)=>{
  try{
  const id = {_id:req.params.id};
  const newvalues = {$set:{name: req.body.name, email: 
    req.body.email,points:req.body.points}}
  const value = await user.deleteMany(id,newvalues);
  return res.json(value);
  }catch (error) {
    console.log(error);
    
  }

}
exports.deleteAllusers = async (req,res)=>{
  try{
  // const id = {_id:req.params.id};
  // const newvalues = {$set:{name: req.body.name, email: 
  //   req.body.email,points:req.body.points}}
  const value = await user.deleteMany();
  return res.json(value);
  }catch (error) {
    console.log(error);
    
  }

}
