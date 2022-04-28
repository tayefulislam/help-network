import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';

const Home = () => {

    const [images, setImages] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/imagedata`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImages(data)
            })
    }, [])

    return (
        <div>

            <Search></Search>

            <div className='image-container'>

                {
                    images.map(image =>
                        <div className='image-con' style={{
                            backgroundColor
                                : `${image.bgcolor}`
                        }} key={image._id}>


                            <img className='image' src={image?.img} alt="" />

                            <h2 className='image-name'>{image.name}</h2>




                        </div>)
                }

            </div>


        </div>
    );
};

export default Home;