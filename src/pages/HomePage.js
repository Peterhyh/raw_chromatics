import mountain from '../assets/img/mountain_cliff.png';
import pic from '../assets/img/me.jpg';

const HomePage = () => {
    return (
        <div className='template'>
            <div className='card'>
                <img className='card-img' src={mountain} alt='mountain' />
            </div>
            <div className='card'>
                <div className='card-inner-border'>
                    <div className='profile-pic'>
                        <img src={pic} alt='picture' />
                    </div>
                    <div className='card-description'>
                        <p>ipsom loram</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;