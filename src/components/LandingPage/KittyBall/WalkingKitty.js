import { useRef, useEffect, useState } from "react";
import '../../../animations.css';

const winHeight = window.innerHeight;

export default function WalkingKitty( {ballPosition, ballVelocity, isDragging} ) {
    const kittyRef = useRef(null);
    const LEFT = "left";
    const RIGHT = "right";
    const STAND = "";
    const winWidth = window.innerWidth;
    const distanceThreshold = 60;
    const kittyPosition = useRef(winWidth / 2 - 180);
    // Only used to render the kitty when dragging the ball
    const [position, setPosition] = useState(winWidth / 2 - 180);
    const [move, setMove] = useState(STAND);

    let speed;
    if (ballVelocity < 1 && ballVelocity > -1 && ballVelocity !== 0) {
        speed = Math.abs(ballVelocity);
    } else {
        speed = 1;
    }

    useEffect(() => {
        let animationFrame;

        const animateKitty = () => {
            const distance = ballPosition - kittyPosition.current;
            console.log(distance)
            if (distance < -distanceThreshold) {
                kittyPosition.current -= speed;
                setMove(LEFT);
            } else if (distance > distanceThreshold + 50) {
                kittyPosition.current += speed
                setMove(RIGHT);
            } else {
                setMove(STAND);
            }
            if (isDragging) setPosition(kittyPosition.current);
            animationFrame = requestAnimationFrame(animateKitty);
        };
        animateKitty();
        return (() => cancelAnimationFrame(animationFrame));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ballPosition]);

    return (
        <div className="">
        <div 
            ref={kittyRef}
            className={move === LEFT ? "kitty-lefty" : move === RIGHT ? "kitty-righty" : "kitty-idly"} 
            style={{
                top: `${winHeight - 216}px`,
                left: 0,
                transformOrigin: 'left',
                transform: `translateX(${kittyPosition.current * 5}px)`
            }}
        />
        </div>

    );
}