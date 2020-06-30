import { AppThunkAction } from "store/types/common";
import { run, TaskEnum } from "./tasks-logic";
import { receiveCategories, receiveRecipes } from "store/types/food-types";
import mocks from "store/mocks";

export const appActions = {
    init: (): AppThunkAction => async (dispatch, getState) => {
        await run(TaskEnum.loadApp, null, dispatch, getState, async () => {

            // fetching data...
            // await new Promise(r => setTimeout(r, 50));

            dispatch(receiveCategories(mocks.categoriesMock));
            dispatch(receiveRecipes(mocks.recipesMock));

            return true;
        });
    },
}