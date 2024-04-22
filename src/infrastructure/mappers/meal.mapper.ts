import type {  MealCardEntity } from "../../domain/entities/mealEntity"
import type { TheMealDBResponseCard } from "../interfaces/theMealDBResponse"


export class MealsMapper {


    static mealToEntity = (meal: TheMealDBResponseCard): MealCardEntity => {
        function toNumber(price: string){
            const isValidNumber = /^\d+$/.test(price);
            if (!isValidNumber) throw new Error('El precio no puede ser convertido a numero');
            const newPrice = parseInt(price);
            return newPrice

        }
        return {
            id: meal.idMeal,
            name: meal.strMeal,
            image: meal.strMealThumb,
            price: toNumber(meal.idMeal)
        }
    }
}