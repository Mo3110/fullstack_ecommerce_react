import { Request, Response, response } from "express";
import { IOrder, IOrderItem } from "../types";
import Order from "../models/order";
import stripe from "stripe";

const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
})

type CreateOrderType= Pick<
IOrder, 
"deliveryAddress" | "totalPrice" | "user" |"orderItems"
>

const BASE_UNIT = 100

const getTotalAmount = (orderItems: IOrderItem[]) => {
    return orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0) *
    BASE_UNIT;
}

export const createOrder = async (request: Request, response: Response) => {
    try {
        const { deliveryAddress, totalPrice, user, orderItems}: CreateOrderType = request.body;

        const totalAmount = getTotalAmount(orderItems)

        const paymentIntent = await stripeClient.paymentIntents.create({
            amount: totalAmount,
            currency: "usd"
        })

        const order = await Order.create({
            user, 
            deliveryAddress, 
            orderItems, 
            totalPrice,
            paymentIntentId: paymentIntent.id,
            paymentStatus: "pending",
            paymentDetails: {},
        });
        response.send({
            clientSecret: paymentIntent.client_secret,
        })
    } catch (error) {
        console.log("error in createOrder", error);
        response.send({
            message: "Somthing went wrong when creating order"
        })
        throw error;
    }
};