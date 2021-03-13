import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import tripsData from "../../data/tripsData.json";

const TripOptions = (props) => {
    const [activeTabId, setActiveTabId] = useState("");

    return (
        <>
            <div className='grid z-1 relative'>
                <section
                    className='bg-custom-black text-white flex items-center justify-center'
                    aria-label='tripsTitle'
                >
                    <div ref={props.refs[`${5}`]} className='z-30'>
                        <div className='flex items-center space-x-6 mx-auto justify-center'>
                            <div className='flex items-center space-x-6 justify-end'>
                                <h2 className='text-white font-Noe font-bold text-3xl md:text-5xl lg:text-6xl'>
                                    Pick your trip
                                </h2>

                                <div
                                    className='flex items-center space-x-4 pr-3'
                                    aria-label='close'
                                >
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className='text-custom-green text-xl mx-3'
                                    />
                                    <p className='font-larsseit text-base tracking-tighter'>
                                        Our team put together some trips to you
                                        to discover, <br /> feel free to
                                        discover each of them.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <ul className='sm:mb-26 mt-14 px-2  mt-18 max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12 flex justify'>
                            {tripsData.map(({ id, tabTitle }) => (
                                <div className='w-1/4 mb-10'>
                                    <li
                                        key={id}
                                        onClick={() => {
                                            setActiveTabId(id);
                                            tripsData.forEach((elem) => {
                                                if (
                                                    !props.refs[`${elem.id}`]
                                                        ?.current
                                                )
                                                    return;
                                                props.refs[
                                                    `${elem.id}`
                                                ].current.classList.remove(
                                                    "activeTab"
                                                );
                                            });
                                        }}
                                        className={`${
                                            activeTabId === id
                                                ? "activeTab"
                                                : "border-b-2 border-custom-green border-opacity-30"
                                        } font-larsseit font-bold text-lg align-middle cursor-pointer pb-8 text-custom-green`}
                                        ref={props.refs[`${id}`]}
                                    >
                                        {tabTitle}
                                    </li>
                                </div>
                            ))}
                        </ul>

                        <ul className='mt-14 px-2 mt-18 max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12 flex justify'>
                            {tripsData.map(
                                ({ id, tabTitle, url, description }, idx) =>
                                    activeTabId === id && (
                                        <div
                                            className='grid justify-center grid-cols-2 gap-28 mt-24'
                                            key={id}
                                        >
                                            <div className='image-container'>
                                                <div className='content'>
                                                    <img
                                                        src={url}
                                                        alt={tabTitle}
                                                        className='rounded-lg'
                                                    />
                                                </div>
                                            </div>

                                            <div className='info'>
                                                <h2 className='font-n text-white uppercase tracking-widest font-bold text-lg mt-3'>
                                                    {tabTitle}
                                                </h2>
                                                <p className='sm:pr-12 font-larsseit text-white text-base pt-10'>
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                            )}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TripOptions;
