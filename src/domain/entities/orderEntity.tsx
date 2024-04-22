import { MealOrderEntity } from "./mealEntity";

export interface OrderEntity {
    dessert: MealOrderEntity;
    clientData: ClientData;
}

export interface ClientData{
    firstName: string; 
    lastName: string;
    address1: string;
    city: string;
    zipCode: string,
    phoneNumber: string;
}