import { useEffect, useRef } from 'react'
import download from '../../img/download.svg'
import img from '../header-img/thumb-nav-slack-ai@2x.png'
import { BsArrowRight } from 'react-icons/bs'
import { Data } from './FeaturesData'
import { RiArrowDropDownLine } from 'react-icons/ri'


const Features = ({ isFeatures, setIsFeatures }: any) => {

    const menuRef = useRef<HTMLAnchorElement>(null);



    useEffect(() => {
        const clickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsFeatures(false);

            }
        };
        document.body.addEventListener("mousedown", clickOutside);
        return () => {
            document.body.removeEventListener("mousedown", clickOutside);
        };
    }, [menuRef, setIsFeatures]);



    return (
        <>
            <a ref={menuRef} onClick={() => setIsFeatures(!isFeatures)} className='flex items-center py-1 px-3 cursor-pointer '>Features
                <span className='text-2xl mt-0.5 '><RiArrowDropDownLine className={`duration-100 ${isFeatures ? "rotate-180 " : ""}`} /></span>
            </a >
            <div className={`dropdown   ${isFeatures ? "dropdown-active" : "opacity-0 pointer-events-none"}`} >
                <ul className='flex '>
                    <li className='p-4'>
                        <ul className='h-full flex flex-col justify-between  '>
                            <li >
                                <ul className='grid grid-cols-3 gap-4'>
                                    {Data.map((e, i) => {
                                        return (
                                            <li key={i} className='w-48'>
                                                <a href="" className='hover:text-lightblue group hoverNew '>

                                                    <div className="flex gap-2 group-hover:fill-lightblue">
                                                        {e.icon}
                                                        <div className=' flex feature-menu-title group-hover:underline group-hover:text-lightblue'>
                                                            {e.title}
                                                        </div>
                                                    </div>


                                                    <div className='feature-menu-subtitle group-hover:text-lightblue'>{e.subTitle}</div>

                                                </a>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </li>
                            <li>
                                <ul className='flex items-center gap-1 text-lightblue text-sm'>
                                    <li className='pr-2 mr-2 border-r border-zinc-300 hover:underline'>
                                        <a href="">View demo</a>
                                    </li>
                                    <li className='flex items-center hover:underline'>
                                        <a href="" className='mr-1'>Download Slack </a>  <img src={download} alt="download" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>



                    <li className='p-4 bg-thirdary w-56 rounded-r-lg' >
                        <div className='uppercase text-black  font-bold text-sm pb-2'>
                            featured
                        </div>
                        <ul>
                            <li>
                                <a href="" className='group'>
                                    <div className='pb-8 mb-8 border-b border-stone-300'>
                                        <img src={img} alt="" width={190} className='h-100 mb-2 ' />
                                        <div className='pb-2 text-black text-sm font-normal tracking-wide'>
                                            Power productivity with all new innovations in Slack
                                        </div>
                                        <div className='link-content group-hover:underline-hover text-sm pb-1'>
                                            Read announcement
                                            <span><BsArrowRight className="text-xl " /></span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li >
                                <ul className='text-black font-normal'>
                                    <li className='p-2 hover:text-lightblue hover:underline'>
                                        <a href="">
                                            What is Slack?
                                        </a>

                                    </li>
                                    <li className='p-2 hover:text-lightblue hover:underline'>
                                        <a href="">
                                            Slack vs. Email
                                        </a>
                                    </li>
                                    <li className='p-2 hover:text-lightblue hover:underline'>
                                        <a href="">
                                            Accessibility
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                </ul >


            </div >
        </>
    )
}

export default Features