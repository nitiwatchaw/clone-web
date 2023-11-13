import video from '../../video/A user starting a huddle and recording a video clip the Slack app.webm'
import { BsArrowRight } from 'react-icons/bs'
import videoMobile from '../../video//Mobile A user starting a huddle and recording a video clip the Slack app.webm'
const Section2 = () => {
    return (
        <section className='py-10'>
            <div className='grid section-center-right justify-center items-center'>
                <div className="nr:max-w-lg nr:mt-4 mr-auto ml-auto mb-0 nr:order-2 sm:mr-4  sm:pt-4">
                    <h3 className='title-content nr:text-3xl'>Choose how you want to work</h3>
                    <p className='paragraph-content '>In Slack, you've got all the flexibility
                        to work when, where and how ot's best for you.
                        You can easilty chat, send audio and video clips, or hop on a huddle to talk things out live.

                    </p>

                    <a href="" className='link-content'>
                        Learn more about flexible communication
                        <span><BsArrowRight /></span>

                    </a>

                </div>
                <video src={video} autoPlay loop className='video-width nr:ml-auto'
                    title="A user starting a huddle and recording a video clip the Slack app">

                </video>
                <video src={videoMobile} autoPlay loop className='video-width-mobile nr:ml-auto'
                    title="A user starting a huddle and recording a video clip the Slack app">

                </video>
            </div >
        </section>
    )
}

export default Section2