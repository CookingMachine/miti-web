import { AppThunkAction } from "store/types/common";
import { run, TaskEnum } from "./tasks-logic";
import { Category, receiveCategories } from "store/types/food-types";

interface MainContentResponse {
    categories: Category[];
}

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

export const appActions = {
    init: (): AppThunkAction => async (dispatch, getState) => {
        await run(TaskEnum.loadApp, null, dispatch, getState, async () => {

            // fetching data...
            await new Promise(r => setTimeout(r, 1000));

            dispatch(receiveCategories(categoriesMock));

            return true;
        });
    },
}