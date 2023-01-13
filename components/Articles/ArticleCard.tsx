import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
type ArticleCardProp = {
    image: StaticImageData;
    tags: string[];
    heading: string;
    detail: string;
    date: string;
    timeToRead: string;
}
const ArticleCard: FC<ArticleCardProp> = ({ image, tags, heading, detail, date, timeToRead }) => {
    return (
        <div className='max-w-xs border border-[#FCEB55] rounded-md'>
            <Image className='rounded-md' src={image} alt=""></Image>
            <div className='grid grid-cols-2 gap-1'>
                {
                    tags.map((tag, index) => <div key={index} className="inline-block px-4 py-2 mt-7 bg-[#FFFCF2] font-Poppins font-medium text-[#F9A825] text-lg">
                        {tag}
                    </div>)
                }
            </div>
            <h4 className='mt-5 ml-1 font-Poppins font-medium text-2xl'>{heading}</h4>
            <p className='mt-2 ml-1 pb-5 font-Poppins font-normal text-xs text-[#A0A0A0] border-dashed border-b'>{detail}</p>
            <div className='my-4 flex'>
                <p className='ml-1 font-Poppins font-medium text-lg text-[#646464]'>{date}</p>
                <p className='ml-8 font-Poppins font-medium text-lg text-[#646464]'>{timeToRead}</p>
            </div>
        </div>
    );
};

export default ArticleCard;