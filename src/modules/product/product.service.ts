import { IProduct } from "./product.interface";
import { Products } from "./product.model"

const createProduct = async (payload: IProduct): Promise<IProduct> =>{
    const result = await Products.create(payload)
    return result;
}
const getAllProduct = async () => {
    const result = await Products.find()
    return result
}
const getSingleProduct = async (id: string) => {
    const result = await Products.findById(id)
    return result
}
const updateProduct = async (id: string, data: IProduct) => {
  const result = await Products.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}

const deleteProduct = async (id: string) => {
    const result = await Products.findByIdAndDelete(id)
    return result
}
export const productService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}