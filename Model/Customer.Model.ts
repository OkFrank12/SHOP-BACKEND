import { Schema, model } from "mongoose";
import { iCustomer } from "../Utils/Customer.Interface";

const customerSchema: Schema<iCustomer> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    carts: {
      type: [
        {
          prodID: Schema.Types.ObjectId,
          prodName: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const CustomerModel = model("Customer", customerSchema)

export default CustomerModel;
