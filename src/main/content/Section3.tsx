
import video from '../../video/A connected team discussing work in multiple channels in the Slack app.webm'
import { BsArrowRight } from 'react-icons/bs'
import videoMobile from '../../video/Mobile A connected team discussing work in multiple channels in the Slack app (1).webm'
const Section3 = () => {
    return (
        <section className='py-12'>
            <div className='grid  section-center-left justify-center items-center'>
                <video src={video} autoPlay loop className='video-width'
                    title="A connected team discussing work in multiple channels in the Slack app">

                </video>
                <video src={videoMobile} autoPlay loop className='video-width-mobile'
                    title="A connected team discussing work in multiple channels in the Slack app">
                </video>
                <div className="nr:max-w-lg nr:mt-4 mr-auto ml-auto mb-0 nr:order-2 sm:ml-4 sm:pt-4">
                    <h3 className='title-content nr:text-3xl'>Bring your text together</h3>
                    <p className='paragraph-content '>At the heart of Slack are
                        channels: organized spaces for everyone and everything you need for work.
                        In channels, it’s easier to connect across departments, offices, time zones and even other companies </p>

                    <a href="" className='link-content'>
                        Learn more about channels
                        <span><BsArrowRight /></span>

                    </a>

                </div>
            </div >
        </section>
    )
}

export default Section3