// Slideshow.tsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rawData from './mediaData.json'; // Import JSON data directly

interface Media {
    type: "image" | "video";
    url: string;
}

// Use a type assertion here to ensure TypeScript treats the data as Media[]
const mediaData: Media[] = rawData as Media[];

const Slideshow: React.FC = () => {
    const [mediaList, setMediaList] = useState<Media[]>([]);

    useEffect(() => {
        // Directly set the imported data into state
        setMediaList(mediaData);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="w-screen h-screen overflow-hidden">
    <Slider {...settings}>
        {mediaList.map((media, index) => (
            <div key={index} className="w-full h-full focus:outline-none">
                {media.type === "image" ? (
                    <img src={media.url} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                ) : (
                    <video controls className="w-full h-full object-cover">
                        <source src={media.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        ))}
    </Slider>
</div>


    );
};

export default Slideshow;
