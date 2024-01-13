// FooterComponent.jsx
import React from 'react';
import '../card-2/card-2.css';
import '../commen-css/cards.css'
import Husband from "./image/Husband.jpg"
import Wife from "./image/Wife.jpg"
import father1 from "./image/father1.jpg"
import father2 from "./image/father2.jpg"
import mother1 from "./image/mother1.jpg"
import mother2 from "./image/mother2.jpg"
import brother1 from "./image/brother1.jpg"
import brother2 from "./image/brother2.jpg"
function Card_2() {
  return (
    <>
        <div className='section-1'>
            <h1 className='section-1-head_1'>भाविका आणि प्रशांत</h1>
            <h2 className='section-1-head_2'>।। यांचा शुभ मंगल विवाह ।।</h2>
        </div>


        <div className='section-2'>
            <h1 className='section-2-head_1'>वर आणि वधू</h1>
            <h2 className='section-2-head_2'>भाविका व प्रशांत च्या लग्नाकडे, डोळे लागले जगाचे… <br /> आहेरात आणा फक्त, अनमोल गिफ्ट आशीर्वादाचे…</h2>  
        </div>

        <div className='section-3'>
            <div className='wife'>
                <div className='wife-image'> 
                    <img src={Wife} alt="" />
                </div>
                <h1 className='wife-name'>चि. सौ. कां. भाविका</h1>
                <p className='wife-location'>कै.श्री. मिलिंद रमण खैरनार यांची द्वितीय कन्या <br /> रा. पिंपळनेर, ह.मु. कळवा, ठाणे</p>
            </div>
            <div className='husband'>
                <div className='husband-image'>
                    <img  src={Husband} alt="" />
                </div>
                <h1 className='husband-name'>चि. प्रशांत</h1>
                <p className='husband-location'> श्री. मोहन आनंदा पवार यांचे चतुर्थ चिरंजीव,<br />रा. नंदुरबार</p>
            </div>
        </div>

        <div className='family'>
            <div className='fathers'>
                <div className='husband-father align-item-ver-cntr'>
                    <div className=' family-member-image'>
                        <img className='' src={father1} alt="" />
                    </div>
                    <h1 className=''>श्री.मिलिंद खैरनार</h1>
                    <h2 className='color-gray'>-वराचे बाबा-</h2>
                </div>
                <div className='wife-father align-item-ver-cntr'>
                    <div className=' family-member-image '>
                        <img className='' src={father2} alt="" />
                    </div>
                    <h1 className=''>श्री.मोहन आनंदा पवार</h1>
                    <h2 className='color-gray'>-वधुचे बाबा-</h2>
                </div>
            </div>
            <div className='mothers'>
                <div className='husband-mother align-item-ver-cntr'>
                    <div className=' family-member-image '>
                        <img className='' src={mother1} alt="" />
                    </div>
                    <h1 className=''>सौ.आशा मिलिंद खैरनार</h1>
                    <h2 className='color-gray'>-वराची आई-</h2>
                </div>
                <div className='wife-mother align-item-ver-cntr'>
                    <div className=' family-member-image '>
                        <img className='' src={mother2} alt="" />
                    </div>
                    <h1 className=''>सौ.लताबाई पवार</h1>
                    <h2 className='color-gray'>-वधूची आई-</h2>
                </div>
            </div>
            <div className='brothers'>
                <div className='husband-brother align-item-ver-cntr'>
                    <div className=' family-member-image '>
                        <img className='' src={brother1} alt="" />
                    </div>
                    <h1 className=''>चि. निलेश सुभाष तरटे</h1>
                    <h2 className='color-gray'>-वराचा भाऊ -</h2>
                </div>
                <div className='wife-brother align-item-ver-cntr'>
                    <div className=' family-member-image '>
                        <img className='' src={brother2} alt="" />
                    </div>
                    <h1 className=''>चि. निलेश सुभाष तरटे</h1>
                    <h2 className='color-gray'>-वधुचे भाऊ -</h2>
                </div>
            </div>
        </div>


        <div className='Quote'>
            <h2 className='section-2-head_2'>लग्नामुळे जुळतात, सासर आणि माहेर… <br /> तुमचा प्रेमळ आशीर्वाद, हाच आमचा आहेर.....</h2>  
        </div>

        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cJLQvjwirCE?si=nEvpv6i0u129HuiC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className='section-4'>
            <h1 className=''>कार्यक्रम</h1>
        </div>
        <div className='section-5'>
            <div className='halad'>
                <img className='' src="" alt="" />
                <h1 className=''>हळद</h1>
                <h2 className=''>रविवार, दि. ४ डिसेम्बर २०२३  रोजी <br /> विवाहस्थळी</h2>
            </div>
            <div className='location'>
                <img className='' src="" alt="" />
                <h1 className=''>विवाहस्थळ</h1>
                <h2 className=''>कन्यादान मंगल कार्यालय ०८,<br /> नवल रोड, अहिंसा चौक , नंदुरबार.</h2>
            </div>
            <div className='time'>
                <img className='' src="" alt="" />
                <h1 className=''>लग्न</h1>
                <h2 className=''>सोमवार, ५ डिसेम्बर २०२३ रोजी <br /> १२. २२ मिनीटांनी <br /> विवाहस्थळी</h2>
            </div>
        </div>
        
    </>
  );
}

export default Card_2;
