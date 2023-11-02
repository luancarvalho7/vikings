import './home.css'

import { useLocation, useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Badge } from '../../components/buttons/badge';

import ball from '../../images/svg/ball.svg'
import playingcards from '../../images/svg/playingcards.svg'
import rocket from '../../images/svg/rocket.svg'
import slots from '../../images/svg/slots.svg'

import signals from '../../images/svg/signals.svg'
import { Card } from '../../components/Card/card';
import { useState, useEffect, useRef } from 'react';
import { BannerSection } from './bannersSection/bannerSection';




export function Home({ data, selectedGame, setSGame, vipAccess = false, setAffLink, setV33, setVipAccess }) {

  const [category, setCategory] = useState(null)
  const location = useLocation();
  const navigate = useNavigate();
  const hasNavigatedAway = useRef(false);

  const GameSection = ({ title, gameType, data, setSGame, sort }) => {
    return (
      <div className="showCards">
        <h1 className="sc-title borderSpacing">
          {title}
        </h1>
        <div className="sc-view">
          <Swiper slidesPerView={'auto'} centeredSlides={false} spaceBetween={0} className="gameSwiper">
            {data
              .filter(game => game.type === gameType)
              .sort((a, b) => {
                if (sort) {
                  if (typeof a[sort] === 'number' && typeof b[sort] === 'number') {
                    return b[sort] - a[sort];
                  } else {
                    return a[sort] === b[sort] ? 0 : a[sort] ? 1 : -1;
                  }
                }
                return a.vip === b.vip ? 0 : a.vip ? 1 : -1;
              })
              .map((current, index) =>
                <SwiperSlide key={index}>
                  <Card data={current} setSGame={setSGame} vipAccess={vipAccess} />
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
      </div>
    );
  };

  const GameCategorySection = ({ title, gameType, data, setSGame, sort }) => {
    return (
      <section className="categorysection">
        <h1 className="sc-title borderSpacing">
          {title}
        </h1>
        <div className="category-view">
          {data
            .filter(game => game.type === gameType)
            .sort((a, b) => {
              if (sort) {
                if (typeof a[sort] === 'number' && typeof b[sort] === 'number') {
                  return b[sort] - a[sort];
                } else {
                  return a[sort] === b[sort] ? 0 : a[sort] ? 1 : -1;
                }
              }
              return a.vip === b.vip ? 0 : a.vip ? 1 : -1;
            })
            .map((current, index) =>
              <Card data={current} setSGame={setSGame} vipAccess={vipAccess} key={index} />
            )
          }
        </div>
      </section>
    );
  };


  useEffect(() => {

    if (selectedGame.game != null) {
      navigate('/chat');
      hasNavigatedAway.current = true;
    }
  }, [selectedGame])

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/v33' || location.pathname === '/viplion' && hasNavigatedAway.current) {
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
      setCategory(null)
      hasNavigatedAway.current = false;
    }
  }, [location]);

  useEffect(() => {

    console.log(category)
    if (location.pathname == '/viplion') {
      setVipAccess(true)
    }
    if (location.pathname == '/v33') {
      setV33(true)
      setAffLink("https://afiliado.realsbet.com/visit/?bta=45724&brand=realsbet&afp=app")
      setVipAccess(true)
    }
    if (location.pathname == '/') {
      setV33(false)
      setAffLink("https://go.aff.bullsbetaffiliate.com/64ep1444?source_id=app")
    }
  }, [])


  const checkedCategory = () => {
    if (category == 'Cassino') {
      return ('casino')
    } else if (category == 'Crash') {
      return 'crash'
    }
    else if (category == 'Slots') {
      return 'slots'
    }
  }

  return (
    <section id="home">
      <BannerSection/>
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
          {<Badge img={rocket} txt={"Crash"} extra={0} setCategory={setCategory} />}

          {<Badge img={slots} txt={"Slots"} extra={0} setCategory={setCategory} />}

          {<Badge img={playingcards} txt={"Cassino"} extra={1} setCategory={setCategory} />}

          {<Badge img={ball} txt={"Esportes"} extra={2} setCategory={setCategory} />}
        </div>
        <div className="liveGames">
          <div className="sectionTitle">
            <img src={signals} alt="" width={22} height={22} id="signalsIcon" />
            <h1>Salas de operações ao vivo</h1>
          </div>
          {
            category == null ? <section className="liveGamesGrid">
              <GameSection title="Crash" gameType="crash" data={data} setSGame={setSGame} sort="vip" />
              <GameSection title="Slots" gameType="slots" data={data} setSGame={setSGame} sort="vip" />
              <GameSection title="Casino" gameType="casino" data={data} setSGame={setSGame} sort="vip" />
            </section> : ''
          }

          {category == null ? "" : <GameCategorySection title={category} gameType={checkedCategory()} data={data} setSGame={setSGame} sort="vip" />}


        </div>

        {vipAccess ? "" : <section className="ctaSection borderSpacing">
          <div className="cta-vip02-stroke" onClick={() => window.open('https://checkout.perfectpay.com.br/pay/PPU38CNC4TL', '_blank')}>
            <div className="cta-vip02">

            </div>
          </div>
        </section>}
      </div>


    </section>
  )
}