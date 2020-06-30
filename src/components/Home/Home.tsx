import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Recipe } from 'store/types/food-types';
import { ApplicationState } from 'store/types/common';
import { getRecipes } from 'store/selectors/food-selectors';
import { connect } from 'react-redux';
import RecipeCard from 'components/RecipeCard/RecipeCard';

interface OwnProps extends RouteComponentProps {
}

interface StateProps {
    recipes: Recipe[];
}

type Props = OwnProps & StateProps;

const Home = ({recipes}: Props) => {
    return (
        <div className='home-content'>
            <div className='recipes'>
                {recipes.map((recipe, i) => (
                    <RecipeCard key={i} recipe={recipe}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state: ApplicationState, props: OwnProps): StateProps => {
    return {
        recipes: getRecipes(state)
    }
}

const Connected = connect<StateProps, {}, OwnProps, ApplicationState>(mapStateToProps)(Home);
export default withRouter(Connected);