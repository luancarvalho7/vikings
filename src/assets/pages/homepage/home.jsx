import './home.css'

import { Nav } from "../../components/navbar/nav";
import { Badge } from '../../components/buttons/badge';

import ball from '../../images/svg/ball.svg'
import playingcards from '../../images/svg/playingcards.svg'
import rocket from '../../images/svg/rocket.svg'
import slots from '../../images/svg/slots.svg'

import signals from '../../images/svg/signals.svg'




export function Home() {
    return (
        <section id="home">
            <Nav />

            <div>
                <h1 id="mainHeading" className='borderSpacing'>
                    Com qual jogo você <br />
                    deseja{" "}
                    <span className="specialText txt-gradient">
                        lucrar
                    </span>{" "}
                    hoje?
                </h1>
                <div className="gameGrid borderSpacing" >
                    {<Badge img={rocket} txt={"Crash"} extra={0} />}

                    {<Badge img={slots} txt={"Slots"} extra={0} />}


                    {<Badge img={playingcards} txt={"Cassino"} extra={1} />}

                    {<Badge img={ball} txt={"Esportes"} extra={2} />}

                </div>
                <div className="liveGames">
                    <div className="sectionTitle">
                        <img src={signals} alt="" width={22} height={22}/>
                        <h1>Salas de operações ao vivo</h1>
                    </div>
                    <div className="liveGamesGrid">
                        
                    </div>
                </div>
            </div>


        </section>
    )
}