import { useState, useEffect, useRef } from 'react';
import '../animations.css';

function Kitty() {
    return (
        <div className='kitty' />
    );
}

function KittyIdle( {ballPosition} ) {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    const speed = 0.5;
    const distanceThreshold = 1;
    const kittyPosition = useRef(winWidth / 2 - 216);
    const [position, setPosition] = useState(winWidth / 2 - 216);

    useEffect(() => {
        let animationFrame;

        const animateKitty = () => {
            const distance = ballPosition - kittyPosition.current - 183;

            if (distance + 80 < distanceThreshold) {
                kittyPosition.current -= speed
            } 
            if (distance - 80 > distanceThreshold) {
                kittyPosition.current += speed
            }
            setPosition(kittyPosition.current);
            animationFrame = requestAnimationFrame(animateKitty);
        };
        animateKitty();
        return (() => cancelAnimationFrame(animationFrame));
    },[ballPosition]);

    return (
        <div className="kitty-idly" style={{top: `${winHeight - 216}px`, left: `${position}px`}}/>
    );
}

export {Kitty, KittyIdle};
