import { Reducer } from 'redux';
import { FoodState, KnownAction, RECEIVE_CATEGORIES, RECEIVE_RECIPES } from '../types/food-types';

const init: FoodState = {
    categories: [],
    recipes: [],
}

export const reducer: Reducer<FoodState, KnownAction> = (state: FoodState | undefined = init, action: KnownAction): FoodState => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };
        case RECEIVE_RECIPES:
            return {
                ...state,
                recipes: action.recipes
            }
        default:
            return state;
    }
};