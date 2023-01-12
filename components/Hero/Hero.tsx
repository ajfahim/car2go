import Image from 'next/image';
import React from 'react';
import heroImage from "../../public/assets/heroImage.png"

const Hero = () => {
    return (
        <div className='mt-5 lg:mt-10 mx-5 lg:ml-[10%] lg:mr-[5%] lg:flex items-end'>
            <div className='lg:w-1/2'>
                <h2 className='font-Poppins font-semibold text-3xl lg:text-5xl text-[#5A5A5A]'>DOWNLOAD APP, <br /> SAVE MONEY, MAKE <br /> FRIENDS!</h2>

                <p className='mt-2 lg:max-w-lg font-Poppins font-medium text-lg text-[#B8B8B8]'>Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for ? Lets ride together</p>

                <div className='mt-16 mb-4 lg:mb-0 flex flex-col md:block'>
                    <button className='font-Poppins px-10 py-5 bg-[#FDD835] text-white text-lg lg:text-xl font-medium rounded-lg'>Earn With Share</button>
                    <button className='font-Poppins mt-3 md:mt-0 md:ml-9 px-10 py-5 text-[#FDD835] border border-[#FDD835] text-lg lg:text-xl font-medium rounded-lg'>Download App</button>
                </div>
            </div>
            <div>
                <Image src={heroImage} alt="hero image"></Image>
            </div>
        </div>
    );
};

export default Hero;