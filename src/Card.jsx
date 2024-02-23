import ProPic from './assets/Image.jpg'

function Card (){

    return (
        <div className="card">
            <img className='card-image' src={ProPic} alt="profile pic" />
            <h2 className='card-title'>Im Muhsin</h2>
            <p className='card-text'>I Love React, i love computer science</p>
        </div>
    );
}

export default Card;