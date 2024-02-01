import '../common/cards.css'; 
const LocationCmp = () => {
  return (
      
      <div className='cmp4-main'>
        <h3 className='location-header'>...विवाह स्थळ...</h3>
        <div className='map'>
          <iframe className='ifrm'
              title="Location Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.655983005917!2d73.95597314797392!3d19.002705657762867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd30de26b6fef3%3A0x2b8139168b377762!2sGanraj%20Mangal%20Karyalay!5e0!3m2!1sen!2sin!4v1706593904981!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

)
};
export default LocationCmp;

