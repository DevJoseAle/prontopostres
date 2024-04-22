import { themealDbApiAllDeserts } from "../../config/api/themealDbApi";
import { MealCardEntity } from "../../domain/entities/mealEntity";
import { ListMealDBResponse, TheMealDBResponseCard } from "../../infrastructure/interfaces/theMealDBResponse";
import { MealsMapper } from "../../infrastructure/mappers/meal.mapper";

export const getMeals = async (): Promise<MealCardEntity[]> => {

    try {
        const response = await themealDbApiAllDeserts.get<ListMealDBResponse>('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
        const meals = response.data.meals.map(MealsMapper.mealToEntity);
        return meals        
    } catch (error) {
        console.log(error, 'Error al obtener Listado de postres');
        throw new Error('Error al obtener postres throw');
    }
};