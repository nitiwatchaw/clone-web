import { useEffect, useRef, FC } from "react"
import { AiOutlineClose } from 'react-icons/ai'
import { Language } from './FooterData'


interface FooterProps {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    setIsScroll: React.Dispatch<React.SetStateAction<boolean>>
}

const FooterPopup: FC<FooterProps> = ({ isActive, setIsActive, setIsScroll }) => {



    const modalRef = useRef<HTMLDivElement>(null)


    useEffect(() => {

        if (isActive === true) {
            document.body.classList.add("body-modal");
            document.querySelector('main')?.classList.add("overflow-y-scroll")

        }
        return () => {
            document.body.classList.remove('body-modal');
            document.querySelector('main')?.classList.remove("overflow-y-scroll")
        };


    }, [isActive])


    const click = () => {
        setIsActive(!isActive);
        setIsScroll(true)
        if (window.innerWidth > 768) {
            setTimeout(turnback, 0);
        }

    }

    const turnback = () => {
        window.scrollTo({
            top: 3978,
            left: 0,
        });
    }

    return (
        <div className={`text-black   modal ${isActive ? "" : "hidden"} `} onClick={click}>
            <div className="bg-white bottom-32 px-16 pt-8 pb-4 absolute h-auto w-full max-w-modalWidth  sm:h-full sm:!overflow-auto sm:bottom-0" ref={modalRef}>
                <button onClick={click}
                    className="absolute top-4 right-4">
                    <AiOutlineClose className='text-2xl' />
                </button>
                <h4 className="text-lg font-medium mb-2 sm:text-center">Change Region</h4>
                <p className="text-base font-normal sm:text-sm sm:text-center">Selecting a different region will change the language and content of slack.com.</p>
                < div className="mt-8 flex justify-between sm:flex-col">
                    {Language.map((e, i) => {
                        return (
                            <div key={i} className="sm:mb-4">
                                <h5 className="uppercase tracking-wider mb-4"> {e.Zone}</h5>
                                {e.language.map((e, i) => {
                                    return (
                                        <div key={i} className="mb-4 ">
                                            <a href="" className="font-normal hover:text-lightblue hover:underline text-base  sm:text-sm sm:font-medium">{e.title}</a>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default FooterPopup