import React from 'react'
import { Link } from 'react-router-dom';
import EvaImg from '../components/images/eva.jpg'
import TotkImg from '../components/images/totk.jpg'
import UnplashImg from '../components/images/unplash.jpg'
import Wallpaper1Img from '../components/images/wallpaper1.jpg'

const Navigate = () => {
    return (
        <div className='container mt-3 father'>
            <Link to="/Eva" className='links'>
                <figure>
                    <img src={EvaImg} alt=""  className='img-size'/>
                    <figcaption>
                        Eva
                    </figcaption>
                </figure>
            </Link>
            <Link to="/Totk" className='links'>
                <figure>
                    <img src={TotkImg} alt="" className='img-size'/>
                    <figcaption>
                        Totk
                    </figcaption>
                </figure>
            </Link>
            <Link to="/Unplash" className='links'>
                <figure>
                    <img src={UnplashImg} alt="" className='img-size'/>
                    <figcaption>
                        Unplash
                    </figcaption>
                </figure>
            </Link>
            <Link to="/Wallpaper1" className='links'>
                <figure>
                    <img src={Wallpaper1Img} alt="" className='img-size'/>
                    <figcaption>
                        Wallpaper1
                    </figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navigate