import React from "react";
import "../../styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import EventCard from "./Search-Comp/EventCard";

export default function Slider( { tournaments }) {
    
    return (
        <div>
            
            <Carousel 
                showStatus={false}
                infiniteLoop={true}
                showThumbs={false}>
               
                <div className="flex gap-4 justify-center mb-[50px]">
                {tournaments.slice(0,3).map((tournament,index) => (
                    <EventCard tournament={ tournament } index ={ index }/>
                ))}
                </div>

                <div className="flex gap-4 justify-center ">
                {tournaments.slice(3,6).map((tournament,index) => (
                    <EventCard tournament={ tournament } index ={ index }/>
                ))}
                </div>
                <div className="flex gap-4 justify-center">
                {tournaments.slice(6,9).map((tournament,index) => (
                    <EventCard tournament={ tournament } index ={ index }/>
                ))}
                </div> 
        
            </Carousel>
        
        </div>
    )

}

// https://www.npmjs.com/package/react-responsive-carousel?activeTab=readme




