import '../card-1/card-1.css'; 
import '../common/cards.css'; 
import FirstCmp from '../card-4/common/Cmp1.jsx';
import SecondCmp from '../card-4/common/CoupleDetailsCmp.jsx';
import ThirdCmp from '../card-4/common/Cmp3.jsx';
import FourthCmp from '../card-4/common/LocationCmp.jsx';
import Footer from '../card-4/common/FooterCmp.jsx';
import Gallerycmp from '../card-4/common/GalleryCmp.jsx';
import Timercmp from '../card-4/common/TimerCmp.jsx';
import SuvarnaKshanCmp from '../card-4/common/SuvarnaKshanCmp.jsx';
import SaptapadiCmp from '../card-4/common/SaptapadiCmp.jsx';
import SheduleCmp from '../card-4/common/SheduleCmp.jsx';
import Muscicmp from '../card-4//common/MusicCmp.jsx';

const Card1 = () => {
  return (
    <>
    <FirstCmp/>
    <Muscicmp/>
    <SecondCmp/>
    <SuvarnaKshanCmp/>
    <ThirdCmp/>
    <SaptapadiCmp/>
    <Gallerycmp/>
    <SheduleCmp/>
    <Timercmp/>
    <FourthCmp/>
    <Footer/>

    {/* <div className='card1-main-sec'>

</div> */}
    </>

  )
};


export default Card1;
