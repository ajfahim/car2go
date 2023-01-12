import React, { use, useState } from 'react';
import Image from 'next/image';
import Logo from "../../public/assets/logo.png"
import Link from 'next/link';
import Test from '../test/Test';
import { FcMenu } from 'react-icons/fc'

const Navbar = () => {
    const navItems = ["Home", "Earn with Share", "Services", "Blog"]
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div>
            <div className='w-full h-28 px-[10%] shadow-md flex items-center justify-between'>
                <div className='flex items-center'>
                    <Image src={Logo} alt="site logo" width={63} height={43}></Image>
                    <h1 className='font-Roboto font-bold text-2xl ml-3'>Car2Go</h1>
                </div>
                <div className='hidden lg:block'>
                    {
                        navItems.map(item => <Link className='md:mr-2 lg:mr-10 text-sm lg:text-base text-[#5A5A5A] font-medium' href="/">{item}</Link>)
                    }
                </div>
                <div className='hidden lg:flex items-center'>

                    <select className='font-Inter text-[#5A5A5A] bg-white text-lg font-medium' name="language" id="">
                        <option value="english">English</option>
                        <option value="bangla">Bangla</option>
                    </select>
                    <button className='font-Inter ml-3 px-6 py-3 bg-[#FDD835] text-white text-lg font-semibold rounded-lg'>Contact</button>
                </div>
                {/* mobile menu */}
                <div className='lg:hidden'>
                    <FcMenu size={35} onClick={() => setMobileMenu(!mobileMenu)}></FcMenu>
                </div>

            </div>
            {
                mobileMenu &&
                <div className='block lg:hidden'>
                    {
                        navItems.map(item => <Link className='md:mr-2 lg:mr-10 text-sm lg:text-base text-[#5A5A5A] font-medium block px-4 py-2' href="/">{item}</Link>)
                    }
                    <div className='flex items-center pl-4'>

                        <select className='font-Inter text-[#5A5A5A] bg-white text-lg font-medium' name="language" id="">
                            <option value="english">English</option>
                            <option value="bangla">Bangla</option>
                        </select>
                        <button className='font-Inter ml-3 px-6 py-3 bg-[#FDD835] text-white text-lg font-semibold rounded-lg'>Contact</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;