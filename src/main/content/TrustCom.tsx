
import air from '../../img/airbnb.png'
import Nasa from '../../img/Nasa.png'
import Uber from '../../img/Uber.png'
import Target from '../../img/target.png'
import NewyorkTime from '../../img/NY-time.png'
import Etsy from '../../img/Etsy.png'
const TrustCom = () => {
    return (
        <div className='layer-center'>
            <h2 className='text-center uppercase tracking-wide text-sm pt-14 mb-4  font-bold'>trusted by companies all over the world</h2>
            <ul className='flex justify-center items-center gap-10  flex-wrap sm:gap-0'>
                <li >
                    <img src={air} width="120px" alt="airbnb" className='object-contain h-14 sm:m-2.5' />
                </li>
                <li>
                    <img src={Nasa} width="100px" alt="nasa" className='object-contain h-12 sm:m-2.5' />
                </li>
                <li>
                    <img src={Uber} width="75px" alt="uber" className='object-contain h-12 sm:m-2.5' />
                </li>
                <li>
                    <img src={Target} alt="target" className='object-contain h-10 sm:m-2.5' />
                </li>
                <li>
                    <img src={NewyorkTime} width="250px" alt="NewyorkTime" className='object-contain h-14 sm:m-2.5' />
                </li>
                <li>
                    <img src={Etsy} width="120px" alt="Etsy" className='object-contain h-10 sm:m-2.5' />
                </li>
            </ul>

        </div>
    )
}

export default TrustCom