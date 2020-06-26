import * as React from "react";
import Header from "./Header";
import { Container, InputGroupText } from "reactstrap";

interface LayoutProps {
    children: any;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <Container className='layout'>
            <Header />
            {children}
        </Container>
    )
}

export default Layout;