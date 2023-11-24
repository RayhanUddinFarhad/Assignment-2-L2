import express from 'express';
import { UserController } from './user.controller';


const router = express.Router()

router.post('/create-user', UserController.createUser )
router.get('/', UserController.getUser)
router.get('/:userId', UserController.getSingleUser)
router.put('/:userId', UserController.updateSingleUser)
router.delete('/:userId', UserController.deleteUser)
router.put('/:userId/orders', UserController.createOrderToDB)


export const UserRoutes = router