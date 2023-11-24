import { Schema, model } from "mongoose";
import { User, UserModelIns } from "./user.interface";

const UserNameSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const AddressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const OrderSchema = new Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const UserSchema = new Schema<User>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  fullName: { type: UserNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: {
    type: Boolean,
    required: true,
    enum: {
      values: ["active", "inactive"],
    },
  },
  hobbies: { type: [String], required: true },
  address: { type: AddressSchema, required: true },
  orders: { type: [OrderSchema], required: true },
});

UserSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await UserModel.findOne({ userId });
  return existingUser;
};
export const UserModel = model<User, UserModelIns>("User", UserSchema);
