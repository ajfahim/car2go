import React from 'react';
import TestimonialCard from './TestimonialCard';
import avatar from "../../public/assets/avater.png"

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            avatar: avatar,
            name: "Jhon Samson",
            designation: "Company Owner",
            star: 5,
            paragraph: "“There are many variation of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going use passage.”"
        },
        {
            id: 2,
            avatar: avatar,
            name: "Jhon Samson",
            designation: "Company Owner",
            star: 5,
            paragraph: "“There are many variation of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going use passage.”"
        },
        {
            id: 3,
            avatar: avatar,
            name: "Jhon Samson",
            designation: "Company Owner",
            star: 5,
            paragraph: "“There are many variation of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going use passage.”"
        },
    ]
    return (
        <div className='text-center'>
            <h3 className='font-Poppins font-medium text-4xl text-[#5A5A5A]'>What Our Customers Says</h3>
            <p className='mt-2 font-Poppins font-medium text-base text-[#B8B8B8]'>Get your food delivered in less that’s as fast as it can get.</p>
            <div className='mt-10 mx-[10%] grid lg:grid-cols-3 gap-5 items-center justify-items-center'>
                {
                    testimonials.map(testimonial => <TestimonialCard key={testimonial.id} avatar={testimonial.avatar} name={testimonial.name} designation={testimonial.designation} star={testimonial.star} paragraph={testimonial.paragraph}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;