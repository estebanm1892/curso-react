import React from 'react'
import { Link } from 'react-router-dom';
import EvaImg from '../components/images/eva.jpg'
import TotkImg from '../components/images/totk.jpg'
import UnplashImg from '../components/images/unplash.jpg'
import Wallpaper1Img from '../components/images/wallpaper1.jpg'

const Navigate = () => {
    return (
        <div>
            <Link to="/Eva">
                <figure>
                    <img src={EvaImg} alt="" />
                    <figcaption>
                        Eva
                    </figcaption>
                </figure>
            </Link>
            <Link to="/Totk">
                <figure>
                    <img src={TotkImg} alt="" />
                    <figcaption>
                        Totk
                    </figcaption>
                </figure>
            </Link>
            <Link to="/Unplash">
                <figure>
                    <img src={UnplashImg} alt="" />
                    <figcaption>
                        Unplash
                    </figcaption>
                </figure>
            </Link>
            <Link to="/Wallpaper1">
                <figure>
                    <img src={Wallpaper1Img} alt="" />
                    <figcaption>
                        Wallpaper1
                    </figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navigate