import './nav.css'
import logo from '../../images/logo.png'

import { useNavigate } from 'react-router-dom'


export function Nav({ v33 }) {

    const navigate = useNavigate()
    function navigateHome() {
        if (v33) {
            navigate('/v33')
        }
        else {
            navigate('/')
        }
    }


    return <header className="headerContainer">
        <div className="logoContainer">
            <img
                src={logo}
                alt="logo"
                width={120}
                sizes="100vw"
                style={{
                    objectFit: "contain",
                }}
                className="logoImage"

                onClick={navigateHome}
            />
        </div>
        <a href="https://checkout.perfectpay.com.br/pay/PPU38CNC4TL" target="_blank" rel="noopener noreferrer">
            <button className="vipButton bg-gradient">  Acesso Vip    </button>
        </a>


    </header >
}

