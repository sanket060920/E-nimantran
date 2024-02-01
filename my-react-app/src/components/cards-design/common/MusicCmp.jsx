import '../common/cards.css'; 
import GungunaveMusic from '../card-1/image/gungunave.mp3'
const MusicCmp = () => {
  return (
      
      <div className='Music-main'>
        <audio controls className='Music-audio'>
        <source src={GungunaveMusic} type="audio/mp3"></source>
        Your browser does not support the audio element.
        </audio>
      </div>

)
};
export default MusicCmp;

