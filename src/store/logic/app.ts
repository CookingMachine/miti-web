import { AppThunkAction } from "store/types/common";
import { run, TaskEnum } from "./tasks-logic";
import { Category, receiveCategories, Recipe, receiveRecipes } from "store/types/food-types";

const categoriesMock: Category[] = [
    {
        name: 'Закуски',
        id: 'snacks'
    },
    {
        name: 'Салаты',
        id: 'salads'
    },
    {
        name: 'Супы',
        id: 'soups'
    },
    {
        name: 'Выпечка',
        id: 'bakery'
    },
    {
        name: 'Десерты',
        id: 'deserts'
    },
    {
        name: 'Напитки',
        id: 'beverages'
    },
    {
        name: 'Соусы',
        id: 'sauces'
    },
    {
        name: 'Заготовки',
        id: 'blanks'
    },
    {
        name: 'Второе блюда',
        id: 'secondaryFoods'
    }
]

const recipesMock: Recipe[] = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
    name: `Recipe ${i}`,
    description: `description ${i}`,
    imageUrl: '',
    time: i * 10,
    portions: i + 1,
    views: Math.pow(10, i),
}))

export const appActions = {
    init: (): AppThunkAction => async (dispatch, getState) => {
        await run(TaskEnum.loadApp, null, dispatch, getState, async () => {

            // fetching data...
            await new Promise(r => setTimeout(r, 1000));

            dispatch(receiveCategories(categoriesMock));
            dispatch(receiveRecipes(recipesMock));

            return true;
        });
    },
}