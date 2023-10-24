import './home.css'

import { useLocation, useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Nav } from "../../components/navbar/nav";
import { Badge } from '../../components/buttons/badge';

import ball from '../../images/svg/ball.svg'
import playingcards from '../../images/svg/playingcards.svg'
import rocket from '../../images/svg/rocket.svg'
import slots from '../../images/svg/slots.svg'

import signals from '../../images/svg/signals.svg'
import { Card } from '../../components/Card/card';
import { useState, useEffect, useRef } from 'react';
import { BottomNav } from '../../components/navbar/bottomnav';




export function Home({ data, selectedGame, setSGame, }) {

    const location = useLocation();
    const navigate = useNavigate();
    const hasNavigatedAway = useRef(false);



    useEffect(() => {

        if (selectedGame.game != null) {

            console.log('backtohome')
            navigate('/chat');
            hasNavigatedAway.current = true;
        }
    }, [selectedGame])

    useEffect(() => {
        if (location.pathname === '/' && hasNavigatedAway.current) {
            setSGame(
                {
                    "game": null,
                    "vip": null,
                    "profit": null,
                    "analyst": null,
                    "onlinePlayers": null,
                    "gameImage": null,
                    "analystPfp": null,
                    "type": null,

                }
            );
            hasNavigatedAway.current = false;
        }
    }, [location]);



    return (
        <section id="home">

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
                        <img src={signals} alt="" width={22} height={22} id="signalsIcon" />
                        <h1>Salas de operações ao vivo</h1>
                    </div>
                    <section className="liveGamesGrid">

                        {/* SHOW CARDS SPEED RUN START */}
                        <div className="showCards">
                            <h1 className="sc-title borderSpacing">
                                Crash
                            </h1>
                            <div className="sc-view">
                                <Swiper slidesPerView={'auto'} centeredSlides={false} spaceBetween={0} className="mySwiper">
                                    {data.filter(game => game.type === "crash").map((current, index) =>
                                        <SwiperSlide key={index}>
                                            <Card data={current} setSGame={setSGame} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                        <div className="showCards">
                            <h1 className="sc-title borderSpacing">
                                Slots
                            </h1>
                            <div className="sc-view">
                                <Swiper slidesPerView={'auto'} centeredSlides={false} spaceBetween={0} className="mySwiper">
                                    {data.filter(game => game.type === "slots").map((current, index) =>
                                        <SwiperSlide key={index}>
                                            <Card data={current} setSGame={setSGame} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                        <div className="showCards">
                            <h1 className="sc-title borderSpacing">
                                Casino
                            </h1>
                            <div className="sc-view">
                                <Swiper slidesPerView={'auto'} centeredSlides={false} spaceBetween={0} className="mySwiper">
                                    {data.filter(game => game.type === "casino").map((current, index) =>
                                        <SwiperSlide key={index}>
                                            <Card data={current} setSGame={setSGame} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                        {/* SHOW CARDS SPEED RUN END */}
                    </section>

                </div>
            </div>


        </section>
    )
}