import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from '../Shared/SideBar/SideBar';
import TitleHead from '../Shared/TitleHead/TitleHead';
import VolunteerList from './Admin/VolunteerList/VolunteerList';

const Dashboard = () => {
    return (
        <div>


            <div><SideBar></SideBar></div>

            <div>
                <TitleHead></TitleHead>

            </div>

        </div>
    );
};

export default Dashboard;