
export interface Category {
    name: string;
    id: string;
}

export interface FoodState {
    categories: Category[];
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

export type KnownAction = ReceiveCategoriesAction;