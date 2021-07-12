import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Category, Recipe } from "store/types/food-types";
import { ApplicationState } from "store/types/common";
import { getCategory, getRecipesByCategory } from "store/selectors/food-selectors";
import RecipeCard from "components/RecipeCard/RecipeCard";
import { Row, Col } from "reactstrap";
import PopularRecipes from "components/PopularRecipes/PopularRecipes";

type OwnProps = RouteComponentProps<{ id: string }>

interface StateProps {
    category?: Category;
    recipes: Recipe[];
}

type Props = OwnProps & StateProps;

const CategoryPage = ({category, recipes}: Props) => {

    if (!category) return <></>;

    return (
        <div className='category-page'>
            <Row>
                <Col xs={6}>
                    <h1>{category.name}</h1>
                    {category.description}
                    {recipes.map((recipe, i) => (
                        <RecipeCard key={i} recipe={recipe} />
                    ))}
                </Col>
                <Col xs={6}>
                    <PopularRecipes/>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state: ApplicationState, props: OwnProps): StateProps => {
    return {
        category: getCategory(state, props.match.params.id),
        recipes: getRecipesByCategory(state, props.match.params.id)
    }
}

const Connected = connect<StateProps, {}, OwnProps, ApplicationState>(mapStateToProps)(CategoryPage);
export default withRouter<Props, typeof Connected>(Connected);