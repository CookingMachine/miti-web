import React from "react";
import { ApplicationState } from "store/types/common";
import { Recipe } from "store/types/food-types";
import { getPopularRecipes } from "store/selectors/food-selectors";
import { connect } from "react-redux";
import RecipeCard from "components/RecipeCard/RecipeCard";

interface StateProps {
    recipes: Recipe[];
}

const PopularRecipes = ({recipes}: StateProps) => {
    return (
        <div className='popular-recipes'>
            <span>Популярные материалы</span>
            {recipes.map((recipe, i) => (
                <RecipeCard key={i} recipe={recipe} />
            ))}
        </div>
    );
}

const mapStateToProps = (state: ApplicationState, props: any): StateProps => ({
    recipes: getPopularRecipes(state)
})

export default connect<StateProps, {}, {}, ApplicationState>(mapStateToProps)(PopularRecipes);