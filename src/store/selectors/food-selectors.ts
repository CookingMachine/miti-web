import { ApplicationState } from "store/types/common";

export const getCategories = (state: ApplicationState) => state.food.categories;
export const getRecipes = (state: ApplicationState) => state.food.recipes;