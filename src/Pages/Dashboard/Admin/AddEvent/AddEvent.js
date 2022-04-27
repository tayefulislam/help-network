import React from 'react';
import TitleHead from '../../../Shared/TitleHead/TitleHead';
import './AddEvent.css'

const AddEvent = () => {
    return (
        <div>

            <TitleHead title='Add Event'></TitleHead>


            <form className='form-container'>


                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Event Name</label>

                    <input type="text" class="form-control" name='eventname' />


                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Date</label>

                    <input type="text" class="form-control" name='date' />


                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Description</label>

                    <input type="text" class="form-control" name='description' />


                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Image Link</label>

                    <input type="text" class="form-control" name='img' />


                </div>




                <button type="submit" class="btn btn-primary">Submit</button>

            </form>

        </div>
    );
};

export default AddEvent;