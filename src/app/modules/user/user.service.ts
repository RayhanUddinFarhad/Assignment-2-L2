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

  const updateUser = async (userId: string, updatedData: User) => {
    try {
        const result = await UserModel.findOneAndUpdate(
            { userId: userId },
            { $set: updatedData },
            { new: true } // This option returns the modified document
        );

        return result;
    } catch (error) {
        console.error(error);
        throw error; // Handle the error according to your application's needs
    }
};


export const UserService = {
    createUserIntoDB,
    getUser,
    getSingleStudentFromDB,
    updateUser
}