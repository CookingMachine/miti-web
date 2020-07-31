import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "components/Home/Home";
import Layout from "components/Layout/Layout";
import CategoryPage from "components/CategoryPage/CategoryPage";
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import RecipePage from "components/RecipePage/RecipePage";
import LoginPage from "components/LoginPage/LoginPage";
import AdminHomePage from "components/AdminHomePage/AdminHomePage";

library.add(far)

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/category/:id' component={CategoryPage} />
                <Route exact path='/recipe/:id' component={RecipePage} />
                <Route exact path='/admin' component={AdminHomePage} />
           </Switch>
       </Layout>
    );
}

export default App;