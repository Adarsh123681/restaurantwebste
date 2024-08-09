import mongoose, { Document, model, Schema } from "mongoose";

export interface IItems extends Document {
  title: string;
  price: number;
  description: string
}

const ItemSchema = new Schema<IItems>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }
})

const itemModel = mongoose.model("Item", ItemSchema);
export default itemModel