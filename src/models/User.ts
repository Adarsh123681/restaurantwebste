import mongoose , {Schema , Document , model , models } from "mongoose";

export interface IUser extends Document{
  name:String;
  email:String;
  password:String
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type:String, required: true}
});

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
