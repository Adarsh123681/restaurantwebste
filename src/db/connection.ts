import mongoose from "mongoose";
const mongo_url = process.env.DATABASE_URL;
if(!mongo_url){
  throw new Error('Please define the mongoose_url correctly');
  let cached = global.mongoose;
  if(!cached){
    cached = global.mongoose = {conn : null , promise: null}
  }

  async function dbConnect(){
    if(cached.conn){
      return cached.conn
    }
    if(cached.promise){
      const opts = {
        bufferCommands : false,
      };
      cached.promise = (await mongoose.connect(mongo_url , opts)).((mongoose) =>{
        return mongoose;
      })
    }
      cached.conn = await cached.promise;
      return cached.conn
  }
}
export default dbConnect