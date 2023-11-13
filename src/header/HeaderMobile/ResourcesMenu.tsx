import { Data } from '../Resources/ResourcesData'
import img from '../../img/nav-ad-dreamforce-registration@2x.png'
import { BsArrowRight } from 'react-icons/bs'

const ResourcesMenu = () => {
    return (
        <ul className={`flex content-inside-menu-mobile sm:flex-col`}  >
            <li className='flex-1 py-3'>
                <ul className='grid grid-cols-3 nr:grid-cols-2 grid-col-1'>
                    {Data.map((e, i) => {
                        return (
                            <li key={i}>
                                <a href="" className='flex flex-col pb-4 group'>
                                    <div className="flex items-center gap-2 sm:text-lg sm:font-medium">
                                        {e.icon}
                                        <div className=' text-black group-hover:text-lightblue'>{e.title}</div>
                                    </div>

                                </a>
                            </li>
                        )
                    })}
                </ul>
            </li>
            <li className='p-4 bg-thirdary w-56 rounded-lg sm:w-72 sm:mb' >
                <div className='uppercase text-black  font-bold text-sm pb-2'>
                    featured
                </div>
                <ul >
                    <li>
                        <a href="" className='group'>
                            <div className='pb-8 mb-8 border-b border-stone-300'>
                                <img src={img} alt="" className='h-100 mb-2 ' />
                                <div className='pb-4 text-black text-base font-normal tracking-wide sm:font-medium sm:text-lg sm:tracking-tight sm:pb-4'>
                                Discover the future of AI at Dreamforce 2023!
                                </div>
                                <div className='link-content group-hover:underline-hover text-base pb-1 sm:text-lg sm:font-mediu'>
                                    Read announcement
                                    <span><BsArrowRight className="text-xl " /></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <ul className='text-black font-normal'>
                            <li className='pb-4 hover:text-lightblue sm:font-medium sm:text-lg sm:pb-2'>
                                <a href="">
                                  Help Center
                                </a>

                            </li>
                            <li className='pb-4 hover:text-lightblue sm:font-medium sm:text-lg sm:pb-2'>
                                <a href="">
                                   Customer Support
                                </a>
                            </li>
                     
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default ResourcesMenu