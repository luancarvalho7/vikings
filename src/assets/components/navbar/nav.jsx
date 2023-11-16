import './nav.css'
import logo from '../../images/logo.png'

import { useNavigate } from 'react-router-dom'


export function Nav({ v33, vipAccess = false, inicio, home}) {

    const navigate = useNavigate()
    function navigateHome() {
        if (v33) {
            navigate('/v33')
        }
        else if(vipAccess && inicio==false){
            navigate('/viplion')
        }
        else if(vipAccess && inicio){
            navigate('/vipsb')
        }
        else if(vipAccess && home){
            navigate('/modevip')
        }
        else if(inicio && vipAccess==false){
            navigate('/inicio')
        }
        else if(home && vipAccess==false){
            navigate('/home')
        }
        else {
            navigate('/')
        }
    }


    return <header className="headerContainer">
        <div className="logoContainer">
            <img
                src="https://i.postimg.cc/hvptf6C5/logo.webp"
                alt="logo"
                width={120}
                sizes="100vw"
                style={{
                    objectFit: "contain",
                }}
                className="logoImage"

                onClick={navigateHome}
            />
        </div>{
            vipAccess ? <button className="vipButton bg-gradient">  Membro VIP  </button> : <a href="https://checkout.b4you.com.br/VY0X7rb_rE" target="_blank" rel="noopener noreferrer">
                <button className="vipButton bg-gradient">  Acesso VIP    </button>
            </a>

        }





    </header >
}

