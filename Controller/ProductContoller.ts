import { Request, Response } from "express";
import { iProduct } from "../Utils/Product.Interface";
import ProductModel from "../Model/Product.Model";

export const createProduct = async (
  req: Request<{}, {}, iProduct>,
  res: Response
) => {
  try {
    const { price, prodName, description, category } = req.body;
    const product = new ProductModel({
      price,
      prodName,
      category,
      description,
    });
    product.prodID = product._id;

    const newProduct = await product.save();
    return res.status(201).json(newProduct);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const getProduct = await ProductModel.find();
    return res.status(200).json(getProduct);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const getOneProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params._id;
    const getAProd = await ProductModel.findById(productID);
    return res.status(200).json(getAProd);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params._id;
    const deleteProd = await ProductModel.findByIdAndDelete(productID);
    return res.status(201).json(deleteProd);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params._id;
    const { price } = req.body;
    const updateProd = await ProductModel.findByIdAndUpdate(
      productID,
      {
        price,
      },
      { new: true }
    );
    return res.status(201).json(updateProd);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};
