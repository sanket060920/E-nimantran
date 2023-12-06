import React from 'react';
import '../card-1/card-1.css'; // Import the CSS file for styling.
import Husband from "./image/Husband.jpg"
import Wife from "./image/Wife.jpg"
const ResponsiveImage = () => {

  return (
    <div className='card-1-sec'>
      {/* <div className='sec-2'>
        <h1 className='sec-2-head'></h1>
        <p className='sec-2-para'></p>
      </div> */}
      <div className='sec-1'>
          <div className='sec-1-head'>
              <h1 className='sec-1-header' >वर-वधू</h1>
              <p>भाविका व प्रशांत च्या लग्नाकडे, डोळे लागले जगाचे… <br />
                आहेरात आणा फक्त, अनमोल गिफ्ट आशीर्वादाचे…</p>
          </div>
          <div className='couple'>
              <div className='hsbnd'>
                  <div className='couple-img-sec'>
                      <img className='couple-img' src={Wife} alt="" />
                  </div>
                  <h1 className='sec-1-header'>चि. सौ. कां. भाविका</h1>
                  <p className='sec-1-para'>कै.श्री. मिलिंद रमण खैरनार यांची द्वितीय कन्या <br /> रा. पिंपळनेर, ह.मु. कळवा, ठाणे</p>
              </div>
              <div className='wfi'>
                  <div className='couple-img-sec'>
                      <img className='couple-img' src={Husband} alt="" />
                  </div>
                  <h1 className='sec-1-header'>चि. प्रशांत</h1>
                  <p className='sec-1-para'>श्री. मोहन आनंदा पवार यांचे चतुर्थ चिरंजीव ,<br /> रा. नंदुरबार</p>
              </div>
          </div>
          </div>
    </div>
  );
};

export default ResponsiveImage;
