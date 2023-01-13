import React from 'react';
import blogImage from "../../public/assets/blogImage.png"
import ArticleCard from './ArticleCard';

const Articles = () => {

    const articles = [
        {
            id: 1,
            image: blogImage,
            tags: ["Traffic Jam"],
            heading: "We Have Been Serving You, We Need You Now",
            detail: "We Have Been Serving You, We Need You Now We Have Been Serving You, We Need You Now",
            date: "April 22, 2022",
            timeToRead: "5 Min Read"
        },
        {
            id: 2,
            image: blogImage,
            tags: ["Traffic Jam"],
            heading: "We Have Been Serving You, We Need You Now",
            detail: "We Have Been Serving You, We Need You Now We Have Been Serving You, We Need You Now",
            date: "April 22, 2022",
            timeToRead: "5 Min Read"
        },
        {
            id: 3,
            image: blogImage,
            tags: ["Traffic Jam"],
            heading: "We Have Been Serving You, We Need You Now",
            detail: "We Have Been Serving You, We Need You Now We Have Been Serving You, We Need You Now",
            date: "April 22, 2022",
            timeToRead: "5 Min Read"
        },
    ]

    return (

        <div className='mt-20'>
            <h3 className='text-center font-Poppins font-medium text-4xl text-[#5A5A5A]'>Read Latest Articles of Collab</h3>
            <p className='text-center mt-2 font-Poppins font-medium text-base text-[#B8B8B8]'>Get your food delivered in less that’s as fast as it can get.</p>
            <div className='grid lg:grid-cols-3 gap-7 mx-[10%] items-center justify-items-center mt-10'>
                {
                    articles.map(article => <ArticleCard key={article.id} image={article.image} tags={article.tags} heading={article.heading} detail={article.detail} date={article.date} timeToRead={article.timeToRead}></ArticleCard>)
                }
            </div>

        </div>

    );
};

export default Articles;