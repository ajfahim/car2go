import React from 'react';
import rideToGoIcon from "../../public/assets/rideToGoIcon.png"
import manWithHeadphoneIcon from "../../public/assets/manWithHeadphoneIcon.png"
import easyToGoIcon from "../../public/assets/easyToGoIcon.png"
import WorkCard from './WorkCard';

const Work = () => {
    const works = [
        {
            id: 1,
            icon: rideToGoIcon,
            heading: "Ride To Go",
            paragraph: "Have to reach office or going for shopping ? Just put your current location and destination and search a ride that suits youHave to reach office or going for shopping ? Just put your current location and destination and search a ride that suits you"

        },
        {
            id: 2,
            icon: manWithHeadphoneIcon,
            heading: "Good Way To Admin Control",
            paragraph: "Have to reach office or going for shopping ? Just put your current location and destination and search a ride that suits youHave to reach office or going for shopping ? Just put your current location and destination and search a ride that suits you",
            focus: true

        },
        {
            id: 3,
            icon: easyToGoIcon,
            heading: "Easy To Drive",
            paragraph: "Have to reach office or going for shopping ? Just put your current location and destination and search a ride that suits you"

        },
    ]
    return (
        <div className='py-20 flex flex-col justify-center items-center'>
            <h2 className='font-Poppins font-medium text-4xl text-[#5A5A5A]'>Car2Go Work</h2>
            <p className='max-w-2xl text-center mt-2 font-Poppins font-medium text-lg text-[#B8B8B8]'>Download and install the Car2Go. Enter your phone number and make your user account. when approved you may start driving.</p>
            <div className='lg:mx-[10%] grid lg:grid-cols-3 gap-5 items-center justify-items-center'>
                {
                    works.map(work => <WorkCard key={work.id} heading={work.heading} paragraph={work.paragraph} icon={work.icon} focus={work.focus}></WorkCard>)
                }
            </div>
        </div>
    );
};

export default Work;