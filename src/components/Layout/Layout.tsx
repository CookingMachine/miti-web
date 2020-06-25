import * as React from "react";
import Header from "./Header";

interface LayoutProps {
    children: any;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className='container layout'>
            <Header />
            {children}
        </div>
    )
}

export default Layout;