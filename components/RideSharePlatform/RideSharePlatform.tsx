import Image from 'next/image';
import React from 'react';
import bikeImage from "../../public/assets/bike.png"
import carImage from "../../public/assets/car.png"
import bikerImage from "../../public/assets/biker.png"
import BulletPoints from './BulletPoints';

const RideSharePlatform = () => {

    const bulletPoints = [
        {
            id: 1,
            heading: "Beat Traffic, Save Time",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing. Utelit tellus luctus nec ullamcorper pulvinar dapibus leo."
        },
        {
            id: 2,
            heading: "We Provide an Immaculate Ride",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing. Utelit tellus luctus nec ullamcorper pulvinar dapibus leo."
        },
        {
            id: 3,
            heading: "We’ve Covered You Up",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing. Utelit tellus luctus nec ullamcorper pulvinar dapibus leo."
        }
    ]

    return (
        <div className='py-24 bg-[#FFFCF2] '>
            <div className='w-full flex flex-col items-center mb-5'>
                <h2 className='ml-[10%] lg:ml-0 font-Poppins font-medium text-4xl'>The Rideshare Platform</h2>
                <p className='ml-[10%] lg:ml-0  mt-3 font-Poppins font-medium text-lg text-[#646464]'>Get your food delivered in less that’s as fast as it can get.</p>
                <div className='mt-5 flex flex-col lg:flex-row'>
                    <button className='flex items-center px-5 py-2 bg-white border-2 border-[#FFE57E] text-[#5A5A5A] font-Inter font-semibold text-lg rounded-md'><Image className='mr-3' src={bikeImage} alt=""></Image>About Bike</button>
                    <button className='mt-3 lg:mt-0 lg:ml-6 px-5 py-2 bg-white  flex items-center font-Inter font-semibold text-lg rounded-md'><Image className='mr-3' src={carImage} alt=""></Image>About Car</button>
                </div>
            </div>
            <div className='ml-[10%] flex flex-col lg:flex-row items-center'>
                <div>
                    <Image src={bikerImage} alt=""></Image>
                </div>
                <div className='lg:ml-24'>
                    {
                        bulletPoints && bulletPoints.map(point => <BulletPoints key={point.id} heading={point.heading} paragraph={point.paragraph}></BulletPoints>)
                    }
                </div>

            </div>
        </div>
    );
};

export default RideSharePlatform;