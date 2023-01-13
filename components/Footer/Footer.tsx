import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../public/assets/logo.png"
import twitterIcon from "../../public/assets/twitterIcon.png"
import instaIcon from "../../public/assets/instaIcon.png"
import facebookIcon from "../../public/assets/facebookIcon.png"
import linkedinIcon from "../../public/assets/linkedinIcon.png"
import dmIcon from "../../public/assets/dmIcon.png"
import playstoreIcon from "../../public/assets/playstoreIcon.png"
import appStoreIcon from "../../public/assets/appStore.png"

const Footer = () => {
    const icons = [
        {
            id: 1,
            icon: twitterIcon,
            href: "https://twitter.com"
        },
        {
            id: 2,
            icon: instaIcon,
            href: "https://instagram.com"
        },
        {
            id: 3,
            icon: facebookIcon,
            href: "https://facebook.com"
        },
        {
            id: 4,
            icon: linkedinIcon,
            href: "https://linkedin.com"
        },
        {
            id: 5,
            icon: dmIcon,
            href: "/"
        },
    ]
    return (
        <div className='bg-[#FFFCF2] '>
            <div className='px-[10%] grid lg:grid-cols-6 pt-16 pb-20'>
                <div className='col-span-2'>
                    <div className='flex items-center'>
                        <Image src={logo} alt="" width={65} height={43} ></Image>
                        <Link className='ml-2 font-Roboto font-bold text-2xl' href="/">Car2Go</Link>
                    </div>
                    <p className='my-8 max-w-md font-Poppins font-medium text-base text-[#5A5A5A]'>
                        Sit amet consectetur adipiscing elit sed do eiusmo tempor incidunt ut labore et dolore magna aliquae. Start delivering products using ride share courier.
                    </p>
                    <div className='flex justify-start'>
                        {
                            icons.map((icon) => <Link href={icon.href} className='pr-4' key={icon.id}><Image src={icon.icon} alt=""></Image></Link>)
                        }
                    </div>
                </div>
                <div className='col-span-1'>
                    <h3 className='font-Poppins font-medium text-2xl text-[#5A5A5A]'>Links</h3>
                    <div className='mt-8 flex flex-col'>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">About Us</Link>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">Blog Page</Link>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">Services</Link>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">Features</Link>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">Our History</Link>

                    </div>
                </div>
                <div className='col-span-1'>
                    <h3 className='font-Poppins font-medium text-2xl text-[#5A5A5A]'>Support</h3>
                    <div className='mt-8 flex flex-col'>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">Earn with Bike</Link>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">Earn with Car</Link>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">Tearms & Condition</Link>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">Privacy Policy</Link>
                        <Link className='mb-5 font-Poppins font-medium text-base text-[#5A5A5A]' href="/">Contact Us</Link>

                    </div>
                </div>
                <div className='col-span-2'>
                    <h3 className='font-Poppins font-medium text-2xl text-[#5A5A5A]'>Get User App On</h3>
                    <div className='flex mt-8 items-center justify-center border border-[#5A5A5A] max-w-xs py-3 px-6 rounded-md'>
                        <div> <Image src={playstoreIcon} alt=""></Image></div>
                        <p className='ml-3 text-[#5A5A5A] font-thin text-xs'>GET IT ON  <br /> <span className='font-bold text-xl '>Google Play</span></p>
                    </div>
                    <div className='flex mt-8 items-center justify-center border border-[#5A5A5A] max-w-xs py-3 px-6 rounded-md'>
                        <div> <Image src={appStoreIcon} alt=""></Image></div>
                        <p className='ml-3 text-[#5A5A5A] font-thin text-xs'>Download on the<br /> <span className='font-bold text-xl '>App Store</span></p>
                    </div>
                </div>


            </div>
            <div className='mx-[10%] border border-b-[#5A5A5A]'></div>
            <div className='flex justify-center'>
                <p className='font-Poppins font-medium text-[#5A5A5A] text-base py-7'>Copyright © 2022 Car2Go. All Rights Reserved</p>
            </div>
        </div>

    );
};

export default Footer;