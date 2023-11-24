import { z } from 'zod';


export const userNameSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
});

export const addressSchema = z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
});

export const orderSchema = z.object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number(),
});

export const userValidationSchema = z.object({
    userId: z.number(),
    username: z.string(),
    password: z.string(),
    fullName: userNameSchema,
    age: z.number(),
    email: z.string(),
    isActive: z.boolean(),
    hobbies: z.array(z.string()),
    address: addressSchema,
    orders: z.array(orderSchema),
});

export default userValidationSchema