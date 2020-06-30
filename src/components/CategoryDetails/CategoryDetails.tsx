import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Category, Recipe } from "store/types/food-types";
import { ApplicationState } from "store/types/common";
import { getCategory, getRecipesByCategory } from "store/selectors/food-selectors";

type OwnProps = RouteComponentProps<{ id: string }>

interface StateProps {
    category?: Category;
    recipes: Recipe[];
}

type Props = OwnProps & StateProps;

const CategoryDetails = ({category}: Props) => {
    console.log(category);

    if (!category) return <></>;

    return (
        <div className='category-content'>
            <h1>{category.name}</h1>
            {category.description}
        </div>
    )
}

const mapStateToProps = (state: ApplicationState, props: OwnProps): StateProps => {
    return {
        category: getCategory(state, props.match.params.id),
        recipes: getRecipesByCategory(state, props.match.params.id)
    }
}


// const Routed = withRouter<Props, typeof CategoryDetails>(CategoryDetails);
// export default connect<StateProps, {}, OwnProps, ApplicationState>(mapStateToProps)(Routed);

const Connected = connect<StateProps, {}, OwnProps, ApplicationState>(mapStateToProps)(CategoryDetails);
export default withRouter<Props, typeof Connected>(Connected);