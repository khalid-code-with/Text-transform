const mongoose =require("mongoose");

const mongoose =require("mongoose");

const connectDatabase = async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URL ,{

    })
    console.log("Your Database connected");
  }catch(error){
      console.error(`Error:${error.massage}`);
      process.exit(1)
  }
};
module.exports = connectDatabase;