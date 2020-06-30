import { ApplicationState } from "store/types/common";
import { createSelector } from "reselect";

export const getCategories = (state: ApplicationState) => state.food.categories;
export const getRecipes = (state: ApplicationState) => state.food.recipes;

const getCategoryId = (state: ApplicationState, id: string) => id;
export const getCategory = createSelector(
    [getCategories, getCategoryId],
    (categories, id) => categories.find(c => c.id === id)
)

const getRecipeId = (state: ApplicationState, id: number) => id;
export const getRecipeById = createSelector(
    [getRecipes, getRecipeId],
    (recipes, id) => recipes.find(r => r.id === id)
)

export const getRecipesByCategory = createSelector(
    [getRecipes, getCategoryId],
    (recipes, categoryId) => recipes.slice(0, 3) // TODO recipes.filter(r => r.categoryId === categoryId)
)

export const getPopularRecipes = createSelector(
    [getRecipes],
    (recipes) => recipes.slice(0, 5) // TODO
)