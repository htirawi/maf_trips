import { Fragment } from "react";

const Content = () => {
    return (
        <Fragment>
            {/* main content */}
            <div className='flex flex-col items-center text-center justify-center mt-14 sm:mt-36 md:mt-32 lg:mt-36 text-white lg:mb-36'>
                <h1 className='font-noeDisplay text-6xl sm:text-8xl mb-2 animate-moveInLeft'>
                    Night Trips
                </h1>
                <div className='font-larsseit font-bold text-sm my-7'>
                    WE GOT TRIPS FOR THE TRIPPSTER IN YOU
                </div>
                {/* trip description */}
                <div className='text-sm font-larsseit w-5/12 md:text-justify text-justify break-all leading-6 animate-moveInRight'>
                    <span>
                        Neque, eros commodo, nascetur ullamcorper vitae.
                        Tincidunt ut venenatis, volutpat lorem ut faucibus
                        mauris, quisque. Integer gravida sed quis congue. Vel
                        risus, arcu a viverra leo id pulvinar ultricies. Enim in
                        in in pulvinar nulla sollicitudin. Ullamcorper.
                    </span>
                </div>
            </div>
        </Fragment>
    );
};

export default Content;
