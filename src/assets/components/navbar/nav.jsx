import './nav.css'
import logo from '../../images/logo.png'


export function Nav() {
    return <header className="headerContainer">
        <div className="logoContainer">
            <img
                src={logo}
                alt="logo"
                width={50}
                height={50}
                sizes="100vw"
                style={{
                    objectFit: "contain",
                }}
                className="logoImage"
            />
            <h1 className="brandName">BetLion</h1>
        </div>
        <button className="vipButton bg-gradient">
            Acesso Vip
        </button>
    </header>
}

