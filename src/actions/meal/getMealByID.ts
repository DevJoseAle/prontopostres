import axios from "axios";
import { DessertMapper } from "../../infrastructure/mappers/dessert.mapper";
import { MealByIdEntity } from "../../domain/entities/mealEntity";

export const getMealsById = async (id: string): Promise<MealByIdEntity> => {

    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const meals = response.data.meals[0]
        return DessertMapper.DessertToEntity(meals)        
    } catch (error) {
        console.log(error, 'Error al obtener Listado de postres');
        throw new Error('Error al obtener postres throw');
    }
};