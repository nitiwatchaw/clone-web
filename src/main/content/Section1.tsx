
import video from '../../video/Using the Workday integration to quickly file an expense report in the Slack app.webm'
import videoMobile from '../../video/Mobile Using the Workday integration to quickly file an expense report in the Slack app mobile.webm'
import { BsArrowRight } from 'react-icons/bs'
const Section1 = () => {
    return (
        <section className='py-12'>
            <div className='grid  section-center-left justify-center items-center '>
                <video src={video} autoPlay loop className='video-width'
                    title="Using the Workday integration to quickly file an expense report in the Slack app">
                </video>
                <video src={videoMobile} autoPlay loop className='video-width-mobile'
                    title="Using the Workday integration to quickly file an expense report in the Slack app">
                </video>
                <div className="nr:max-w-lg  mr-auto ml-auto mb-0  nr:mt-4 sm:pt-4 sm:ml-4 ">
                    <h3 className='title-content nr:text-3xl'>Move faster with your tools in one place</h3>
                    <p className='paragraph-content '>Automate away routine tasks with the power of generative AI
                        and simplify your workflow with all your favorite apps react to go in Slack. </p>

                    <a href="" className='link-content'>
                        Learn more about the Slack platform
                        <span><BsArrowRight /></span>

                    </a>

                </div>
            </div>
        </section>
    )
}

export default Section1