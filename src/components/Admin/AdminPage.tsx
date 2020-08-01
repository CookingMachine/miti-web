import React, { useState } from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import AdminDbEditor from "./DbEditor/AdminDbEditor";
import AdminComingSoon from "./AdminComingSoon";

interface Props {

}

enum AdminTab {
    DatabaseEditor = 1,
    ComingSoon = 2,
}

const tabNames: Record<AdminTab, string> = {
    [AdminTab.DatabaseEditor]: 'Database editor',
    [AdminTab.ComingSoon]: 'Coming soon',
}

const AdminPage = ({}: Props) => {

    const [selectedTab, setSelectedTab] = useState<AdminTab>(AdminTab.DatabaseEditor);

    const Tab = ({tab}: {tab: AdminTab}) => (
        <NavItem>
            <NavLink href='#' onClick={() => setSelectedTab(tab)} active={selectedTab === tab}>
                {tabNames[tab]}
            </NavLink>
        </NavItem>
    );

    return (
        <div className='admin-page'>
            <Nav tabs>
                <Tab tab={AdminTab.DatabaseEditor}/>
                <Tab tab={AdminTab.ComingSoon}/>
            </Nav>
            {selectedTab === AdminTab.DatabaseEditor && <AdminDbEditor/>}
            {selectedTab === AdminTab.ComingSoon && <AdminComingSoon/>}
        </div>
    )
}

export default AdminPage;