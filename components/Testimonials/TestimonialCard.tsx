import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai'

type TestimonialCardProps = {
    avatar: StaticImageData;
    name: string;
    designation: string;
    star: number,
    paragraph: string
}

const TestimonialCard: FC<TestimonialCardProps> = ({ avatar, name, designation, star, paragraph }) => {
    return (
        <div className='flex flex-col items-center lg:w-[410px]'>
            <Image className='rounded-full border-4 border-[#FDD835]' src={avatar} alt=""></Image>
            <h6 className='mt-2 font-Poppins text-xl font-medium text-[#5A5A5A]'>{name}</h6>
            <p className='font-Poppins font-medium text-[#B8B8B8] text-base'>{designation}</p>
            <div className='flex'>
                <AiFillStar className='text-[#FDD835]'></AiFillStar>
                <AiFillStar className='text-[#FDD835]'></AiFillStar>
                <AiFillStar className='text-[#FDD835]'></AiFillStar>
                <AiFillStar className='text-[#FDD835]'></AiFillStar>
                <AiFillStar className='text-[#FDD835]'></AiFillStar>
            </div>
            <p className='mt-4 font-Poppins font-normal text-[#B8B8B8] text-lg'>{paragraph}</p>
        </div>
    );
};

export default TestimonialCard;