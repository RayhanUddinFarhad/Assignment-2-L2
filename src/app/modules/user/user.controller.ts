import { Request, Response } from "express"
import { UserService } from "./user.service"

const createUser = async (req: Request, res: Response) => {

    try {
        const userData = req.body
        const result = await UserService.createUserIntoDB(userData)

        res.status(200).json({
            success: true,
            message: '',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
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
        const {userId} = req.params;

        const result = await UserService.getSingleStudentFromDB(userId)


        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });

    }


}


const updateSingleUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const newUser = req.body;

        const result = await UserService.updateUser(userId, newUser);

   
            res.status(200).json({
                success: true,
                message: 'User updated successfully!',
                data: result,
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error,
        });
    }
};


export const UserController = {

    createUser,
    getUser,
    getSingleUser,
    updateSingleUser
}