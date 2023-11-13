
import { FaAngleRight } from 'react-icons/fa6'
import FeaturesMenu from './FeaturesMenu'
import SolutionsMenu from './SolutionsMenu'
import ResourcesMenu from './ResourcesMenu'
import React, { FC } from 'react';

interface HeaderMobileMenuProps {
    handleElementClicker: (event: React.RefObject<HTMLLIElement>) => void;
    clickFeature: any;
    Solutions: any;
    Resources: any;
    clickMenu: boolean;
    setClickMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = (
    { handleElementClicker,
        clickFeature,
        Solutions, Resources,
        clickMenu,
        setClickMenu }) => {

    return (
        <nav className='flex flex-col '>
            <ul className='pt-4'>
                <li id='features ' className='mb-6 sm:mb-4 menulist' ref={clickFeature} onClick={() => handleElementClicker(clickFeature)} >
                    <button className={`w-full ${clickMenu ? "pointer-events-none" : ""}`} onClick={() => setClickMenu(!clickMenu)} >
                        <div className='Features flex items-center font-bold text-lg justify-between '>
                            Features
                            <span className={`${clickMenu ? "hidden" : ""}`}>
                                <FaAngleRight className="text-xl font-bolder" />
                            </span>
                        </div>
                    </button>
                    <FeaturesMenu />
                </li>
                <li id='Solutions' className='mb-6 sm:mb-4 menulist' ref={Solutions} onClick={() => handleElementClicker(Solutions)}>
                    <button className={`w-full ${clickMenu ? "pointer-events-none" : ""}`} onClick={() => setClickMenu(!clickMenu)} >
                        <div className='Features flex items-center font-bold text-lg justify-between '>
                            Solutions
                            <span className={`${clickMenu ? "hidden" : ""}`}>
                                <FaAngleRight className="text-xl font-bolder" />
                            </span>
                        </div>
                    </button>
                    <SolutionsMenu />
                </li>
                <li id='Enterprise' className='mb-6 sm:mb-4  menulist'>
                    <button className={`w-full hover:text-lightblue ${clickMenu ? "pointer-events-none" : ""}`} onClick={() => setClickMenu(!clickMenu)} >
                        <div className='Features flex items-center font-bold text-lg justify-between '>
                            Enterprise
                        </div>
                    </button>
                </li>
                <li id='Resources' className='mb-6 sm:mb-4 menulist' ref={Resources} onClick={() => handleElementClicker(Resources)}>
                    <button className={`w-full ${clickMenu ? "pointer-events-none" : ""}`} onClick={() => setClickMenu(!clickMenu)} >
                        <div className='Features flex items-center font-bold text-lg justify-between '>
                            Resources
                            <span className={`${clickMenu ? "hidden" : ""}`}>
                                <FaAngleRight className="text-xl font-bolder" />
                            </span>
                        </div>
                    </button>
                    <ResourcesMenu />
                </li>
                <li id='Enterprise' className='mb-6 sm:mb-4 menulist'>
                    <button className={`w-full hover:text-lightblue ${clickMenu ? "pointer-events-none" : ""}`} onClick={() => setClickMenu(!clickMenu)} >
                        <div className='Features flex items-center font-bold text-lg justify-between '>
                            Pricing
                        </div>
                    </button>
                </li>
                <li id='Enterprise' className='mb-6 sm:mb-4 menulist'>
                    <button className={`w-full hover:text-lightblue ${clickMenu ? "pointer-events-none" : ""}`} onClick={() => setClickMenu(!clickMenu)} >
                        <div className='Features flex items-center font-bold text-lg justify-between '>
                            view demo
                        </div>
                    </button>
                </li>
                <li id='Enterprise' className='mb-6 sm:mb-4 menulist'>
                    <button className={`w-full hover:text-lightblue ${clickMenu ? "pointer-events-none" : ""}`} onClick={() => setClickMenu(!clickMenu)} >
                        <div className='Features flex items-center font-bold text-lg justify-between '>
                            Sign in
                        </div>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderMobileMenu