import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.svg";

const Header = (props) => {
    const [isShowEle, setIsShowEle] = useState(false);
    const { refs } = props;

    const navInput = useRef(null);
    const handleClick = () => {
        navInput.current.click();
        setIsShowEle(true);
    };

    const goToFooter = (id) => {
        const reference = refs[`${id}`];
        navInput.current.click();
        setIsShowEle((preShowElem) => {
            return preShowElem ? !preShowElem : preShowElem;
        });
        setTimeout(() => {
            if (!reference?.current) return;
            [1, 2, 3, 4].forEach((elem) => {
                refs[`${elem}`].current.classList.remove("active");
            });
            reference.current.classList.add("active");
            reference.current.scrollIntoView({ behavior: "smooth" });
            reference.current.click({ behavior: "smooth" });
        }, 400);
    };

    return (
        <>
            <header className='flex justify-between xs:mx-2'>
                <a href='/'>
                    <img src={logo} alt='ntLogo' className='w-16 h-16'></img>
                </a>

                <div className='flex items-center space-x-4'>
                    <input
                        type='text'
                        className='bg-transparent border-none px-8 rounded-full w-11/12 py-3 focus:outline-none focus:ring-2 focus:w-100'
                        placeholder='Search trips'
                    ></input>
                    <div
                        className='flex items-center space-x-4'
                        aria-label='search'
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            className='text-white'
                        />
                    </div>
                    <button
                        onClick={() => handleClick()}
                        type='button'
                        className='flex
                            items-center
                            justify-center
                            w-40 h-14
                            cursor-pointer
                            rounded-full
                            bg-custom-cyan
                            text-white
                            text-base
                            font-semibold
                            font-larsseit
                            uppercase
                            lg:w-56
                            focus:outline-none
                            '
                        aria-label='Menu'
                    >
                        menu
                    </button>
                    <div
                        className='navigation'
                        style={{
                            visibility: isShowEle ? "visible" : "hidden",
                        }}
                    >
                        <input
                            type='checkbox'
                            className='navigation__checkbox'
                            id='navi-toggle'
                            ref={navInput}
                        ></input>
                        <label
                            htmlFor='navi-toggle'
                            className='navigation__button'
                            onClick={() => setIsShowEle(false)}
                        >
                            <span className='navigation__icon'>&nbsp;</span>
                        </label>
                        <div className='navigation__background'>&nbsp;</div>
                        <nav className='navigation__nav'>
                            <ul className='navigation__list'>
                                <li
                                    className='navigation__item'
                                    onClick={() => {
                                        goToFooter(1);
                                    }}
                                >
                                    <a href='!#' className='navigation__link'>
                                        <span>01</span>Chill Adventure
                                    </a>
                                </li>
                                <li
                                    className='navigation__item'
                                    onClick={() => {
                                        goToFooter(2);
                                    }}
                                >
                                    <a href='!#' className='navigation__link'>
                                        <span>02</span>Spooky Times
                                    </a>
                                </li>
                                <li
                                    className='navigation__item'
                                    onClick={() => {
                                        goToFooter(3);
                                    }}
                                >
                                    <a href='!#' className='navigation__link'>
                                        <span>03</span>Desert Madness
                                    </a>
                                </li>
                                <li
                                    className='navigation__item'
                                    onClick={() => {
                                        goToFooter(4);
                                    }}
                                >
                                    <a href='!#' className='navigation__link'>
                                        <span>04</span>Out in the wild
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
