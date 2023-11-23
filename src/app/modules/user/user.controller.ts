import { Request, Response } from "express"
import { UserService } from "./user.service"

 const createUser = async (req : Request, res : Response ) => {

    try {
        const userData = req.body 
    const result = await UserService.createUserIntoDB(userData)

    res.status(200).json({
        success: true,
        message: 'User is created successfully',
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

 export const UserController = {

    createUser
 }