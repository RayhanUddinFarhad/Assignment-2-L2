import { Order, User } from "./user.interface";
import { UserModel } from "./user.model";
import bcrypt from "bcrypt";

const createUserIntoDB = async (user: User) => {
  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const userWithHashedPassword = { ...user, password: hashedPassword };

  const result = await UserModel.create(userWithHashedPassword);

  // Exclude the password field from the response
  const { password, ...userWithoutPassword } = result.toObject();
  return userWithoutPassword;
};

const getUser = async () => {
  const result = await UserModel.find();

  const usersWithoutPassword = result.map((user) => {
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  });

  return usersWithoutPassword;
};










const getSingleStudentFromDB = async (userId: number) => {
  const existingUser = await UserModel.isUserExists(userId);
  if (!existingUser) {
    throw { code: 404, description: "User not found!" };
  }

  const result = await UserModel.findOne({ userId });

  if (!result) {
    // Handle the case where no user is found with the specified userId
    throw new Error("User not found!");
  }

  // Exclude the password field from the response
  const { password, ...userWithoutPassword } = result.toObject();
  return userWithoutPassword;
};




const updateUser = async (userId: number, updatedData: User) => {
  const existingUser = await UserModel.isUserExists(userId);
  if (!existingUser) {
    throw { code: 404, description: "User not found!" };
  }
  const result = await UserModel.findOneAndUpdate(
    { userId: userId },
    { $set: updatedData },
    { new: true }, // This option returns the modified document
  );

  if (!result) {
    throw new Error("User not found!");
  }

  const { password, ...userWithoutPassword } = result.toObject();

  return userWithoutPassword;
};




const deleteUserFromDB = async (userId: number) => {
  const existingUser = await UserModel.isUserExists(userId);
  if (!existingUser) {
    throw new Error("This user not found!");
  }
  const result = await UserModel.deleteOne({ userId });

  return result;
};





const createOrder = async (userId: number, orderData: Order) => {
  const existingUser = await UserModel.isUserExists(userId);
  if (!existingUser) {
    throw { code: 404, description: "User not found!" };
  }

  const orders = existingUser.orders || [];

  // Append the new order data to the orders array
  orders.push(orderData);

  // Update the user with the new orders data
  const result = await UserModel.findOneAndUpdate(
    { userId: userId },
    { $set: { orders: orders } },
    { new: true },
  );

  if (!result) {
    throw new Error("Failed to update user with new order data!");
  }

  return result;
};




const getSingleOrder = async (userId: number) => {
  const existingUser = await UserModel.isUserExists(userId);
  if (!existingUser) {
    throw { code: 404, description: "User not found!" };
  }

  const result = await UserModel.findOne({ userId: userId });

  return result;
};





const calculateTotalPrice = async (userId: number) => {
  const existingUser = await UserModel.isUserExists(userId);
  if (!existingUser) {
    throw { code: 404, description: "User not found!" };
  }

  // Calculate the total price of all orders
  const price = existingUser.orders.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0,
  );

  const totalPrice = price.toFixed(2);

  return {totalPrice};
};

export const UserService = {
  createUserIntoDB,
  getUser,
  getSingleStudentFromDB,
  updateUser,
  deleteUserFromDB,
  createOrder,
  getSingleOrder,
  calculateTotalPrice,
};
