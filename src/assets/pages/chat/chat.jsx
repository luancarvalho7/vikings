import './chat.css';
import { useLocation, useNavigate } from 'react-router-dom';

import { ChatStatus } from './chatStatus';
import { Message } from './message';
import { useState, useEffect } from 'react';

import { Nav } from '../../components/navbar/nav';

export function ChatPage({
    game = "",
    analystPfp = "https://i.postimg.cc/brJDBW51/icon-Analist.png",
    analyst = "John Doe",
    profit = 999999,
    onlinePlayers = 999
}) {



    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        if (location.pathname === '/' && hasNavigatedAway.current) {
            hasNavigatedAway.current = false;
        }

    }, [location]);

    useEffect(()=>{

        console.log(game)
        if(game==null){
            navigate('/')
        }
    }, [])

    /*DATA*/
    const [message, setMessage] = useState('typing');

    const data = {
        analysis: ["To buscando novos sinais glr", "to puxando novos sinais, aguenta aí fml"],
        announcing: ["Esse é bom em familia, segue ai!", "La vem a boa, toma ai!"],
    };



    const today = new Date();
    const hour = `${today.getHours()}:${today.getMinutes().toString().padStart(2, '0')}`;




    const typingSpeed = 1000 / 3.5; // milliseconds per character

    const getCrashSignal = () => {
        let results = [];

        const maxValues = {
            0: 1.5,
        };
        const propValue = 0;
        const max = maxValues[propValue];

        const generateNumber = () => {
            let num;
            do {
                num = Math.random() * max;
            } while (num <= 1.17);
            return num.toFixed(2);
        };

        for (let i = 0; i < 3; i++) {
            results.push(`Retirar em <strong class="greenGradientText"> ${generateNumber()}x </strong>`);
        }

        // 35% chance to skip a round
        if (Math.random() < 0.35) {
            results[1] = 'Pular Rodada';
        }

        return results.join('<br/>');
    };
    const getMinesSignal = () => {
        let newGrid = Array(5).fill(Array(5).fill('🟦')); // Resetting the grid
        newGrid = JSON.parse(JSON.stringify(newGrid)); // Deep copy
        let count = 0;
        const positions = [];

        while (count < 5) {
            const x = Math.floor(Math.random() * 5);
            const y = Math.floor(Math.random() * 5);
            const position = `${x}-${y}`;

            if (!positions.includes(position)) {
                newGrid[x][y] = '⭐';
                positions.push(position);
                count++;
            }
        }

        // Convert the grid to a string (or HTML)
        const gridString = newGrid.map(row => row.join('')).join('<br/>');
        return gridString;
    };
    const getFortuneSignal = () => {
        const random = () => Math.floor(Math.random() * (10 - 3) + 3);

        const normal = random();
        const turbo = random();

        return `entrem <strong>${normal}x</strong> normal e <strong>${turbo}x</strong> turbo alternado`;
    }
    const getRouletteSignal = () => {
        const signals = [
            "Entrem no vermelho",
            "Entrem no preto",
            "Joguem nos pares",
            "Joguem nos ímpares",
            "Entrem no 1 a 18",
            "Entrem no 19 a 36",
            "Entrem na 1ª e 2ª coluna",
            "Entrem na 1ª e 3ª coluna",
            "Entrem na 2ª e 3ª coluna",
            "Entrem na 1ª e 2ª dúzia",
            "Entrem na 1ª e 3ª dúzia",
            "Entrem na 2ª e 3ª dúzia",
            "Joguem na 1ª coluna",
            "Joguem na 2ª coluna",
            "Joguem na 3ª coluna",
            "Apostem na 1ª dúzia",
            "Joguem na 2ª dúzia",
            "Joguem na 3ª dúzia"
        ];

        const complements = ["1 tentativa", "2 tentativas", "3 tentativas"];

        const randomSignal = signals[Math.floor(Math.random() * signals.length)];
        const randomComplement = complements[Math.floor(Math.random() * complements.length)];

        return `${randomSignal}, vcs tem ${randomComplement}, não esqueçam de sempre cobrir o zero!`;
    };

    const getTwiceSignal = (op1, op2) => {
        const random = () => Math.floor(Math.random() * 2);

        const twiceOptions = [op1, op2]


        return twiceOptions[random()]

    }
    const getSquadSignal = (op1, op2, op3, op4) => {
        const random = () => Math.floor(Math.random() * 4);

        const squadOptions = [op1, op2, op3, op4]


        return squadOptions[random()]

    }



    const generateSignal = () => {
        const currentDate = new Date();
        const randomMinutes = Math.floor(Math.random() * 4) + 5;
        currentDate.setMinutes(currentDate.getMinutes() + randomMinutes);
        const timeLimit = `${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, '0')}`;


        let sinal = "";
        let finalMessage = ""

        /* 
                FREE GAMES */

        if (game == "Mines") {
            sinal = getMinesSignal()

            finalMessage = `
          Toma ai familia: <br/><br/>
          ${sinal} <br/>
          <br/>
          Joguem até as ${timeLimit}
        `
        }

        if (game === "Aviator" || game === "Spaceman") {
            sinal = getCrashSignal();

            finalMessage = `
              Toma ai familia: <br/><br/>
              ${sinal} <br/>
              <br/>
              Podem tentar 3 vezes, joguem até as ${timeLimit}
            `;
        }
        if (game === "FortuneTiger") {
            sinal = getFortuneSignal();
            finalMessage = `
            
            Tigrinho tá pagando muitoo <br/>
            ${sinal} <br/>
            jogem até as ${timeLimit}
            `
        }

        if (game === "Roulette") {
            sinal = getRouletteSignal();
            finalMessage = `${sinal}`
        }

        /*VIP GAMES*/

        if (game === "FortuneRabbit") {
            sinal = getFortuneSignal();
            finalMessage = `
            
            Sinalziho válido até ${timeLimit} <br/>
            ${sinal} <br/>
            Coelhinho ta pagando!
            `
        }

        if (game === "FortuneOx") {
            sinal = getFortuneSignal();
            finalMessage = `
            
            Sinalziho válido até ${timeLimit} <br/>
            ${sinal} <br/>
            TOURO FICOU MALUCO!
            `
        }


        if (game === "BacBo") {
            sinal = getTwiceSignal(`Entre no <strong class="greenGradientText"> Azul </strong> `, `Entre no <strong class="greenGradientText">Vermelho</strong>`)
            finalMessage = `Esse tá fácil! <br/>
            ${sinal} e marque o EMPATE. <br/> 
            Válido até ${timeLimit}!!`
        }
        if (game === "DragonTiger") {
            sinal = getTwiceSignal(`Aposte no <strong class="greenGradientText"> Dragão </strong> `, `Aposte no <strong class="greenGradientText">Tigre</strong>`)
            finalMessage = `É sinalzinho que vcs querem?? <br/>
            ${sinal} e marque o EMPATE. <br/> 
            Entrem até ${timeLimit}`
        }
        if (game === "FootballStudio") {
            sinal = getTwiceSignal(`Aposte na <strong class="greenGradientText"> Casa </strong> `, `Aposte no <strong class="greenGradientText">Visitante</strong>`)
            finalMessage = `É sinalzinho que vcs querem?? <br/>
            ${sinal} e lembra de marcar o EMPATE. <br/> 
            Entrem até ${timeLimit}`
        }

        if (game === "LightingDice") {
            sinal = getSquadSignal(`NÚMERO ALTO`, `NÚMERO BAIXO`, `QUALQUER DUPLO`, `QUALQUER TRIPLO`)
            finalMessage = `Podem apostar em <strong class="greenGradientText"> ${sinal}!! </strong> até ${timeLimit}`
        }

        if (game == "NinjaCrash") {
            sinal = (Math.floor(Math.random() * (4 - 2) + 2))
            finalMessage = `Entrem e façam <strong class="greenGradientText"> ${sinal} </strong> cortes até ${timeLimit}`
        }


        return { finalMessage, timeLimit };
    };

    const getRandomMessage = (type) => {
        const messages = data[type];
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    };


    useEffect(() => {
        let timer;
        let index = 0;
        const types = ['analysis', 'announcing'];

        const changeMessage = (currentIndex) => {
            setMessage('typing');

            const type = types[currentIndex];
            const nextMessageData = type === 'announcing' ? generateSignal() : { finalMessage: getRandomMessage(type) };
            const delay = nextMessageData.finalMessage.length * typingSpeed;

            timer = setTimeout(() => {
                setMessage(nextMessageData.finalMessage);

                const nextIndex = (currentIndex + 1) % types.length;

                let nextDelay;
                if (nextMessageData.timeLimit) {
                    const timeParts = nextMessageData.timeLimit.split(":");
                    const timeLimitDate = new Date();
                    timeLimitDate.setHours(parseInt(timeParts[0]));
                    timeLimitDate.setMinutes(parseInt(timeParts[1]));
                    nextDelay = timeLimitDate.getTime() - new Date().getTime();
                } else if (delay > 5000) {
                    nextDelay = Math.random() * 1500 + 4000;
                } else {
                    nextDelay = delay;
                }

                timer = setTimeout(() => changeMessage(nextIndex), nextDelay);
            }, delay);
        };

        timer = setTimeout(() => changeMessage(index), message.length * typingSpeed);

        return () => {
            clearTimeout(timer);
        };
    }, []);


    return (
        <section id='chatPage'>

            <Nav/>

            <ChatStatus
                profit={profit}
                analyst={analyst}
                onlinePlayers={onlinePlayers}
                analystPfp={analystPfp}
            />
            <div id='todayMsgDate'> <p className='greenGradientText'> HOJE</p>  </div>
            <Message analyst={analyst} analystPfp={analystPfp} message={message} hour={hour} />
            <iframe src='https://go.aff.bullsbetaffiliate.com/64ep1444?source_id=app' id='iframeCasino'></iframe>
        </section>
    );
}
