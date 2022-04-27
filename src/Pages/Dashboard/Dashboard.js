import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import SideBar from '../Shared/SideBar/SideBar';
import TitleHead from '../Shared/TitleHead/TitleHead';
import AddEvent from './Admin/AddEvent/AddEvent';
import VolunteerList from './Admin/VolunteerList/VolunteerList';
import './Dashboard.css'

const Dashboard = () => {


    return (
        <div className='container'>


            <div className='sidebar'><SideBar></SideBar></div>

            <div>
                <AddEvent></AddEvent>
            </div>









        </div>
    );
};

export default Dashboard;