import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
type workCardProps = {
    id?: number,
    icon: StaticImageData,
    heading: string,
    paragraph: string,
    focus?: boolean
}

const WorkCard: FC<workCardProps> = ({ icon, heading, paragraph, focus }) => {
    return (
        <div className={`${focus ? "py-20 w-[400px] h-[500px]" : "py-14 w-[300px] h-[380px]"} px-8 bg-[#FFFCF2] flex flex-col justify-center items-center mt-10`}>
            <Image src={icon} alt=""></Image>
            <h3 className={`${focus ? "font-semibold text-3xl" : "font-medium text-2xl"} text-center mb-5 mt-5 font-Poppins font-medium text-3xl text-[#5A5A5A]`}>{heading}</h3>
            <p className={`${focus ? "font-normal" : "font-medium text-[#B8B8B8]"} text-center`}>{paragraph}</p>
        </div>
    );
};

export default WorkCard;