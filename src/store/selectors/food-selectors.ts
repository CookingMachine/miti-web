import { ApplicationState } from "store/types/common";
import { createSelector } from "reselect";

export const getCategories = (state: ApplicationState) => state.food.categories;
export const getRecipes = (state: ApplicationState) => state.food.recipes;

const getCategoryId = (state: ApplicationState, id: string) => id;
export const getCategory = createSelector(
    [getCategories, getCategoryId],
    (categories, id) => categories.find(c => c.id === id)
)

export const getRecipesByCategory = createSelector(
    [getRecipes, getCategoryId],
    (recipes, categoryId) => recipes.slice(0, 3) // recipes.filter(r => r.categoryId === categoryId)
)