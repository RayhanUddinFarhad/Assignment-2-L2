import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: User) => {

    const result = await UserModel.create(user)


    return result




}



const getUser = async () => {

    const result = await UserModel.find()

    return result
}


const getSingleStudentFromDB = async (userId: string) => {
    const result = await UserModel.findOne({userId: userId}); 
    return result;
  };

export const UserService = {
    createUserIntoDB,
    getUser,
    getSingleStudentFromDB
}