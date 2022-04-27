import React from 'react';
import { Nav } from 'react-bootstrap';
import {

    Link,

} from "react-router-dom";
import TitleHead from '../TitleHead/TitleHead';

const SideBar = () => {


    return (
        <div>
            <div><Nav className="flex-column">
                <Nav.Link as={Link} to="/addevent">Vulenteer LIst</Nav.Link>
                <Nav.Link as={Link} to="/">Add Event</Nav.Link>


            </Nav></div>


        </div>
    );
};

export default SideBar;