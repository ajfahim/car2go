import React from 'react';
import beeLogo from "../../public/assets/beeLogo.png";
import adidasLogo from "../../public/assets/adidasLogo.png";
import oLogo from "../../public/assets/oLogo.png";
import zLogo from "../../public/assets/zLogo.png";
import wLogo from "../../public/assets/wLogo.png";
import redditLogo from "../../public/assets/redditLogo.png";
import Image from 'next/image';

const Logos = () => {

    const logos = [beeLogo, wLogo, redditLogo, oLogo, zLogo, adidasLogo, wLogo]
    return (
        <div className='mx-[2%] my-20 grid grid-cols-2 gap-y-5 md:grid-cols-4 lg:grid-cols-7 justify-items-center'>
            {logos.map(logo => <Image className='opacity-60' src={logo} alt=""></Image>)}
        </div>
    );
};

export default Logos;