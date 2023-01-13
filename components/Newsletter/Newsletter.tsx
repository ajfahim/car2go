import React from 'react';

const Newsletter = () => {
    return (
        <div className='mx-[10%] my-20 bg-[#FFFCF2] rounded-md py-12 flex flex-col items-center border-2 border-[#FFE57E]'>
            <h4 className='mb-10 font-Poppins font-medium text-3xl text-[#5A5A5A] text-center'>Get Subscribe for Newsletter</h4>
            <form className='flex flex-col lg:flex-row'>
                <input className='h-16 pl-5 py-6 lg:w-[700px]' type="text" placeholder='Enter your email'></input>
                <button className='mt-3 lg:mt-0 lg:ml-5 font-Poppins px-10 py-5 bg-[#FDD835] text-white text-lg lg:text-xl font-medium rounded-lg'>Subscribe</button>
            </form>

        </div>
    );
};

export default Newsletter;