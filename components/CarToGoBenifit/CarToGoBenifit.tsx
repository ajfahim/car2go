import React from 'react';
import BenifitCard from './BenifitCard';
import coinIcon from "../../public/assets/coinIcon.png"
import clockIcon from "../../public/assets/clockIcon.png"
import supportIcon from "../../public/assets/manLaptopIcon.png"

const CarToGoBenifit = () => {
    const cards = [
        {
            id: 1,
            icon: coinIcon,
            heading: "Earnings",
            paragraph: "By driving with tere you can earn more.By driving with tere you can earn more.By driving with tere you can earn more."
        },
        {
            id: 2,
            icon: clockIcon,
            heading: "Flexible working hours",
            paragraph: "You can decide when, and how much time you want to drive."
        },
        {
            id: 3,
            icon: supportIcon,
            heading: "Customer support 24/7",
            paragraph: " We are proud to be at your service 24/7!"
        }
    ]
    return (
        <div className='text-center my-20'>
            <h3 className='font-Poppins font-medium text-4xl text-[#5A5A5A]'>Car2Go Benifit</h3>
            <div className='mt-10 grid lg:grid-cols-3 gap-5 px-[10%] justify-items-center'>
                {
                    cards.map(card => <BenifitCard icon={card.icon} heading={card.heading} paragraph={card.paragraph} key={card.id}></BenifitCard>)
                }
            </div>
        </div>
    );
};

export default CarToGoBenifit;