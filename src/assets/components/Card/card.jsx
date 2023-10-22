import './card.css'



export function Card() {


    const profit = 15352
    const formattedProfit = (profit / 1000).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
    const userName = "José D."
    
    const onlinePlayers = 100
    
    const gameImage = "https://i.postimg.cc/NFm7g5YQ/spacemen-vc.png"
    const userPfp = "https://i.postimg.cc/brJDBW51/icon-Analist.png"

    return <>

        <div className="cr-stroke">
            <div className="cardRoom">
                <div className="status-players">
                    <div className="status-circle"></div>
                    <p>{onlinePlayers} jogadores</p>
                </div>

                <div className="cr-userProfile">
                    <img src={userPfp} />
                    <h1>{userName}</h1>
                </div>

                <div className="cr-profit">
                    <h1>R$ {formattedProfit}</h1>
                    <p>Lucro Hoje</p>
                </div>

                <img src={gameImage} alt="" className="gameImage" />

                <button className="joinBtn">ENTRAR</button>
            </div>
        </div>

    </>
}