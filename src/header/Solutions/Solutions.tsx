import React, { useRef, useEffect } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import download from '../../img/download.svg'
import { Data } from './SolutionData'
import { BsArrowRight } from 'react-icons/bs'
import img from '../header-img/promo-solutions@2x.png'

const Solutions = ({ isSolution, setIsSolution }: any) => {


    const menuRef = useRef<HTMLAnchorElement>(null);



    useEffect(() => {
        const clickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsSolution(false);

            }
        };
        document.body.addEventListener("mousedown", clickOutside);
        return () => {
            document.body.removeEventListener("mousedown", clickOutside);
        };
    }, [menuRef, setIsSolution]);


    return (
        <div>
            <a ref={menuRef} onClick={() => setIsSolution(!isSolution)} className='cursor-pointer flex items-center py-1 px-3'>Solutions
                <span className='text-2xl mt-0.5'><RiArrowDropDownLine className={`duration-100 ${isSolution ? "rotate-180 " : ""}`} /></span>
            </a>
            <div className={`dropdown   ${isSolution ? "dropdown-active" : "opacity-0 pointer-events-none"}`} >
                <ul className='flex '>
                    <li className='p-4'>
                        <ul className='h-full flex flex-col justify-between  '>
                            <li >
                                <ul className='grid grid-cols-3 gap-4'>
                                    {Data.map((e, i) => {
                                        return (
                                            <li key={i} className='w-44'>
                                                <div className='text-black font-bold uppercase  pb-4'>{e.title}</div>
                                                <ul>
                                                    {e.subTitle.map((e, i) => {
                                                        return (
                                                            <li key={i} className='pb-4'>

                                                                <a href=''
                                                                    className=' hover:text-lightblue group hoverNew  font-normal feature-menu-title group-hover:underline group-hover:text-lightblue'
                                                                >
                                                                    <div className='flex gap-2 group-hover:fill-lightblue' >
                                                                        {e.icon}
                                                                        <div>
                                                                            {e.title}
                                                                        </div>
                                                                    </div>
                                                                </a>

                                                            </li>
                                                        )
                                                    })}
                                                </ul>
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
                                <a href=""  className='group'>
                                    <div className='pb-8 mb-8 border-b border-stone-300'>
                                        <img src={img} alt="" width={190} className='h-100 mb-2 ' />
                                        <div className='pb-2 text-black text-sm font-normal tracking-wide'>
                                            How OpenAI connects customers and expands ChatGPT with Slack
                                        </div>
                                        <div className='link-content group-hover:underline-hover   text-sm pb-1'>
                                            Read Story
                                            <span><BsArrowRight className="text-xl " /></span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li >
                                <ul className='text-black font-normal'>
                                    <li className='p-2 hover:text-lightblue hover:underline'>
                                        <a href="">
                                            Task Management
                                        </a>

                                    </li>
                                    <li className='p-2 hover:text-lightblue hover:underline'>
                                        <a href="">
                                            Scale
                                        </a>
                                    </li>
                                    <li className='p-2 hover:text-lightblue hover:underline'>
                                        <a href="">
                                            Engagement
                                        </a>
                                    </li>
                                    <li className='p-2 hover:text-lightblue hover:underline'>
                                        <a href="">
                                            Trust
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                </ul >


            </div >
        </div >
    )
}

export default Solutions