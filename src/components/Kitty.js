import { useState, useEffect, useRef } from 'react';
import '../animations.css';

const winHeight = window.innerHeight;

function Kitty() {
    return (
        <div className='kitty' />
    );
}

function KittyIdle( {ballPosition, ballVelocity} ) {
    const LEFT = "left";
    const RIGHT = "right";
    const STAND = "";
    const winWidth = window.innerWidth;
    const distanceThreshold = 1;
    const kittyPosition = useRef(winWidth / 2 - 216);
    const [position, setPosition] = useState(winWidth / 2 - 216);
    const [move, setMove] = useState("left");

    let speed;
    if (ballVelocity < 1 && ballVelocity > 0) {
        speed = ballVelocity;
    } else {
        speed = 1;
    }

    useEffect(() => {
        let animationFrame;

        const animateKitty = () => {
            const distance = ballPosition - kittyPosition.current - 183;

            if (distance + 70 < distanceThreshold) {
                kittyPosition.current -= speed;
                setMove(LEFT);
            } else if (distance - 100 > distanceThreshold) {
                kittyPosition.current += speed
                setMove(RIGHT);
            } else {
                setMove(STAND);
            }
            setPosition(kittyPosition.current);
            animationFrame = requestAnimationFrame(animateKitty);
        };
        animateKitty();
        return (() => cancelAnimationFrame(animationFrame));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ballPosition]);

    return (
        <div 
            className={move === LEFT ? "kitty-lefty" : move === RIGHT ? "kitty-righty" : "kitty-idly"} 
            style={{
                top: `${winHeight - 216}px`, 
                left: `${position}px`
            }}
        />
    );
}

export {Kitty, KittyIdle};
