import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: User) => {
    
    if (await UserModel.isUserExists(user.userId)) {
        throw new Error('User already exists!');
      }

    const result = await UserModel.create(user)
    return result




}



const getUser = async () => {

    const result = await UserModel.find()

    return result
}


const getSingleStudentFromDB = async (userId: number) => {

    const existingUser = await UserModel.isUserExists(userId);
    if (!existingUser) {
        throw new Error('Cannot find user!');
    }
    const result = await UserModel.findOne({userId: userId}); 
    return result;
  };

  const updateUser = async (userId: number, updatedData: User) => {
    try {

        const existingUser = await UserModel.isUserExists(userId);
        if (!existingUser) {
            throw new Error('This user does not exist!');
        }
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
  const deleteUserFromDB = async (userId: number) => {
    try {

        const existingUser = await UserModel.isUserExists(userId);
        if (!existingUser) {
            throw new Error('This user does not exist!');
        }
        const result = await UserModel.deleteOne(
            {userId}
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
    updateUser,
    deleteUserFromDB
}