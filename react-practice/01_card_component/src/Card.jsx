import profilePic from './assets/photo.jpg'

function Card(){
    return(
        <div className='card'>
            <img className='card-image' src={profilePic} alt='profile picture'></img>
            <h2 className='card-tittle'>Kirill Velichutin</h2>
            <p className='card-text'>I study at DNSTU and aspire to excel in frontend development</p>
        </div>
    );
}

export default Card