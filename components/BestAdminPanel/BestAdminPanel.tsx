import Image from 'next/image';
import React from 'react';
import adminPanelImage from "../../public/assets/adminPanel.png"

const BestAdminPanel = () => {
    return (
        <div className='py-24 bg-[#FFFCF2] flex flex-col-reverse lg:flex-row items-center justify-center'>
            <div className='ml-[10%] lg:w-1/2 flex flex-col justify-center'>
                <h2 className='mt-3 font-Poppins font-medium text-3xl lg:text-4xl text-[#5A5A5A]'>Car2Go Best Admin Pannel</h2>
                <p className=' mt-3 font-Poppins font-medium text-lg text-[#B8B8B8]'>Download and install the Car2Go. Enter your phone number and make your user account. when approved you may start driving.</p>
                <div className='mt-5 mx-auto'>

                    <button className='mt-3 lg:mt-0 px-14 py-5 text-[#FBC02D] border border-[#FBC02D] font-Inter font-semibold text-lg rounded-md'>Go To Admin</button>
                </div>
            </div>
            <div className='w-11/12 lg:w-full mr-[10%] flex justify-center'>
                <Image src={adminPanelImage} alt=""></Image>
            </div>
        </div>
    );
};

export default BestAdminPanel;