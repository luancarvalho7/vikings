
import { useState } from 'react'
import './lives.css'
export function Lives() {


    return (
        <section id="livesPage">
            <div className="iframe-overlay"></div>
            <header className="topbgHeader bglives">
                <div className="headertransition"></div>
            </header>
            <div className="imgheaderBlock"></div>

            <div className="livesContent borderSpacing">
                <div className="lh-txt">
                    <img src='https://i.postimg.cc/MXkT0ZC3/assets.webp' id='liveImg'></img>
                    <h2>OPERAÇÕES EM CALL + SORTEIOS DE PIX 
                    TODA SEMANA
                    </h2>
                    <h3>  Venha fazer parte da comunidade, lucrar junto e concorrer a <strong className='h3W'>PIX TODAS AS SEMANAS</strong> em live. </h3>
                </div>
                <button className='bg-gradient bullsCta' onClick={() => window.open("https://chat.whatsapp.com/FIqMuSVgTYg9j8nfcHd7Sa", "_blank")} >ENTRAR</button>
            </div>
        </section>
    )
}   