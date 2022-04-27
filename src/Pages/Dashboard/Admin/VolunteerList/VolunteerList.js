import React from 'react';
import SideBar from '../../../Shared/SideBar/SideBar';
import TitleHead from '../../../Shared/TitleHead/TitleHead';

const VolunteerList = () => {
    return (
        <div className='volunreer-list'>


            <div ><SideBar></SideBar></div>
            <div>
                <TitleHead></TitleHead>
                <div>
                    <form >
                        <level>

                            Event Name
                            <input type="text" />
                        </level>
                        <level>

                            Event Date
                            <input type="text" />
                        </level>
                        <level>

                            Event Description
                            <input type="text" />
                        </level>
                        <level>

                            Iamge Link
                            <input type="text" />
                        </level>
                    </form>


                </div>
            </div>

        </div>
    );
};

export default VolunteerList;