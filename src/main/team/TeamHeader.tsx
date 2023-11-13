
import emojiBuilding from '../../img/emoji/emoji-office-building.png'
import emojiGraph from '../../img/emoji/emoji-chart-upward-trend.png'
import emojiLock from '../../img/emoji/emoji-lock.png'
import emojiSkylink from '../../img/emoji/emoji-skyline.png'
import emojiShake from '../../img/emoji/emoji-handshake.png'
import emojiWomen from '../../img/emoji/emoji-woman-technologist.png'
import { motion } from 'framer-motion'

const TeamHeader = () => {

    const squareVariants = {
        hidden: { opacity: 0, scale: 0 },
    };

    return (
        <div className=' text-center pt-14 pb-8 relative'>
            <div className="layer-center relative z-30">
                <h3 className='font-bold text-5xl tracking-tight mt-10 mb-6 text-black nr:text-3xl'>Teams large and small rely on Slack</h3>
                <p className='text-lg font-medium mb-6 text-black'>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
                <div className="mb-16 mt-4 sm:flex sm:flex-col">
                    <button className='bg-primary text-sm tracking-wide uppercase rounded text-white font-bold h-14 px-10 hover:bg-primaryhover ani'>Meet slack for enterprise</button>
                    <button className=' mt-4 bg-white text-sm border ml-2 border-primary tracking-wide uppercase rounded text-primary font-bold h-14 px-10 hover:btn2-shadow ani sm:ml-0'>talk to sales</button>
                </div>
                <ul className="flex items-center justify-around sm:flex-col sm:justify-between ">
                    <li className='max-width-190 text-left text-black text-sm sm:text-center'>
                        <p className='text-primary font-extrabold text-6xl leading-normal sm:percentSize'>85<span>%</span></p>
                        <p>of users say Slack has improved communication <sup>*</sup></p>
                    </li>
                    <li className='max-width-190 text-left text-black text-sm sm:text-center'>
                        <p className='text-primary font-extrabold text-6xl leading-normal sm:percentSize'>86<span>%</span></p>
                        <p>feel their ability to work remotely has improved <sup>*</sup></p>
                    </li>
                    <li className='max-width-190 text-left text-black text-sm sm:text-center'>
                        <p className='text-primary font-extrabold text-6xl leading-normal sm:percentSize'>88<span>%</span></p>
                        <p>feel more connected to their teams <sup>*</sup></p>
                    </li>
                </ul>
            </div>
            <motion.div className="absolute emoji-hero w-full lg:hidden">
                <motion.img
                    variants={squareVariants}
                    initial="hidden"
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: .4 } }}
                    viewport={{ once: true, amount: 0.25 }}
                    src={emojiBuilding} style={{ left: "13%", top: "32px", position: "absolute" }} alt="emojiBuilding" className='z-10' />
                <motion.img
                    variants={squareVariants}
                    initial="hidden"
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: true, amount: 0.25 }}
                    src={emojiGraph} style={{ position: "absolute", left: "6%", top: "163px" }} alt="emojiGraph" />
                <motion.img
                    variants={squareVariants}
                    initial="hidden"
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: .9 } }}
                    viewport={{ once: true, amount: 0.25 }}
                    src={emojiLock} style={{ position: "absolute", left: "17%", top: "242px" }} alt="emojiLock" />
                <motion.img
                    variants={squareVariants}
                    initial="hidden"
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: .9 } }}
                    viewport={{ once: true, amount: 0.25 }}
                    src={emojiSkylink} style={{ position: "absolute", right: "10%", top: "46px" }} alt="emojiSkylink" />
                <motion.img
                    variants={squareVariants}
                    initial="hidden"
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: .5 } }}
                    viewport={{ once: true, amount: 0.25 }}
                    src={emojiShake} style={{ position: "absolute", right: "15%", top: "150px" }} alt="emojiShake" />
                <motion.img
                    variants={squareVariants}
                    initial="hidden"
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: .8 } }}
                    viewport={{ once: true, amount: 0.25 }}
                    src={emojiWomen} style={{ position: "absolute", right: "7%", top: "233px" }} alt="emojiWomen" />
            </motion.div>

        </div>
    )
}

export default TeamHeader