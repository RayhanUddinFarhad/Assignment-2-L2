import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getUser);
router.get("/:userId", UserController.getSingleUser);
router.put("/:userId", UserController.updateSingleUser);
router.delete("/:userId", UserController.deleteUser);
router.put("/:userId/orders", UserController.createOrderToDB);
router.get("/:userId/orders", UserController.getSingleOrderFromDB);
router.get("/:userId/orders/total-price", UserController.getCalculateProduct);

export const UserRoutes = router;
