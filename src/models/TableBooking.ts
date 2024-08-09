import mongoose, { Document, model, Schema } from "mongoose";
import { IUser } from "./User";

export interface IItems extends Document {
  name: string;
  email: number;
  phone: number;
  date: Date;
  time: string;
  member: number;
  user?: IUser["_id"]
}

const ItemSchema = new Schema<IItems>({
  name: { type: String, required: true },
  email: { type: Number, required: true },
  phone: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { tyoe: String, required: true },
  member: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, required: true }
})

const itemModel = mongoose.model("Item", ItemSchema);
export default itemModel