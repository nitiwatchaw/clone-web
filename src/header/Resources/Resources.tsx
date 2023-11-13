import React, { useRef, useEffect } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import download from '../../img/download.svg'
import { Data } from '../Resources/ResourcesData'
import { BsArrowRight } from 'react-icons/bs'
import img from '../../img/nav-ad-dreamforce-registration@2x.png'
const Resources = ({ isResources, setIsResources }: any) => {


    const menuRef = useRef<HTMLAnchorElement>(null);
    useEffect(() => {
        const clickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsResources(false);

            }
        };
        document.body.addEventListener("mousedown", clickOutside);
        return () => {
            document.body.removeEventListener("mousedown", clickOutside);
        };
    }, [menuRef, setIsResources]);



    return (
        <div>
            <a ref={menuRef} onClick={() => setIsResources(!isResources)} className='flex cursor-pointer items-center py-1 px-3'>Resources
                <span className='text-2xl mt-0.5'>
                    <RiArrowDropDownLine className={`duration-100 ${isResources ? "rotate-180 " : ""}`} />
                </span>
            </a>
            <div className={`dropdown   ${isResources ? "dropdown-active" : "opacity-0 pointer-events-none"}`} >
                <ul className='flex '>
                    <li className='p-4'>
                        <ul className='h-full flex flex-col justify-between  '>
                            <li >
                                <ul className='grid grid-cols-3 gap-4'>
                                    {Data.map((e, i) => {
                                        return (
                                            <li key={i} className='w-44'>
                                                <a href="" className='flex gap-2 font-medium'>
                                                    {e.icon}
                                                    <div className='text-black'>
                                                        {e.title}
                                                    </div>
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
                        <div className='uppercase text-black   font-bold text-sm pb-2'>
                            featured
                        </div>
                        <ul>
                            <li>
                                <a href="" className='group' >
                                    <div className='pb-8 mb-8 border-b border-stone-300'>
                                        <img src={img} alt="" width={190} className='h-100 mb-2 ' />
                                        <div className='pb-2 text-black text-sm font-normal tracking-wide'>
                                            Discover the future of AI at Dreamforce 2023!
                                        </div>
                                        <div className='link-content  group-hover:underline-hover  text-sm pb-1'>
                                            Watch on-demand
                                            <span><BsArrowRight className="text-xl " /></span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li >
                                <ul className='text-black font-normal'>
                                    <li className='p-2 hover:text-lightblue hover:underline'>
                                        <a href="">
                                            Help Center
                                        </a>

                                    </li>
                                    <li className='p-2 hover:text-lightblue hover:underline'>
                                        <a href="">
                                            Customer Support
                                        </a>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </li>

                </ul >


            </div >
        </div>
    )
}

export default Resources