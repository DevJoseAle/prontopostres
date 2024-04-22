import { MealByIdEntity } from "../../domain/entities/mealEntity";
import { ClientData, OrderEntity } from "../../domain/entities/orderEntity";

export class OrderMapper{
    static mapToOrder(meal: MealByIdEntity, values: ClientData): OrderEntity {
        return {
            clientData: {
                firstName: values.firstName,
                lastName: values.lastName,
                address1: values.address1,
                city: values.city,
                zipCode: values.zipCode,
                phoneNumber: values.phoneNumber
            },
            dessert: {
                id: meal.id,
                name: meal.name,
                price: meal.price,
                priceStr: meal.priceStr,
                category: meal.category,
                area: meal.area,
                image: meal.image
            }
        }
    }
}