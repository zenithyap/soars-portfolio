import { useEffect, useRef, useState } from "react"

export default function BouncingBall() {
    const ballRef = useRef(null);
    const velocityRef = useRef({ x: 0, y: 0 });
    const positionRef = useRef({ x: 0, y: 50 });
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 50 });

    const ballSize = 50;
    const acceleration = 0.5;
    const bounceFactor = 0.5;
    const boundary = 20;
    useEffect(() => {
        let animationFrame;

        const animateBall = () => {
            if (!isDragging) {
                velocityRef.current.y += acceleration;

                let newX = positionRef.current.x + velocityRef.current.x;
                let newY = positionRef.current.y + velocityRef.current.y;
                // If bottom boundary
                if (newY > window.innerHeight + ballSize / 2) {
                    newY = window.innerHeight + ballSize / 2;
                    velocityRef.current.y *= -1 * bounceFactor;
                };
                // If up boundary
                if (newY < 0 + ballSize) {
                    newY = 0 + ballSize;
                    velocityRef.current.y *= -1 * bounceFactor;
                }
                // If left boundary
                if (newX < 0 ) {
                    newX = 0;
                    velocityRef.current.x *= -1 * bounceFactor;
                };
                //If right boundary
                if (newX > window.innerWidth - ballSize - boundary) {
                    newX = window.innerWidth - ballSize - boundary;
                    velocityRef.current.x *= -1 * bounceFactor;
                }

                positionRef.current = { x: newX, y: newY };
                setPosition({ x: newX, y: newY });
            };
            animationFrame = requestAnimationFrame(animateBall);
        };
        animateBall();
        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isDragging]);

    const handleMouseClick = (e) => {
        setIsDragging(true);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const newX = e.clientX - ballSize / 2;
        const newY = e.clientY + ballSize;
        const velX = e.movementX;
        const velY = e.movementY;
        positionRef.current = {x: newX, y: newY};
        velocityRef.current = {x: velX, y: velY};
        setPosition({x: newX, y: newY});
    };

    const handleMouseUp = (e) => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            style={{ position: "absolute", top: `${position.y}px`, left: `${position.x}px` }}
            ref={ballRef}
            className="rounded-full w-[50px] h-[50px] bg-blue-500"
            onMouseDown={handleMouseClick}
        />
    );
};
