import './Footer.css';

const SocialMedia = () => {

    return(
        <>
            <h3 className='pb-0 mb-0'>
                Redes Sociales:
            </h3> 
            <ul className="list-inline">
                <li className="list-inline-item"><a href='facebook.com'><h4 className='text-warning'>Facebook</h4></a></li>
                <li className="list-inline-item"><a href='instagram.com'><h4 className='text-warning'>Instagram</h4></a></li>
                <li className="list-inline-item"><a href='twitter.com'><h4 className='text-warning'>Twitter</h4></a></li>
            </ul>
        </>
        
    )
    
}

export default SocialMedia