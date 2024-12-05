import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [3, 'Product name must be at least 3 characters long'],
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  
  brand: {
    type: String,
    required: [true, 'Brand name is required'],
    trim: true,
    minlength: [2, 'Brand name must be at least 2 characters long'],
    maxlength: [50, 'Brand name cannot exceed 50 characters']
  },
  
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
    validate: {
      validator: (v: number) => v > 0,
      message: 'Price must be a positive number'
    }
  },
  
  category: {
    type: String,
    enum: {
      values: ["Mountain", "Road", "Hybrid", "Electric"],
      message: '{VALUE} is not a valid category',
    },
    required: [true, 'Category is required']
  },

  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity must be a non-negative number'],
    validate: {
      validator: (v: number) => Number.isInteger(v),
      message: 'Quantity must be an integer'
    }
  },

  inStock: {
    type: Boolean,
    required: [true, 'In stock field is required']
  },
}, 
{
  timestamps: true
});

export const Products = model<IProduct>('Products', productSchema);
