import { Request, Response } from "express"
import { UserService } from "./user.service"

const createUser = async (req: Request, res: Response) => {

    try {

        const userData = req.body
        const result = await UserService.createUserIntoDB(userData)



        res.status(200).json({
            success: true,
            message: 'User created succesfully',
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,

        });
    }




}


const getUser = async (req: Request, res: Response) => {

    try {
        const result = await UserService.getUser()

        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });



    }
}


const getSingleUser = async (req: Request, res: Response) => {

    try {
        const { userId } = req.params;

        const result = await UserService.getSingleStudentFromDB(Number(userId))


        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,

        });
    }


}


const updateSingleUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const newUser = req.body;

        const result = await UserService.updateUser(Number(userId), newUser);


        res.status(200).json({
            success: true,
            message: 'User updated successfully!',
            data: result,
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
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
            message: 'User deleted successfully!',
            data: null,
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,

        });
    }
};


const createOrderToDB = async (req: Request, res: Response) => {

    try {
        const { userId } = req.params
        const data = req.body


        const result = await UserService.createOrder(Number(userId), data)
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,

        });


    }





}


export const UserController = {

    createUser,
    getUser,
    getSingleUser,
    updateSingleUser,
    deleteUser,
    createOrderToDB
}