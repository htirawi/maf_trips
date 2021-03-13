import fb from "../../assets/images/fb.svg";
import ig from "../../assets/images/ig.svg";
import tw from "../../assets/images/tw.svg";
import ReactTooltip from "react-tooltip";

const SocialMediaGroup = () => {
    return (
        <div className='z-10'>
            <div
                className='list-none space-y-2 mr-6 sm:mr-0'
                data-name='social_media'
            >
                <div className='p-8rounded-lg max-w-md pb-10'>
                    <button className='mt-3 text-white w-full rounded focus:outline-none'>
                        <img
                            src={tw}
                            alt='twitter logo'
                            className='w-3 h-4'
                            data-tip='Twitter'
                        />
                    </button>

                    <button className='mt-3 text-white w-full rounded focus:outline-none'>
                        <img
                            src={ig}
                            alt='instagram logo'
                            className='w-3 h-4'
                            data-tip='Instagram'
                        />
                    </button>

                    <button className='mt-3 text-white w-full rounded focus:outline-none'>
                        <img
                            src={fb}
                            alt='facebook logo'
                            className='w-3 h-4'
                            data-tip='Facebook'
                        />
                    </button>
                </div>
                <ReactTooltip type='info' />
            </div>
        </div>
    );
};

export default SocialMediaGroup;
