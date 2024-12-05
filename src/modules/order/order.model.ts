import { Schema, model, Document } from "mongoose";
import { ObjectId } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Please provide a valid email address",
      ],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Products",
      required: [true, "Product is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
      validate: {
        validator: (v: number) => Number.isInteger(v),
        message: "Quantity must be an integer",
      },
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
      min: [0, "Total price cannot be negative"],
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model<IOrder>("Order", orderSchema);


