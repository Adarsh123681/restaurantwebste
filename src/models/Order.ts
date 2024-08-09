import mongoose, { Document, model, Schema, Types } from "mongoose";
import UserModel, { IUser } from "./User";
import itemModel, { IItems } from "./Items";

export interface IOrder extends Document {
  user: IUser["_id"];
  items: IItems["_id"][];
};

const orderSchema = new Schema<IOrder>({
  user: { type: Types.ObjectId, ref: UserModel, required: true },
  items: { type: Types.ObjectId, ref: itemModel, required: true }
})

const orderModel = mongoose.model("Order" , orderSchema)

export default orderModel
