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
        name: 'Рыба',
        id: 'fish'
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