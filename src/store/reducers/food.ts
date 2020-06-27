import { Reducer } from 'redux';
import { FoodState, KnownAction, RECEIVE_CATEGORIES } from '../types/food-types';

const init: FoodState = {
    categories: []
}

export const reducer: Reducer<FoodState, KnownAction> = (state: FoodState | undefined = init, action: KnownAction): FoodState => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };        
        default:
            return state;
    }
};