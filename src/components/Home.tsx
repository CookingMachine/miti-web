import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
}

const HomePage = ({}: Props) => {

    return (
        <h1>Hi Mark</h1>
    )
}

export default withRouter<Props, typeof HomePage>(HomePage);