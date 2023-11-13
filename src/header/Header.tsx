import { useState, useEffect, useRef } from 'react'
import icon from '../img/icon.png'
import { FiSearch } from 'react-icons/fi'
import Features from './Features/Features'
import Solutions from './Solutions/Solutions'
import Resources from './Resources/Resources'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import HeaderMobile from './HeaderMobile/HeaderMobile'
const Header = ({ isSroll, setIsScroll }: any) => {

    const headerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 200) {
                setIsScroll(true)
                window.addEventListener("scroll", handleScrollback);
                window.removeEventListener("scroll", addAniBack);
            }
        }

        function handleScrollback() {
            if (window.scrollY < 201) {
                setIsScroll(false)
                window.addEventListener("scroll", addAniBack);
                return () => {
                    window.removeEventListener("scroll", addAniBack);
                };
            }
        }

        function addAniBack() {
            document.getElementById("header")?.classList.add("menuAniBack")
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", addAniBack);

        };
    }, [isSroll])


    //dropdown
    const [isFeatures, setIsFeatures] = useState(false)
    const [isSolution, setIsSolution] = useState(false)
    const [isResources, setIsResources] = useState(false)


    //search bar 
    const [isSearch, setIsSearch] = useState(false)

    //mobile menu
    const [openMenu, setOpenMenu] = useState(false)


    const mediaQuery = window.matchMedia("(min-width: 1080px)");
    useEffect(() => {


        const matched = () => {
            if (mediaQuery.matches) {
                document.body.classList.remove("body-modal");
                document.querySelector('main')?.classList.remove("overflow-y-scroll")
            }
            else {
                document.body.classList.add("body-modal");
                document.querySelector('main')?.classList.add("overflow-y-scroll")
            }
        }


        if (openMenu === true) {
            document.body.classList.add("body-modal");
            document.querySelector('main')?.classList.add("overflow-y-scroll")
            mediaQuery.addListener(matched)

        }



        return () => {
            document.body.classList.remove('body-modal');
            document.querySelector('main')?.classList.remove("overflow-y-scroll")
            mediaQuery.removeListener(matched)
        };


    }, [openMenu])


    return (
        <>
            <nav className='layer-center '>
                <div id='header' ref={headerRef} className={`  inset-x-0  layer-menu  sm:h-14
            ${isSroll ? "menuScrollUp   menuAni" : " menuScrollDown    "}   
                ${isSearch ? "bg-white isSearch rounded-full nr:rounded-none " : ""}
           `}>
                    <a href="" className={`icon-wrap flex items-center gap-2 pr-4 pb-1 ${isSearch ? "lg:hidden" : ""}`} title='Slack'>
                        <img src={icon} alt="icon" className='w-7 ' />
                        <p className='font-bold text-3xl flex  leading-3' >slack</p>
                    </a>
                    <nav className='flex items-center justify-between flex-1 md:justify-end '>

                        {/* normal */}
                        <ul className={`flex items-center md:hidden font-bold text-sm ${isSearch ? "hidden" : ""}`}>
                            <li className='relative' >

                                <Features isFeatures={isFeatures} setIsFeatures={setIsFeatures} />
                            </li>
                            <li>

                                <Solutions isSolution={isSolution} setIsSolution={setIsSolution} />
                            </li>
                            <li>
                                <a href="" className='hover:underline py-1 px-3'>Exterprise</a>
                            </li>
                            <li>

                                <Resources isResources={isResources} setIsResources={setIsResources} />
                            </li>
                            <li>
                                <a href="" className='hover:underline py-1 px-3'>Pricing</a>
                            </li>
                        </ul>
                        {/* search bar */}

                        <div className={`flex items-center ${isSearch ? "w-full" : ""}`}>
                            <a className="text-xl mr-6 cursor-pointer md:mr-0" onClick={() => { setIsSearch(!isSearch); setIsScroll(true) }}>
                                <FiSearch />
                            </a>
                            <div className={`${isSearch ? "hidden" : ""}`}>
                                <a href='' className='font-bold text-sm hover:underline mr-5 md:hidden'>Sign in</a>
                                <button className={`${isSroll ? "text-primary border-primary  hover:btn2-shadow " : "border-white text-white"}  tracking-wide uppercase ani text-sm font-bold h-11 border b rounded px-4 m-5 hover:btn-shadow lg:hidden`}>talk to sales</button>
                                <button className={`${isSroll ? "bg-primary text-white    hover:bg-primaryhover " : "bg-white hover:btn2-shadow hover:border-primary"}tracking-wide uppercase ani text-sm text-primary   font-bold h-11 border border-white rounded px-4 md:hidden`}>try for free</button>
                                <button onClick={() => { setOpenMenu(!openMenu) }} className=' ml-8  hidden text-xl md:block  '><GiHamburgerMenu /></button>
                            </div>

                            <div className={`${isSearch ? "" : "hidden"} w-full h-14 mr-4 pr-3 lg:mr-0`}>
                                <form action="" className='mt-1.5   flex items-center border-b border-b-black nr:mx-4'>
                                    <input
                                        placeholder='Find anything (ie. channels,emoji, or reset password)'
                                        type="text"
                                        className='focus:outline-none  bg-transparent
                                     w-full m-0 py-2 pr-3 ml-3 flex items-center h-10 
                                     placeholder:text-stone-600' />
                                    <button type='submit' onClick={(e) => { setIsSearch(!isSearch); e.preventDefault() }} className=' '>
                                        <AiOutlineClose className='text-2xl h-10 ' />
                                    </button>
                                </form>
                            </div>
                            <div className={`${isSearch ? "" : "hidden"} lg:hidden`}>
                                <a href="" className="ml-5 uppercase text-primary font-bold ani text-sm top-0 bottom-0 left-0 right-0 hover:button-shadow-hover tracking-wide button-shadow rounded h-10 py-3 px-4">
                                    search
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </nav>

            {/* mobile menu */}
            <HeaderMobile icon={icon} setOpenMenu={setOpenMenu} openMenu={openMenu} />







        </>
    )
}

export default Header