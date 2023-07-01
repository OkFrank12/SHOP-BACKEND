import { Document, Schema } from "mongoose";

export interface iProduct extends Document {
  prodID: Schema.Types.ObjectId;
  prodName: string;
  price: number;
  description: string;
  category: string;
}
