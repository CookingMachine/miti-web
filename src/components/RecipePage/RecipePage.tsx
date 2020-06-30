import React from "react";
import { ApplicationState } from "store/types/common";
import { RouteComponentProps } from "react-router-dom";
import { Recipe } from "store/types/food-types";
import { getRecipeById } from "store/selectors/food-selectors";
import { connect } from "react-redux";

type OwnProps = RouteComponentProps<{ id: string }>

interface StateProps {
    recipe?: Recipe;
}

type Props = OwnProps & StateProps;

const RecipePage = ({recipe}: Props) => {

    if (!recipe) return <></>;

    return (
        <div className='recipe-page'>
            <h1>{recipe.name}</h1>
        </div>
    )
}

const mapStateToProps = (state: ApplicationState, props: OwnProps): StateProps => {
    return {
        recipe: getRecipeById(state, parseInt(props.match.params.id))
    }
}

export default connect<StateProps, {}, OwnProps, ApplicationState>(mapStateToProps)(RecipePage);