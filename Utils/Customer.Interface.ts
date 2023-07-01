import { Document, Schema } from "mongoose";

export interface iCustomer extends Document {
  name: string;
  email: string;
  phoneNumber: number;
  carts: {
    prodID: Schema.Types.ObjectId;
    prodName: string;
  }[];
  address?: string;
}
