import { Data } from '../Solutions/SolutionData'
import img from '../../header/header-img/promo-solutions@2x.png'
import { BsArrowRight } from 'react-icons/bs'

const SolutionsMenu = () => {
    return (
        <ul className={`flex content-inside-menu-mobile sm:flex-col`}  >
            <li className='flex-1 py-3'>
                <ul className='grid grid-cols-3 nr:grid-cols-2 grid-col-1'>
                    {Data.map((e, i) => {
                        return (
                            <li key={i}>
                                <a href="" className='flex flex-col pb-4 group'>
                                    <div className=' text-black uppercase font-bold pb-4 sm:text-sm sm:pl-2'>{e.title}</div>
                                    <ul>{e.subTitle.map((e, i) => {
                                        return (
                                            <li key={i} className='pb-4  pl-2 font-medium text-neutral-600 flex gap-2 items-center hover:text-lightblue sm:text-lg'>
                                                {e.icon}
                                                <div>{e.title}</div>

                                            </li>
                                        )
                                    })}
                                    </ul>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </li>
            <li className='p-4 bg-thirdary w-56 rounded-lg sm:w-72 sm:mb-' >
                <div className='uppercase text-black  font-bold text-sm pb-2'>
                    featured
                </div>
                <ul >
                    <li>
                        <a href="" className='group'>
                            <div className='pb-8 mb-8 border-b border-stone-300'>
                                <img src={img} alt=""  className='h-100 mb-2 ' />
                                <div className='pb-2 text-black text-base font-normal tracking-wide sm:font-medium sm:text-lg sm:tracking-tight sm:pb-4'>
                                How OpenAI connects customers and expands ChatGPT with Slack
                                </div>
                                <div className='link-content group-hover:underline-hover text-base pb-1 sm:text-lg sm:font-medium'>
                                    Read Story
                                    <span><BsArrowRight className="text-xl " /></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <ul className='text-black font-normal'>
                            <li className='pb-3 hover:text-lightblue sm:font-medium sm:text-lg sm:pb-2'>
                                <a href="">
                                   Task ManageMent
                                </a>
                            </li>
                            <li className='pb-3 hover:text-lightblue sm:font-medium sm:text-lg sm:pb-2'>
                                <a href="">
                                   Scale
                                </a>
                            </li>
                            <li className='pb-3 hover:text-lightblue sm:font-medium sm:text-lg sm:pb-2'>
                                <a href="">
                                    Engagement
                                </a>
                            </li>
                            <li className='pb-3 hover:text-lightblue sm:font-medium sm:text-lg sm:pb-2'>
                                <a href="">
                                    Trust
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default SolutionsMenu