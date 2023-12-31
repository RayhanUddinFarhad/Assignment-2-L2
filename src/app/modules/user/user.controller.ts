import { Request, Response } from "express";
import { UserService } from "./user.service";
import { createUserSchema, updateUserSchema } from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    createUserSchema.parse(userData);

    const result = await UserService.createUserIntoDB(userData);

    res.status(200).json({
      success: true,
      message: "User created succesfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",

      error: err,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserService.getSinglUserFromDB(Number(userId));

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.description || "something went wrong",

      error: err,
    });
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const newUser = req.body;
    updateUserSchema.parse(newUser);

    const result = await UserService.updateUser(Number(userId), newUser);

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.description || "something went wrong",

      error: err,
    });
  }
};




const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserService.deleteUserFromDB(Number(userId));

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.description || "something went wrong",

      error: err,
    });
  }
};



const createOrderToDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = req.body;

    const result = await UserService.createOrder(Number(userId), data);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.description || "something went wrong",

      error: err,
    });
  }
};


const getSingleOrderFromDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserService.getSingleOrder(Number(userId));

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result?.orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.description || "something went wrong",
      error: err,
    });
  }
};

const getCalculateProduct = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserService.calculateTotalPrice(Number(userId));

    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.description || "something went wrong",
      error: err,
    });
  }
};

export const UserController = {
  createUser,
  getUser,
  getSingleUser,
  updateSingleUser,
  deleteUser,
  createOrderToDB,
  getSingleOrderFromDB,
  getCalculateProduct,
};
