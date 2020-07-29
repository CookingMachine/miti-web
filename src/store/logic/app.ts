import { AppThunkAction } from "store/types/common";
import { run, TaskEnum } from "./tasks-logic";
import { receiveCategories, receiveRecipes, Category, Recipe } from "store/types/food-types";
import mocks from "store/mocks";
import _fetch from "services/sessionService";
import { __ENV__ } from "consts";

interface UserResponse {
    token: string;
}

export const appActions = {
    init: (): AppThunkAction => async (dispatch, getState) => {
        await run(TaskEnum.loadApp, null, dispatch, getState, async () => {

            // fetching data...
            const categories: Category[] = __ENV__ !== 'local' ?
                await _fetch('getAllCategories') :
                mocks.categoriesMock;

            const recipes: Recipe[] = __ENV__ !== 'local' ?
                await _fetch('getAllRecipes') :
                mocks.recipesMock;

            dispatch(receiveCategories(categories));
            dispatch(receiveRecipes(recipes));

            return true;
        });
    },
    authenticate: (login: string, password: string) => async (dispatch, getState) => {
        await run(TaskEnum.loadApp, null, dispatch, getState, async () => {

            const response = await _fetch<UserResponse>('auth', 'POST', {login, password});
            // TODO implement sessionService, save token to localStorage

            return true;
        });
    },
}