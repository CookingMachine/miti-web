import * as React from 'react';
import { Container, Row, Col } from "reactstrap"
import { BoundActions, ApplicationState } from "store/types/common";
import { appActions } from "store/logic/app";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getIsAppLoading } from "store/selectors/app-selectors";
import { useEffect } from "react";
import { Category } from "store/types/food-types";
import { Recipe } from "store/types/food-types";
import { getCategories } from "store/selectors/food-selectors";
import { getRecipes } from "store/selectors/food-selectors";
import Header from "./Header";
import Tabs from "./Tabs";
import FiltersCategory from "./FiltersCategory";
import FiltersRecipe from './FiltersRecipe';
import Footer from "./Footer";

interface OwnProps {
    children: any;
}

interface StateProps {
    isLoading: boolean;
    categories: Category[];
    recipes: Recipe[];
}

type DispatchProps = BoundActions<typeof appActions>

type Props = OwnProps & StateProps & DispatchProps

const Layout = ({children, isLoading, categories, recipes, init}: Props) => {
    
    useEffect(() => {
        init();
    }, []);

    if (isLoading) {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Loading</h1>
            </div>
        )
    }

    return (
        <div>
            <Header/>
            <Container className='layout'>
                <Row>
                    <Col xs={12}>
                        <Tabs categories={categories} />
                    </Col>
                </Row>
                <div className="search-filter">
                    <FiltersCategory categories={categories}/>
                    <FiltersRecipe recipes={recipes}/>
                </div>
                <div className='layout-content'>
                    {children}
                </div>
            </Container>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state: ApplicationState, props: OwnProps): StateProps => ({
    isLoading: getIsAppLoading(state),
    categories: getCategories(state),
    recipes: getRecipes(state)
})

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): DispatchProps => ({
    ...bindActionCreators(appActions, dispatch)
})

export default connect<StateProps, DispatchProps, OwnProps, ApplicationState>(mapStateToProps, mapDispatchToProps)(Layout);