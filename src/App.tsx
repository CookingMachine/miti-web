import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "components/Home/Home";
import Layout from "components/Layout/Layout";
import CategoryDetails from "components/CategoryDetails/CategoryDetails";
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far)

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/category/:id' component={CategoryDetails} />
           </Switch>
       </Layout>
    );
}

export default App;