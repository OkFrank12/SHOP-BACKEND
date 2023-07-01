import { Schema, model } from "mongoose";
import { iProduct } from "../Utils/Product.Interface";

const productSchema: Schema<iProduct> = new Schema(
  {
    prodID: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    prodName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductModel = model("Product", productSchema);

export default ProductModel;