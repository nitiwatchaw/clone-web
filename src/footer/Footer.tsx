
import { useState } from 'react';
import logo from '../img/icon.png'
import { Data } from '../footer/FooterData.tsx'
import check from '../img/check.svg'
import { World } from './Logo.tsx'
import { RiArrowDropDownLine } from 'react-icons/ri'
import download from '../img/download.svg'
import { Twitter } from './Logo.tsx'
import { Facebook } from './Logo.tsx'
import { Youtube } from './Logo.tsx'
import { Linkin } from './Logo.tsx'
import FooterPopup from './FooterPopup.tsx';

const Footer = ({ setIsScroll }: any) => {

    const [worldHovered, setWorldIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false)

    const onMouseEnter = () => {
        setWorldIsHovered(true)
    }
    const onMouseLeave = () => {
        setWorldIsHovered(false)
    }



    return (
        <section className="bg-white">

            <div className=" bg-primary bg-circle-bot text-white text-center py-20 flex items-center justify-center" style={{ height: "370px" }}>
                <div className="layer-center">
                    <h3 className="text-5xl font-bold mb-8 sm:text-3xl">
                        See all you can accomplish with Slack
                    </h3>

                    <button className="hover:btn2-shadow ani tracking-wide py-4 px-10 rounded uppercase bg-white text-primary text-sm font-bold nr:w-full">try for free</button>
                    <button className="hover:btn-shadow ani ml-2 border border-white tracking-wide py-4 px-10 rounded uppercase bg-primary text-white text-sm font-bold nr:w-full nr:mt-4 nr:ml-0" >talk to sales</button>

                </div>
            </div>

            <div className="pt-12 flex justify-between items-start layer-center mb-8 nr:flex-col">
                <a href="">
                    <img src={logo} width={50} height={50} alt="" className='object-contain' />
                </a>
                <ul className='grid grid-cols-5  w-widthFooter  nr:mt-8   nr:mb-4  nr:w-full' >
                    {Data.map((e, i) => {
                        return (
                            <li key={i} >
                                <span className='h-10 block text-black text-sm font-bold uppercase'>{e.title}</span>
                                <ul>
                                    {e.content.map((e, i) => {
                                        return (
                                            <li key={i} >
                                                <a href="" className='text-sm h-10 block hover:text-lightblue '>
                                                    {e.title}
                                                </a>
                                            </li>
                                        )
                                    })}</ul>
                            </li>
                        )
                    })}
                </ul>
            </div>


            <div className="layer-center">
                <div style={{ backgroundColor: "#ebeaeb", width: "100%", height: "2px" }} />
                <div className='flex items-center  justify-between nr:flex-col nr:items-start'>
                    <ul className='flex text-sm font-bold flex-wrap nr:w-auto sm:flex-col sm:pt-4'>
                        <li className='mr-4 py-8 sm:py-4'>
                            <a href="" className='hover:text-lightblue'>Status</a>
                        </li>
                        <li className='mr-4 py-8 sm:py-4'>
                            <a href="" className='hover:text-lightblue'>Privacy</a>
                        </li>
                        <li className='mr-4 py-8 sm:py-4'>
                            <a href="" className='hover:text-lightblue'>Terms</a>
                        </li>
                        <li className='mr-4 py-8 sm:py-4'>
                            <a href="" className='flex items-center gap-1 hover:text-lightblue'><span><img src={check} alt="check" /></span>Your Privacy Choices</a>
                        </li>
                        <li className='mr-4 py-8 sm:py-4'>
                            <a href="" className='hover:text-lightblue'>Cookie Preference</a>
                        </li>
                        <li className='mr-4 py-8 sm:py-4'>
                            <a href="" className='hover:text-lightblue'>Contact Us</a>
                        </li>
                        <li className='mr-4 py-8 nr:pt-0 nr:basis-footerflexBasic sm:py-4 sm:mt-4'>
                            <a className='flex items-center gap-1 relative group hover:text-lightblue cursor-pointer '
                                onClick={() => { setIsActive(true); setIsScroll(false) }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <World worldHovered={worldHovered} />
                                Change Region
                                <RiArrowDropDownLine className={`group-hover:fill-lightblue text-2xl font-bold absolute duration-100 -right-6 sm:right-5 ${isActive ? "rotate-180" : ""}`} style={{ bottom: "-4px" }} />
                            </a>
                            <FooterPopup isActive={isActive} setIsActive={setIsActive} setIsScroll={setIsScroll} />
                        </li>

                    </ul>
                    <ul className='flex items-center font-bold  text-black nr:flex-col nr:items-start sm:w-full'>
                        <li className='mr-4 nr:pt-4 nr:pb-8 adjust-padding  '>
                            <a href="" className='  flex items-center gap-1 text-lightblue text-sm'>
                                <img src={download} alt="" />
                                Download Slack</a>
                        </li>
                        <ul className='flex items-center sm:justify-between  sm:w-full'>
                            <li className='mr-4 nr:py-8 nr:mr-0 '>
                                <a href="" className='twitter '>
                                    <Twitter />
                                </a>
                            </li>
                            <li className='mr-4 nr:py-8 nr:ml-4 nr:mr-0'>
                                <a href="">
                                    <Facebook />
                                </a>
                            </li>
                            <li className='mr-4 nr:py-8 nr:ml-4 nr:mr-0'>
                                <a href="">
                                    <Youtube />
                                </a>
                            </li>
                            <li className='mr-4 nr:py-8 nr:ml-4 nr:mr-0'>
                                <a href="">
                                    <Linkin />
                                </a>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="mb-8">
                    <span className='text-xs font-medium text-zinc-600'>
                        ©2023 Slack Technologies, LLC, a Salesforce company. All rights reserved.
                        Various trademarks held by their respective owners.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Footer