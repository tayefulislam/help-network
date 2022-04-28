import axios from 'axios';
import React from 'react';
import TitleHead from '../../../Shared/TitleHead/TitleHead';
import './AddEvent.css'

const AddEvent = () => {



    const handleAddEvent = (e) => {
        e.preventDefault()

        const eventName = e.target.eventname.value;
        const date = e.target.date.value;
        const description = e.target.description.value;
        const img = e.target.img.value;


        const event = { eventName, date, description, img }

        console.log(event)

        const url = `http://localhost:5000/addevent`


        axios.post(url, event)
            .then(function (response) {
                console.log(response)
                e.target.reset()
            })



    }




    return (
        <div>

            <TitleHead title='Add Event'></TitleHead>


            <form onSubmit={handleAddEvent} className='form-container'>


                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Event Name</label>

                    <input type="text" className="form-control" name='eventname' />


                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Date</label>

                    <input type="text" className="form-control" name='date' />


                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>

                    <input type="text" className="form-control" name='description' />


                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Image Link</label>

                    <input type="text" className="form-control" name='img' />


                </div>




                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>
    );
};

export default AddEvent;