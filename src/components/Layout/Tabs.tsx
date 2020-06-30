import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { urls } from 'urls';

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
                    categories.map(((category, i) =>  {
                        return (
                            <NavbarBrand key={i} className="tabNav" href={urls.category(category.id)}>
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