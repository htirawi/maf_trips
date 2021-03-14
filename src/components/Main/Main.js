import { useState, useRef, useEffect } from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import TripOptions from "../TripOptions/TripOptions";
import BackgroundImage from "../../assets/images/ganapathy.png";

const Main = () => {
    const chillRef = useRef(null);
    const spookyRef = useRef(null);
    const dessertRef = useRef(null);
    const outWildRef = useRef(null);
    const scrollToContent = useRef(null);

    /* we are using these values to reflect tabs names */
    const refs = {
        1: chillRef,
        2: spookyRef,
        3: dessertRef,
        4: outWildRef,
        5: scrollToContent,
    };
    return (
        <>
            <div
                className='bg-cover relative'
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                }}
            >
                {/* Main container */}
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-4 pt-10'>
                    <Header refs={refs} />
                    <Content />
                    <Footer refs={scrollToContent} />
                    {/* this div is the one that responsible for the shadow at the end of main poge image */}
                    <div className='bg-custom-gradient-to-r absolute w-full bottom-0 z-0 left-0 h-96'></div>
                </div>
            </div>
            <TripOptions refs={refs} />
        </>
    );
};

export default Main;
