
export interface Category {
    name: string;
    description: string;
    id: string;
}

export interface restaurants {
    id: number;
    name: string;
    station: string;
    recipes: number;
    bill: number;
    views: number;
    comments: number;
    likes: number;
}

export interface Recipe {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    portions: number;
    time: number;
    views: number;
    comments: number;
    likes: number;
    // categoryId: string;
}

export interface FoodState {
    categories: Category[];
    recipes: Recipe[];
}

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
interface ReceiveCategoriesAction {
    type: typeof RECEIVE_CATEGORIES;
    categories: Category[];
}
export function receiveCategories(categories: Category[]): ReceiveCategoriesAction {
    return {
        type: RECEIVE_CATEGORIES,
        categories: categories
    };
}

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
interface ReceiveRecipesAction {
    type: typeof RECEIVE_RECIPES;
    recipes: Recipe[];
}
export function receiveRecipes(recipes: Recipe[]): ReceiveRecipesAction {
    return {
        type: RECEIVE_RECIPES,
        recipes: recipes
    };
}

export type KnownAction = ReceiveCategoriesAction | ReceiveRecipesAction;