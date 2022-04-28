import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import './Register.css'

const Register = () => {


    const handleRegistration = (event) => {
        event.preventDefault()

        const volunteer = {
            name: event.target.name.value,
            email: event.target.email.value,
            date: event.target.date.value,
            address: event.target.address.value,
            description: event.target.description.value


        }


        const url = `http://localhost:5000/addvolunteer`


        axios.post(url, volunteer)
            .then(function (response) {

                console.log(response.data.insertedId)
                if (response.data.insertedId) {
                    toast('Volunteer Registation Success fully')
                    event.target.reset()
                }
            })




        console.log(volunteer)

    }



    return (
        <div>
            <h1 className='register-title'>Help Netwok</h1>
            <h3 className='register-title mt-3'>Register as a Volunteer</h3>

            <form onSubmit={handleRegistration} >


                <input className='form-control w-50 mx-auto mb-2 input-felid' type="text" name="name" placeholder='Full Name' />
                <p className='line w-50 mx-auto'></p>
                <input className='form-control w-50 mx-auto mb-2 input-felid' type="text" name="email" placeholder='Email' />
                <p className='line w-50 mx-auto'></p>
                <input className='form-control w-50 mx-auto mb-2 input-felid' type="date" name="date" placeholder='Date' />
                <p className='line w-50 mx-auto'></p>

                <input className='form-control w-50 mx-auto mb-2 input-felid' type="text" name="address" placeholder='Address' />
                <p className='line w-50 mx-auto'></p>

                <input className='form-control w-50 mx-auto mb-2 input-felid' type="text" name="description" placeholder='Desicription' />
                <p className='line w-50 mx-auto'></p>


                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" class="btn btn-outline-success w-30 mx-auto">Registration</button>

                </div>



            </form>

        </div>
    );
};

export default Register;