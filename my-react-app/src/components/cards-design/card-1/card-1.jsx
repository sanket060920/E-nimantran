import '../card-1/card-1.css'; 
import '../common/cards.css'; 
import FirstCmp from '../common/Cmp1.jsx';
import SecondCmp from '../common/Cmp2.jsx';
import ThirdCmp from '../common/Cmp3.jsx';
import FourthCmp from '../common/Cmp4.jsx';
import Footer from '../common/Footer.jsx';
import FifthCmp from '../common/Cmp5.jsx';
// import SixthCmp from '../common/Cmp6.jsx';

const Card1 = () => {
  return (

    <>
    <FirstCmp/>
    <SecondCmp/>
    <ThirdCmp/>
    <FifthCmp/>
    <FourthCmp/>
    {/* <SixthCmp/> */}
    <Footer/>

    {/* <div className='card1-main-sec'>

</div> */}
    </>

  )
};


export default Card1;
