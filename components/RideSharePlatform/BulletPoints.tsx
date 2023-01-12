import Image from 'next/image';
import React, { FC } from 'react';
import arrowImage from "../../public/assets/arrow.png"

type bulletProps = {
    heading: string;
    paragraph: string
}
const BulletPoints: FC<bulletProps> = ({ heading, paragraph }) => {


    return (
        <div className='flex mb-11'>
            <div className='mt-2'>
                <Image className='w-10 lg:w-auto' src={arrowImage} alt=""></Image>
            </div>
            <div className='ml-6'>
                <h4 className='font-Poppins font-medium text-2xl'>{heading}</h4>
                <p className='mt-4 font-Poppins font-medium text-lg text-[#B8B8B8] lg:max-w-lg'>{paragraph}</p>
            </div>
        </div>
    );
};

export default BulletPoints;