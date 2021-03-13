import { Fragment } from "react";
import { Link } from "react-router-dom";
import SocialMediaGroup from "../SocialMediaGroup/SocialMediaGroup";

const Footer = (props) => {
    return (
        <Fragment>
            <footer className='flex justify-between pt-10 sm:py-10 md:py-20 '>
                <div
                    className='flex flex-col justify-center sm:ml-0 z-10'
                    onClick={() => {
                        if (!props?.refs?.current) return;
                        props.refs.current.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    <Link
                        to='#'
                        className='font-larsseit transform -rotate-90 text-white text-xs font-medium tracking-widest mb-10'
                    >
                        SCROLL
                    </Link>
                    <span className='border-b-2 transform -rotate-90 mt-6 border-blue-300 border-solid'></span>
                </div>
                <SocialMediaGroup />
            </footer>
        </Fragment>
    );
};

export default Footer;
