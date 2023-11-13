
import { IoMdClose } from 'react-icons/io'
import { LiaArrowLeftSolid } from 'react-icons/lia'
import { useState, useRef, useEffect } from 'react'
import HeaderMobileMenu from './HeaderMobileMenu'
import React, { FC } from 'react';

interface HeaderMobileProps {
    icon: string; // Replace 'string' with the actual type of the 'icon' prop
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    openMenu: any
}

const HeaderMobile: FC<HeaderMobileProps> = ({ icon, setOpenMenu, openMenu }) => {

    const [clickMenu, setClickMenu] = useState(false)
    const clickFeature = useRef<HTMLLIElement>(null)
    const Solutions = useRef<HTMLLIElement>(null)
    const Resources = useRef<HTMLLIElement>(null)

    const headerRef = useRef<HTMLDivElement>(null)

    const removeOpen = () => {

        document.querySelectorAll('.menulist').forEach((el) => {
            el.classList.remove('open');
            el.classList.remove('closeMenu')
        });
    }

    const handleElementClicker = (ref: React.RefObject<HTMLLIElement>) => {
        if (ref.current) {
            // Remove 'open' class from all elements with class 'menulist'
            document.querySelectorAll('.menulist').forEach((el) => {
                el.classList.remove('open');
                el.classList.add('closeMenu')
            });

            // Toggle the 'open' class for the clicked element
            ref.current.classList.toggle('open');
            ref.current.classList.remove('closeMenu')
        }
    };


    const [shadowScroll, setShadowScoll] = useState<any>(false)
    useEffect(() => {
        function handleScroll() {

            const scrollY = headerRef.current?.scrollTop ?? 0;
            if (scrollY > 0) {
                setShadowScoll("rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px")
            } else {
                setShadowScoll(null)
            }
        }

        headerRef.current?.addEventListener("scroll", handleScroll);
        return () => {
            headerRef.current?.removeEventListener("scroll", handleScroll);
        }
    }, [])





    return (
        <nav className={`${openMenu ? "translate-x-0" : "translate-x-full"}  
        hidden layer-menu-mobile  menu-mobile ani overflow-hidden fixed bg-white w-full h-full z-50 overflow-y-auto  pt-0  px-0 `}>
            {/* header  */}
            <div className={`flex items-center w-full justify-between sm:h-14 `} style={{ boxShadow: shadowScroll }}>

                <button className={`px-10 pt-7 pb-4 flex items-center gap-1 font-bold text-base text-lightblue sm:text-lg sm:p-4  ${clickMenu ? "" : "hidden"}`}
                    onClick={() => { setClickMenu(!clickMenu); removeOpen() }}>
                    <LiaArrowLeftSolid />
                    <div>Back</div>
                </button>
                <a href="" className={`icon-wrap flex items-center gap-2   px-10 pt-7 pb-4  w-width35  sm:p-0  sm:px-4  ${clickMenu ? "hidden" : ""}`} title='Slack'>
                    <img src={icon} alt="icon" className='w-7 ' />
                    <p className='font-bold text-3xl flex 3' >slack</p>
                </a>
                <button className={`px-10 pt-7 pb-4 sm:p-0  sm:px-4  `} onClick={() => setOpenMenu(false)}>
                    <IoMdClose className='text-xl font-bolder' />
                </button>

            </div>

            {/* content menu */}
      
                <div className="menu-list-mobile  flex flex-col justify-between sm:px-4 pb-4" ref={headerRef}>
                    <HeaderMobileMenu
                        handleElementClicker={handleElementClicker}
                        clickFeature={clickFeature}
                        Solutions={Solutions}
                        Resources={Resources}
                        setClickMenu={setClickMenu}
                        clickMenu={clickMenu} />
                    <div className="sm: flex">
                        <button className={` tracking-wide uppercase ani  hover:btn2-shadow  text-primary text-sm border-primary font-bold h-11 border-2 rounded px-4 mr-2  w-2/4 `}>talk to sales</button>
                        <button className={`tracking-wide uppercase ani text-sm text-white bg-primary hover:bg-primaryhover  font-bold h-11 border border-white rounded px-4  w-2/4`}>download slack</button>
                    </div>
                </div>
           
        </nav >
    )
}

export default HeaderMobile