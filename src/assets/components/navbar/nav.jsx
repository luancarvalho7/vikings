import './nav.css'
import logo from '../../images/logo.png'


export function Nav() {
    return <header className="headerContainer">
        <div className="logoContainer">
            <img
                src={logo}
                alt="logo"
                width={150}
                height={50}
                sizes="100vw"
                style={{
                    objectFit: "contain",
                }}
                className="logoImage"
            />
        </div>
        <button className="vipButton bg-gradient">
            Acesso Vip
        </button>
    </header>
}

