import { AppThunkAction } from "store/types/common";
import { run, TaskEnum } from "./tasks-logic";
import { Category, receiveCategories, Recipe, receiveRecipes } from "store/types/food-types";

const categoriesMock: Category[] = [
    {
        name: 'Закуски',
        id: 'snacks',
        description: 'Описание категории Закуски'
    },
    {
        name: 'Салаты',
        id: 'salads',
        description: 'Описание категории Салаты'
    },
    {
        name: 'Супы',
        id: 'soups',
        description: 'Описание категории Супы'
    },
    {
        name: 'Выпечка',
        id: 'bakery',
        description: 'Описание категории Выпечка'
    },
    {
        name: 'Десерты',
        id: 'deserts',
        description: 'Описание категории Десерты'
    },
    {
        name: 'Напитки',
        id: 'beverages',
        description: 'Описание категории Напитки'
    },
    {
        name: 'Соусы',
        id: 'sauces',
        description: 'Описание категории Соусы'
    },
    {
        name: 'Заготовки',
        id: 'blanks',
        description: 'Описание категории Заготовки'
    },
    {
        name: 'Второе блюда',
        id: 'secondaryFoods',
        description: 'Описание категории Второе блюда'
    }
]

const recipesMock: Recipe[] = [1, 2, 3, 4, 5].map(i => ({
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