import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

type BenifitCardProps = {
    icon: StaticImageData;
    heading: string;
    paragraph: string
}

const BenifitCard: FC<BenifitCardProps> = ({ icon, heading, paragraph }) => {
    return (
        <div className='bg-[#FFFCF2] border border-[#FFE57E] py-7 max-w-md rounded-br-3xl rounded-tl-3xl'>
            <div className='flex justify-center'>
                <Image src={icon} alt=""></Image>
            </div>
            <h6 className='my-4 font-Poppins font-semibold text-[#5A5A5A] text-3xl max-w-sm mx-auto'>{heading}</h6>
            <p className='max-w-sm mx-auto px-10 font-Poppins font-medium    text-[#B8B8B8] text-lg'>{paragraph}</p>
        </div>
    );
};

export default BenifitCard;