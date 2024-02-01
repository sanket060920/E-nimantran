import '../card-1/card-1.css'; 
import '../common/cards.css'; 
import FirstCmp from '../common/Cmp1.jsx';
import SecondCmp from '../common/CoupleDetailsCmp.jsx';
import ThirdCmp from '../common/Cmp3.jsx';
import FourthCmp from '../common/LocationCmp.jsx';
import Footer from '../common/FooterCmp.jsx';
import Gallerycmp from '../common/GalleryCmp.jsx';
import Timercmp from '../common/TimerCmp.jsx';
import SuvarnaKshanCmp from '../common/SuvarnaKshanCmp.jsx';
import SaptapadiCmp from '../common/SaptapadiCmp.jsx';
import SheduleCmp from '../common/SheduleCmp.jsx';
import Muscicmp from '../common/MusicCmp.jsx';

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
