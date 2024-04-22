import { MealByIdEntity } from "../../domain/entities/mealEntity";
import { currencyFormatter } from "../../presentation/utils/formatter";
import { DessertDBResponse } from "../interfaces/DessertDBResponse";



export class DessertMapper {


    static DessertToEntity = (meal: DessertDBResponse): MealByIdEntity => {
        function toNumber(price: string){
            const isValidNumber = /^\d+$/.test(price);
            if (!isValidNumber) throw new Error('El precio no puede ser convertido a numero');
            const newPrice = parseInt(price);
            return newPrice

        }
        
        return {
            id: meal.idMeal ,
            name: meal.strMeal ,
            drinkAlternate: meal.strDrinkAlternate ,
            category: meal.strCategory ,
            area: meal.strArea,
            instructions: meal.strInstructions ,
            image: meal.strMealThumb ,
            tags: meal.strTags ,
            youtube: meal.strYoutube ,
            price: toNumber(meal.idMeal),
            priceStr: currencyFormatter(toNumber(meal.idMeal)),
            ingredient1: meal.strIngredient1 ,
            ingredient2: meal.strIngredient2 ,
            ingredient3: meal.strIngredient3 ,
            ingredient4: meal.strIngredient4 ,
            ingredient5: meal.strIngredient5 ,
            ingredient6: meal.strIngredient6 ,
            ingredient7: meal.strIngredient7 ,
            ingredient8: meal.strIngredient8 ,
            ingredient9: meal.strIngredient9 ,
            ingredient10: meal.strIngredient10 ,
            ingredient11: meal.strIngredient11 ,
            ingredient12: meal.strIngredient12 ,
            ingredient13: meal.strIngredient13 ,
            ingredient14: meal.strIngredient14 ,
            ingredient15: meal.strIngredient15 ,
            ingredient16: meal.strIngredient16 ,
            ingredient17: meal.strIngredient17 ,
            ingredient18: meal.strIngredient18 ,
            ingredient19: meal.strIngredient19 ,
            ingredient20: meal.strIngredient20 ,
            measure1: meal.strMeasure1 ,
            measure2: meal.strMeasure2 ,
            measure3: meal.strMeasure3 ,
            measure4: meal.strMeasure4 ,
            measure5: meal.strMeasure5 ,
            measure6: meal.strMeasure6 ,
            measure7: meal.strMeasure7 ,
            measure8: meal.strMeasure8 ,
            measure9: meal.strMeasure9 ,
            measure10: meal.strMeasure10 ,
            measure11: meal.strMeasure11 ,
            measure12: meal.strMeasure12 ,
            measure13: meal.strMeasure13 ,
            measure14: meal.strMeasure14 ,
            measure15: meal.strMeasure15 ,
            measure16: meal.strMeasure16 ,
            measure17: meal.strMeasure17 ,
            measure18: meal.strMeasure18 ,
            measure19: meal.strMeasure19 ,
            measure20: meal.strMeasure20 , 
            
        } 
    }
}