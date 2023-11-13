import { Data } from '../Features/FeaturesData'
import img from '../../header/header-img/thumb-nav-slack-ai@2x.png'
import { BsArrowRight } from 'react-icons/bs'

const FeaturesMenu = () => {
    return (
        <ul className={`flex content-inside-menu-mobile sm:flex-col`}  >
            <li className='flex-1 py-3'>
                <ul className='grid grid-cols-3 nr:grid-cols-2 grid-col-1 sm:pl-4'>
                    {Data.map((e, i) => {
                        return (
                            <li key={i}>
                                <a href="" className='flex flex-col pb-4 group'>
                                    <div className="flex items-center gap-2">
                                        {e.icon}
                                        <div className=' text-neutral-900 group-hover:text-lightblue sm:font-medium sm:text-lg sm:text-neutral-800'>{e.title}</div>
                                    </div>
                                    <div className='text-sm text-neutral-500'>{e.subTitle}</div>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </li>
            <li className='p-4 bg-thirdary w-56 rounded-lg sm:w-72 sm:mb-4' >
                <div className='uppercase text-black  font-bold text-sm pb-2'>
                    featured
                </div>
                <ul >
                    <li>
                        <a href="" className='group'>
                            <div className='pb-8 mb-8 border-b border-stone-300'>
                                <img src={img} alt="" className='h-100 mb-2 ' />
                                <div className='pb-2 text-black text-base font-normal tracking-wide sm:font-medium sm:text-lg sm:tracking-tight'>
                                    Power productivity with all new innovations in Slack
                                </div>
                                <div className='link-content group-hover:underline-hover text-base pb-1 sm:text-lg sm:font-medium '>
                                    Read announcement
                                    <span><BsArrowRight className="text-xl " /></span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <ul className='text-black font-normal'>
                            <li className='p-2 hover:text-lightblue sm:font-medium sm:text-lg sm:pb-0'>
                                <a href="">
                                    What is Slack?
                                </a>

                            </li>
                            <li className='p-2 hover:text-lightblue sm:font-medium sm:text-lg sm:pb-0'>
                                <a href="">
                                    Slack vs. Email
                                </a>
                            </li>
                            <li className='p-2 hover:text-lightblue sm:font-medium sm:text-lg sm:pb-0'>
                                <a href="">
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default FeaturesMenu