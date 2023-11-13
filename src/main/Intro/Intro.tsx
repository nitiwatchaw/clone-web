import google from '../../img/google.png'
import video from '../../video/Team discussing work in the Slack app.mp4'
const Intro = () => {
    return (
        <div className='overflow-hidden'>
            <div className="introl-grid layer-center pb-20 pt-24 items-center sm:pt-24 sm:pb-0" style={{ maxWidth: "76.875rem" }}>
                <div className="w-full">
                    <h1 className="text-white text-6xl font-bold header-text">Made for people.
                        <br />  <span className="text-secondary ">Built for productivity.</span>
                    </h1>
                    <p className="text-white mt-6 mb-8 text-xl">Connect the right people, find anything you need and automate the rest.
                        That's work in Slack, your productivity platform.
                    </p>
                    <div className="flex items-center gap-3 md:flex-col">
                        <button className="tracking-wide uppercase bg-white ani h-14 px-10 text-sm rounded text-primary font-bold hover:btn2-shadow focus:bg-fuchsia-900 focus:text-white md:w-full">sign up with email</button>
                        <button className=" relative border-2 border-blue-500 tracking-wide uppercase bg-blue-500 ani py-0.5 pl-0.5 h-14 pr-4 flex items-center gap-3 text-white text-sm rounded font-bold focus:bg-white focus:text-blue-500 focus md:w-full md:justify-center">
                            <div className='bg-white rounded-sm h-12 w-12 flex object-cotain items-center justify-center md:absolute md:left-0.5 '>
                                <img src={google} alt="" width={35} />
                            </div>

                            sign up with google
                        </button>
                    </div>
                    <p className='mt-4 text-white  text-xl sm:hidden'>Slack is free to try for as long as you'd like</p>
                </div>
                <div className="sm:mt-8">
                    <video src={video} autoPlay loop className='video'
                        title='Team discussing work in the Slack app'></video>
                </div>
            </div>
        </div>
    )
}

export default Intro