import { useState, useEffect, useRef } from 'react';
import '../animations.css';

const winHeight = window.innerHeight;

function Kitty() {
    return (
        <div className='kitty' />
    );
}

function KittyIdle( {ballPosition} ) {
    const winWidth = window.innerWidth;
    const speed = 1;
    const distanceThreshold = 1;
    const kittyPosition = useRef(winWidth / 2 - 216);
    const [position, setPosition] = useState(winWidth / 2 - 216);
    const [isMoveLeft, setIsMoveLeft] = useState(false);
    const [isMoveRight, setIsMoveRight] = useState(false);

    useEffect(() => {
        let animationFrame;

        const animateKitty = () => {
            const distance = ballPosition - kittyPosition.current - 183;

            if (distance + 80 < distanceThreshold) {
                kittyPosition.current -= speed;
                setIsMoveLeft(true);
            } else if (distance - 80 > distanceThreshold) {
                kittyPosition.current += speed
                setIsMoveRight(true);
            } else {
                setIsMoveLeft(false);
                setIsMoveRight(false);
            }
            setPosition(kittyPosition.current);
            animationFrame = requestAnimationFrame(animateKitty);
        };
        animateKitty();
        return (() => cancelAnimationFrame(animationFrame));
    },[ballPosition]);

    return (
        <div 
            className={isMoveLeft ? "kitty-lefty" : isMoveRight ? "kitty-righty" : "kitty-idly"} 
            style={{
                top: `${winHeight - 216}px`, 
                left: `${position}px`
            }}
        />
    );
}

export {Kitty, KittyIdle};
