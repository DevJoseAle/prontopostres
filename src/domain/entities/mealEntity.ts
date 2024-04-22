export interface MealCardEntity {
    name:      string;
    image:     string;
    id:        string;
    price:     number;
}

export interface MealByIdEntity {
    id: string,
    name: string,
    drinkAlternate: string,
    price: number,
    priceStr: string
    category: string,
    area: string,
    instructions: string,
    image: string,
    tags: string,
    youtube: string,
    [key: string]: string | number | null | undefined;
    
}

export interface MealOrderEntity{
    id: string,
    name: string,
    price: number,
    priceStr: string
    category: string,
    area: string,
    image: string,


}