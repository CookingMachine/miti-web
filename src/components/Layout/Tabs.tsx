import * as React from 'react';
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap';

interface Props {
    categories: Category[];
}


export interface Category {
    name: string;
    id: string;
}



const Tabs = ({categories}: Props) => {
    return (
        <div className="menu">
            <Navbar color="white" light expand="md">
                {
                    categories.map((category =>  {
                        return (
                            <NavbarBrand className="tabNav" href="/">
                                {category.name}
                            </NavbarBrand>
                        )
                    }))
                }
            </Navbar>
        </div>
    )
}

export default Tabs;