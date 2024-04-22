
export interface ListMealDBResponse {
    meals: TheMealDBResponseCard[];
} 
export interface TheMealDBResponseCard {
    strMeal:      string;
    strMealThumb: string;
    idMeal:       string;
}
