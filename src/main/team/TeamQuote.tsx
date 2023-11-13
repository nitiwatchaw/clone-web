import video from '../../video/Video featuring a Slack customer,_.mp4'
import { BiPlay } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { useEffect, useState, useRef } from 'react'
import videoIBM from '../../video/Video IBM.mp4'

const TeamQuote = () => {

    const [open, setOpen] = useState<HTMLIFrameElement | boolean>(false)

    useEffect(() => {
        if (open) {
            document.body.classList.add('scroll-none');
        }
        else {
            document.body.classList.remove('scroll-none');
        }

    })

    const videoRef: any = useRef(null)

    const pause = () => {
        setOpen(!open)
        if (videoRef.current) {
            const iframe: any = videoRef.current;
            const iframeContent = iframe.contentWindow || iframe.contentDocument;
            if (iframeContent.document) {
                const videoElement = iframeContent.document.getElementsByTagName('video')[0];
                if (videoElement) {
                    videoElement.pause();
                }
            }
        }
    }



    return (
        <>
            <div className="w-full flex justify-center">
                <div className='flex items-center justify-center gap-5 mx-0 my-auto nr:flex-col nr:gap-0' style={{ maxWidth: "1530px" }}>
                    <div onClick={() => setOpen(!open)} className='cursor-pointer relative flex w-1/2 items-center justify-center clip-path group nr:w-full nr:justify-normal'>
                        <div className="video-cover">
                            <video src={video} loop autoPlay title="Video featuring a Slack customer " className='video-2'>

                            </video>
                        </div>
                        <button className='group-hover:bg-darkblue  rounded right-0 absolute flex h-14 justify-center items-center w-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-500 '>
                            <BiPlay className="text-3xl text-white " />
                        </button>
                    </div>
                    <div className="w-1/2 p-8 flex flex-col nr:w-full">
                        <p className='text-black font-normal  italic text-3xl mb-6 sm:paragraphSIze'>"Whether you're a small or large organization,
                            executing anything from a discrete modernization program to a digital
                            transformation initiative, Slack is an incrediblt powerful tool in the hybrid world."
                        </p>
                        <span className='text-black font-bold leading-4'>Jennifer Quinian</span>
                        <span className='text-black font-medium'>Managing Partner, IBM iX Americas Leader - Customer and Experience Transformation, IBM</span>
                        <a href="" className='link-content mt-2  pt-4 sm:m-0 sm:py-4'>See more customer stories <span><BsArrowRight /></span></a>
                    </div>

                    <iframe
                        ref={videoRef}
                        className={`${open ? "fixed top-0 w-full min-h-screen z-50 " : "hidden"}`}
                        src={videoIBM} >
                    </iframe>
                    <button onClick={pause} className={`${open ? "fixed top-0 right-0 text-white text-xl z-50" : "hidden invisible"}`}>X</button>
                </div>

            </div>
            <div className="text-center mx-auto my-0 pb-6 text-sm text-gray-700 weight" style={{ maxWidth: "76.875rem" }}>
                <p>
                    <sup>*</sup>
                    Weighted average. Based on 2,707 survey responses from weekly Slack users in the U.S.,
                    UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).
                </p>
            </div>

        </>
    )
}

export default TeamQuote